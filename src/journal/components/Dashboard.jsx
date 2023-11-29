import React, { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { listJournals } from "../action"
import { format } from 'date-fns'
import Clip from '../../assets/clip.svg'
import { Link } from "react-router-dom"
import SearchIcon from '../../assets/SearchIcon.svg'
import DashboardIcon from '../../assets/Dashboard.svg'
import NewPostIcon from '../../assets/NewPostIcon.svg'
import DashboardOneIconBlack from '../../assets/DashboardIconOneBlack.svg'
import DashboardIconBlack from '../../assets/DashboardIconBlack.svg'
import { addToTrash } from "../../trash/action"
import Edit from '../../assets/Edit.svg'
import Delete from '../../assets/Delete.svg'
import { selectJournal } from "../action"
import Cards from "./Cards"
import DashboardOneIcon from '../../assets/DashboardIconOne.svg'
import DownArrow from '../../assets/DownArrow.png'
import TopArrow from '../../assets/TopArrow.png'
import { listCategory } from "../action"
import styled, { keyframes } from "styled-components";
import FilterIcon from '../../assets/Filter.png'

function Dashboard() {
  const [showFullContent, setShowFullContent] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isColorChanged, setColorChanged] = useState(false);
  const [showCardsView, setCardsView] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null)
  const selectedEntryIdFromCards = useSelector((state) => state.entry.selectedEntryId);
  const accessToken = localStorage.getItem('accessToken')
  const [selectedCategory, setSelectedCategory] = useState('');
  const [pageNo, setPageNo] = useState(0);
  const [searchBy, setSearchBy] = useState('');
  console.log(searchBy);
  const [noData, setNoData] = useState(false);

  function formatDate(createdDate) {
    const date = new Date(createdDate);
    return format(date, "MMMM do, yyyy");
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCategory({accessToken}));
    dispatch(listJournals({accessToken, pageNo}));
  }, []);

  const entries = useSelector(state => state.entry.listData.data);
  const total = useSelector(state => state.entry.listData.totalItems);
  const categories = useSelector(state => state.entry.catList);
  useEffect(() => {
    const entry = entries ? entries.find(entry => entry.id === selectedEntryIdFromCards) || entries[0] : '';
    setSelectedEntry(entry);
  }, [selectedEntryIdFromCards, entries]);

  const handleClick = () => {
    setCardsView(!showCardsView);
    setColorChanged(!isColorChanged);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 800);
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearch = () => {
    dispatch(listJournals({accessToken, pageNo, searchBy}));
  };
  const handleEditClick = (entryId) => {
    dispatch(selectJournal(entryId));
  };

  const deleteEntries = async (entryId) => {
    dispatch(addToTrash({entryId, accessToken}));
    window.location.reload();
  };

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const handleSelectCategory = (event) => {
   setSearchBy(event.target.value);
    dispatch(listJournals({accessToken, pageNo, searchBy}));
  };

  const showMoreJournal = () => {
    setNoData(!noData)
    setPageNo((prevPageNo) => prevPageNo + 1);
    dispatch(listJournals({accessToken, pageNo}));
  };
  const showPrevJournal = () => {
    setPageNo((prevPageNo) => prevPageNo - 1);
    dispatch(listJournals({accessToken, pageNo}));
  };


  return (
    <Wrapper>
      <Header>
        <Search>
          <input
            type="text"
            placeholder="Search entry..."
            onChange={(e) => setSearchBy(e.target.value)} />
          <button>
            <img src={SearchIcon} alt="Search" onClick={handleSearch} />
          </button>
          <Filter>
            <select value={selectedCategory} onChange={handleSelectCategory}>
              <option value="">Select category</option>
              {categories.map((cat) => {
                return (
                  <option key={cat} value={cat}>{cat}</option>
                )
              })}
            </select>
          </Filter>
        </Search>
        <Icons>
          <Link onClick={handleClick}>
            <img src={isColorChanged && !isMobileView ? DashboardIcon : DashboardIconBlack} alt="Dashboard" />
          </Link>
          <Link to={'/new-entry'}>
            <img src={NewPostIcon} alt="NewPost" onClick={() => selectJournal(null)} />
          </Link>
          <Link onClick={handleClick} to={'/dashboard'}>
            <img src={isColorChanged && !isMobileView ? DashboardOneIconBlack : DashboardOneIcon} alt="Dashboard" />
          </Link>
        </Icons>
      </Header>
      {!showCardsView || isMobileView ? (
        <Content>
          <Main>
            {pageNo != 0 &&
             <BounceInvert src={TopArrow} alt="Down arrow" onClick={showPrevJournal} />
            }
            {entries && entries.map((entry) => {
              return (
                <Card key={entry.id} selected={selectedEntry && selectedEntry.id === entry.id} onClick={() => { setSelectedEntry(entry); }}>
                  <img src={Clip} alt="clip" />
                  <h3>{entry.title}</h3>
                  <h4>{formatDate(entry.createdAt)}</h4>
                  <Para>
                    <p dangerouslySetInnerHTML={{ __html: showFullContent ? entry.content : `${entry.content.substr(0, 200)}${entry.content.length > 200 ? "..." : ""}` }}
                    />
                    {isMobileView && entry.content.length > 200 && (
                      <ReadMoreButton key={entry.id} onClick={toggleContent}>
                        {showFullContent ? "Read Less" : "Read More"}
                      </ReadMoreButton>
                    )}
                  </Para>
                </Card>
              );
            }
            )}
            {setNoData &&  
            <Bounce src={DownArrow} alt="Down arrow" onClick={showMoreJournal} />
            }
          </Main>
          <EntryBox key={selectedEntry ? selectedEntry.id : ''} selected={isMobileView}>
            <ActionsIcons>
              <Link to={'/new-entry'}>
                <img
                  src={Edit}
                  alt="Edit"
                  onClick={() => handleEditClick(selectedEntry ? selectedEntry.id : '')}
                />
              </Link>
              <img
                src={Delete}
                alt="Delete"
                onClick={() => deleteEntries(selectedEntry ? selectedEntry.id : '')}
              />
            </ActionsIcons>
            <Media>
              <h3>{selectedEntry ? selectedEntry.title : ''}</h3>
              <p dangerouslySetInnerHTML={{ __html: selectedEntry ? selectedEntry.content : '' }}></p>
            </Media>
          </EntryBox>
        </Content>
      ) : (
        <Cards />
      )}
    </Wrapper>
  )
}


const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const Wrapper = styled.div`
margin:0rem;
`;
const Bounce = styled.img`
  cursor:pointer;
  bottom:4rem;
  margin;0.5rem;
  position:relative;
  align-self:flex-end;
  width:2rem;
  cursor: pointer;
  animation: ${bounceAnimation} 1s infinite;
`;
const BounceInvert = styled.img`
  transform: rotate(90deg);
  cursor:pointer;
  top:3rem;
  margin;0.5rem;
  position:relative;
  align-self:flex-end;
  width:2rem;
  animation: ${bounceAnimation} 1s infinite;
`;
const Content = styled.div`
display:grid;
grid-auto-flow: column;
grid-template-columns: min-content;
margin:4rem 0rem 0 6rem;
@media (max-width: 600px) {
  margin: 0.5rem 0.5rem;
}`;
const Header = styled.div`background-color:transparent;
  min-height:4.1rem;
  display:flex;
  justify-content:space-between;
  box-shadow: 0px 1px 4px 1px #0000000F;

`;
const Search = styled.div`
background-color:transparent;
padding-left:9rem;
display:flex;
gap:0.3rem;
align-items:center;
input{
  background-color:transparent;
  min-width:20rem;
  max-height:2.4rem;
  padding:0.8rem;
  box-shadow: 1px 1px 4px 0px #0000001F;
  border:none;
  outline:none;
}
input::placeholder{
  font-family: Open Sans;
font-size: 1.12rem;
font-weight: 300;
line-height: 1.5rem;
text-align: left;
color: #5A4282;
}
button{
  background-color:transparent;
  min-width:2.25rem;
  height:2.2rem;
  box-shadow: 1px 1px 4px 0px #0000001F;
  border:none;
}
@media (max-width: 600px) {
  padding-left: 1rem;
  input {
    min-width: 4rem; 
    max-width: 100%; 
    max-height: 2rem; 
    padding: 0.6rem 0rem; 
  }
}
`;
const Filter = styled.div`
display:flex;
select {
  -webkit-appearance: none;
  -moz-appearance: none; 
  appearance: none; 
  box-shadow: 1px 1px 4px 0px #0000001F;
  border:none;
  padding: 0.5rem 3rem 0.1rem 0.5rem;
  font-size: 1rem;
  height:2.2rem;
  margin-right: 0.5rem;
  cursor: pointer;
  outline: none;
  font-family: Open Sans;
font-size: 1rem;
font-weight: 300;
line-height: 1.5rem;
text-align: left;
color: #5A4282;
background-color:transparent;
}
&::after {
  content: url(${FilterIcon}); 
  position:relative;
  top:0.4rem;
  left:-2.3rem;
  pointer-events: none;
}
option {
  font-size: 1rem;
}
`;
const Icons = styled.div`
display:flex;
justify-content:space-between;
gap:2rem;
align-items:center;
margin-left:1rem;
margin-right:14rem;
@media (max-width: 600px) {
  gap: 1rem;
  margin-right:0.2rem;
}
`;
const Main = styled.div`
display:flex;
flex-direction:column;
height:520px;
overflow-y:auto;
&::-webkit-scrollbar{
  width:6px;
}
&::-webkit-scrollbar-thumb{
  background-color: #AFA7DF;
}
&::-webkit-scrollbar-track {
  background-color: #fff;
}
`;

const Card = styled.div`
cursor:pointer;
margin: 1rem 1rem;
min-height:13rem;
box-shadow: 3px 4px 4px 2px #0000000F; 
border-radius:0.65rem;
${props =>
        props.selected
            ? 'border-right: 0.5rem solid #301DAD63;'
            : ''};
h3{
  margin:0 20rem 0 0;
  padding:0rem 0 0.5rem 2rem;
  font-family:Sacramento;
  font-size:1.6rem;
  font-weight:400;
  line-height:2.28rem;
},

h4{
  margin:0;
  padding:0 0 0.6rem 2rem;
  font-family:Open Sans;
  font-size:0.7rem;
  font-weight:300;
  line-height:0.34rem;
}
img{
  position: relative;
  top:2.5rem;
  right:0.5rem
}
`;
const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  margin-left:1rem;
  margin-bottom:1rem;
  padding: 0;
  text-decoration: underline;
`;
const EntryBox = styled.div`
margin-right:2rem;
margin-left:2rem;
border-radius:1rem;
height:515px;
box-shadow: 4px 4px 10px 6px #0000000D;
display: ${props => (props.selected ? 'none' : 'block')};
h3{
  margin:0;
  padding:5rem 0 0.5rem 5rem;
  font-family:Sacramento;
  font-size:3.12rem;
  font-weight:400;
  line-height:4.5rem;
  color: #301DAD;

},
p{
  padding:0 3rem 2rem 2.5rem;
  font-family:Open Sans;
  font-size:1.125rem;
  font-weight:300;
  line-height:1.53rem;
}
`;
const Media = styled.div`
height:400px;
overflow-y:auto;
&::-webkit-scrollbar{
  width:6px;
}
&::-webkit-scrollbar-thumb{
  background-color: #AFA7DF;
}
&::-webkit-scrollbar-track {
  background-color: #fff;
}
`;
const Para = styled.div`
display:flex;
flex-direction:column;
p{
  margin:0;
  padding:0 1rem 0rem 1rem;
  font-family:Open Sans;
  font-size:0.9rem;
  font-weight:300;
  line-height:1.19rem;
}`;


const ActionsIcons = styled.div`
margin:2rem 2rem 0 0;
display:flex;
justify-content:flex-end;
img{
  padding:0 1rem 0 0;
  cursor:pointer;
}
`;

export default Dashboard