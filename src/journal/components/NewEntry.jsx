import React from 'react'
import { createJournal,addCategory,listCategory,editJournal,getJournal} from '../action'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css"
import styled from 'styled-components';

export const NewEntry=()=> {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const entryId = useSelector((state) => state.entry.selectedEntryId);
  const accessToken = localStorage.getItem('accessToken')
  const [isOther, setisOther] = useState(false);


  const handleSelectCategory = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    setisOther(selectedCategory === 'others');
  };
  const handleAddCategory = () => {
    dispatch(addCategory({category, accessToken}))
    setisOther(!isOther)
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCategory({accessToken}))
    if (entryId) {
      dispatch(getJournal({entryId, accessToken}));
    }
  }, [entryId]);

  const journal = useSelector(state => state.entry.selectedEntry);
  const categories = useSelector(state => state.entry.catList);
  useEffect(() => {
    if (journal) {
      setTitle(journal.title);
      setContent(journal.content)
      setCategory(journal.category)
    }
  }, [journal]);

  const handleShare = async () => {
    try {
      if (journal) {
        const id =journal.id
        dispatch(editJournal({id, title, content, accessToken}));
      }

      if (!journal && title !== '' && content !== '') {
        dispatch(createJournal({title, content, category, accessToken}));
      }
    } catch (error) {
      console.error('Error sharing entry:', error);
    }
  };

  return (
    <EntryContainer>
      <TitleAndSave>

        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Filter>
          {isOther ? (
            <categoryStyle>
              <input
                type="text"
                value={category}
                placeholder="Enter Other Category"
                onChange={(e) => setCategory(e.target.value)}
              />
              <button
                onClick={handleAddCategory}
              >
                Add
              </button>
            </categoryStyle>
          ) : (
            <select value={category} onChange={handleSelectCategory}>
              <option value="">Select category</option>
              {categories.map((cat) => {
                return (
                  <option key={cat} value={cat}>{cat}</option>
                )
              })}
              <option value="others">Other</option>
            </select>
          )}
        </Filter>
        <Link to={'/dashboard'}>
          <button
            onClick={(c) => handleShare(title, content, category)}
          >
            Save
          </button>
        </Link>
      </TitleAndSave>
      <ReactQuill
        theme='snow'
        value={content}
        style={quillStyles}
        modules={quillModules}
        placeholder="Start writing..."
        dangerouslySetInnerHTML={{ __html: content }}
        onChange={setContent}
      />
    </EntryContainer>
  )
}

const quillStyles = {
  marginTop: '0.2rem',
  border: 'none',
  height: '77%',
  fontFamily: 'Open Sans',
  fontWeight: 300,
  fontSize: '1.25rem',
  lineHeight: '1.17rem',
  color: '#5A4282',
};

const quillModules = {
  toolbar: [
    [{ font: [] }],
    [
      { size: [] }
    ],
    [{ color: [] }],
    ['bold', 'italic', 'underline',],
    [{ list: "bullet" }],
    ['align'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const EntryContainer = styled.div`
padding:2rem 0rem 0 0;
margin:6rem 15rem;
display:flex;
height:25rem;
flex-direction:column;
border-radius:0.62rem;
box-shadow: 5px 4px 10px 4px #0000000F;

@media (max-width: 1110px) {
  margin:6rem 2rem;
}
@media (max-width:450px ) {
  margin:6rem 0rem;
  padding-right:0rem;
}
`;

const TitleAndSave = styled.div`
margin-left:3rem;
margin-right:3rem;
height:2.6rem;
display:flex;
justify-content:space-between;
border:none;
input{
  height:3rem;
  border: none;
  outline:none;
  padding-bottom:1rem;
  font-family:Sacramento;
  font-weight: 400;
  font-size:2rem;
  line-height:2.9rem;
  color: #301DAD;
  background-color:transparent;
}
input::placeholder, input:focus{
  outline:none;
  padding-bottom:1rem;
  font-family:Sacramento;
  font-weight: 400;
  font-size:2rem;
  line-height:2.9rem;
  color: #301DAD;
}
button{
  cursor:pointer;
  padding:0.7rem 3rem;
  background-color:#301DAD;
  font-family:Open Sans;
  font-weight: 300;
  font-size:1.25rem;
  line-height:1.17rem;
  color: #FFFFFF;
  border:none;
  border-radius:0.4rem;
}
@media (max-width: 973px) {
  margin-left:0.2rem;
  button{
    padding:0.7rem 1rem;
  }
  imput{
    width:2rem;
  }
  @media (max-width:450px ) {
    margin-left:0rem;
    justify-content:center;
    input{
      width:10rem;
    }
  }
`;
const Filter = styled.div`
display:flex;
border:1px solid #301DAD;
border-radius:0.4rem;
select {
    padding:0 2rem;
  -webkit-appearance: none;
  -moz-appearance: none; 
  appearance: none; 
  box-shadow: 1px 1px 4px 0px #0000001F;
  border:none;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  font-family: Open Sans;
font-size: 1rem;
font-weight: 300;
line-height: 1.5rem;
text-align: center;
color: #5A4282;
background-color:transparent;
}
option {
  font-size: 1rem;
  text-align: start;
}
`;

const categoryStyle = styled.div`
input{
    padding:0rem 0.5rem 0.5rem 0.5rem;
    border: none;
    outline:none;
    font-family: Open Sans !important;
    font-weight: 300;
    font-size:1rem !important;
    line-height:2.9rem;
    color: #301DAD;
    background-color:transparent;
}
  input::placeholder, input:focus {
    outline: none;
    font-family: Open Sans;
    font-weight: 400;
    font-size: 1rem;
    line-height: 2.9rem;
    color: #5A4282;
  }
`;