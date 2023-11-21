import React, { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { listEntries } from "../actions/ListJournal"
import { format } from 'date-fns'
import Clip from '../assets/clip.svg'
import { Link } from "react-router-dom"
import SearchIcon from '../assets/SearchIcon.svg'
import DashboardIcon from '../assets/Dashboard.svg'
import NewPostIcon from '../assets/NewPostIcon.svg'
import DashboardOneIconBlack from '../assets/DashboardIconOneBlack.svg'
import DashboardIconBlack from '../assets/DashboardIconBlack.svg'
import { deleteEntry } from "../actions/DeleteEntry"
import Edit from '../assets/Edit.svg'
import Delete from '../assets/Delete.svg'
import { setSelectedEntryId } from "../actions/SelectJournal"
import Cards from "./Cards"
import DashboardOneIcon from '../assets/DashboardIconOne.svg'
import Wrapper from "../styles/DashboardStyles"
import InfiniteScroll from "react-infinite-scroll-component";

function Dashboard() {
  const [showFullContent, setShowFullContent] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isColorChanged, setColorChanged] = useState(false);
  const [showCardsView, setCardsView] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null)
  const selectedEntryIdFromCards = useSelector((state) => state.entry.selectedEntryId);
  const accessToken = localStorage.getItem('accessToken')
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const [pageNo, setPageNo] = useState(0);


  function formatDate(createdDate) {
    const date = new Date(createdDate);
    return format(date, "MMMM do, yyyy");
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listEntries(accessToken, pageNo));
  }, [accessToken, pageNo]);

  const entries = useSelector(state => state.entry.listData);
  const hasMore = entries.length > 0;

  useEffect(() => {
    const entry = entries.find(entry => entry.id === selectedEntryIdFromCards) || entries[0];
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

  const handleEditClick = (entryId) => {
    dispatch(setSelectedEntryId(entryId));
  };

  const deleteEntries = async (entryId) => {
    dispatch(deleteEntry(entryId, accessToken));
  };

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const handleSelectCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const fetchMoreData = () => {
    setPageNo((prevPageNo) => prevPageNo + 1);
    dispatch(listEntries(accessToken, pageNo + 1));
  };


  return (
    <Wrapper>
      <Wrapper.Header>
        <Wrapper.Search>
          <input
            type="text"
            placeholder="Search entry..." />
          <button>
            <img src={SearchIcon} alt="Search" />
          </button>
          <Wrapper.Filter>
            <select value={selectedCategory} onChange={handleSelectCategory}>
              <option value="Scientific">Scientific</option>
              <option value="Academic">Academic</option>
              <option value="Politics">Politics</option>
              <option value="Technology">Technology</option>
            </select>
          </Wrapper.Filter>
        </Wrapper.Search>
        <Wrapper.Icons>
          <Link onClick={handleClick}>
            <img src={isColorChanged && !isMobileView ? DashboardIcon : DashboardIconBlack} alt="Dashboard" />
          </Link>
          <Link to={'/new-entry'}>
            <img src={NewPostIcon} alt="NewPost" onClick={() => setSelectedEntryId(null)} />
          </Link>
          <Link onClick={handleClick} to={'/dashboard'}>
            <img src={isColorChanged && !isMobileView ? DashboardOneIconBlack : DashboardOneIcon} alt="Dashboard" />
          </Link>
        </Wrapper.Icons>
      </Wrapper.Header>
      {!showCardsView || isMobileView ? (
        <Wrapper.Content>
          <Wrapper.Main>
            <InfiniteScroll
              dataLength={entries.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
              endMessage={<p>No more entries to load</p>}
            >
              {entries.map((entry) => {
                return (
                  <Wrapper.Card key={entry.id} selected={selectedEntry && selectedEntry.id === entry.id} onClick={() => { setSelectedEntry(entry); }}>
                    <img src={Clip} alt="clip" />
                    <h3>{entry.title}</h3>
                    <h4>{formatDate(entry.createdAt)}</h4>
                    <Wrapper.Para>
                      <p dangerouslySetInnerHTML={{ __html: showFullContent ? entry.content : `${entry.content.substr(0, 200)}${entry.content.length > 200 ? "..." : ""}` }}
                      />
                      {isMobileView && entry.content.length > 200 && (
                        <Wrapper.ReadMoreButton onClick={toggleContent}>
                          {showFullContent ? "Read Less" : "Read More"}
                        </Wrapper.ReadMoreButton>
                      )}
                    </Wrapper.Para>
                  </Wrapper.Card>
                );
              }
              )}
            </InfiniteScroll>
          </Wrapper.Main>
          <Wrapper.EntryBox key={selectedEntry ? selectedEntry.id : ''} selected={isMobileView}>
            <Wrapper.ActionsIcons>
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
            </Wrapper.ActionsIcons>
            <h3>{selectedEntry ? selectedEntry.title : ''}</h3>
            <p dangerouslySetInnerHTML={{ __html: selectedEntry ? selectedEntry.content : '' }}></p>
          </Wrapper.EntryBox>
        </Wrapper.Content>
      ) : (
        <Cards />
      )}
    </Wrapper>
  )
}


export default Dashboard