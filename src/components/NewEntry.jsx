import React from 'react'
import { shareEntry } from '../actions/CreateJournal'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { editEntry } from '../actions/EditJournal';
import { getEntry } from '../actions/GetJournal';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css"
import EntryContainer from '../styles/NewEntryStyles';

function NewEntry() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const selectedEntryId = useSelector((state) => state.entry.selectedEntryId);
  const accessToken = localStorage.getItem('accessToken')
  const [otherCategory, setOtherCategory] = useState('');

  const handleSelectCategory = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);

    if (selectedCategory === 'others') {
      setOtherCategory('');
    }
  };

  const handleOtherCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedEntryId) {
      dispatch(getEntry(selectedEntryId, accessToken));
    }
  }, [selectedEntryId]);

  const journal = useSelector(state => state.entry.selectedEntry);
  useEffect(() => {
    if (journal) {
      setTitle(journal.title);
      setContent(journal.content)
      setContent(journal.category)
    }
  }, [journal]);

  const handleShare = async (shareTitle, shareContent) => {
    console.log(shareTitle, shareContent);
    try {
      if (journal) {
        dispatch(editEntry(journal.id, shareTitle, shareContent, accessToken))
      }
      if (shareTitle != "" && shareContent != "") {
        dispatch(shareEntry(shareTitle, shareContent, accessToken));

      }
    } catch (error) {
      console.error('Error sharing entry:', error);
    }
  };

  return (
    <EntryContainer>
      <EntryContainer.TitleAndSave>

        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <EntryContainer.Filter>
          {category === 'others' ? (
            <EntryContainer.categoryStyle>
              <input
                type="text"
                value={otherCategory}
                placeholder="Enter Other Category"
                onChange={handleOtherCategoryChange}
              />
            </EntryContainer.categoryStyle>
          ) : (
            <select value={category} onChange={handleSelectCategory}>
              <option value="Category">Category</option>
              <option value="Scientific">Scientific</option>
              <option value="Academic">Academic</option>
              <option value="Politics">Politics</option>
              <option value="Technology">Technology</option>
              <option value="others">Other</option>
            </select>
          )}
        </EntryContainer.Filter>
        <Link to={'/dashboard'}>
          <button
            onClick={(c) => handleShare(title, content, category)}
          >
            Save
          </button>
        </Link>
      </EntryContainer.TitleAndSave>
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


export default NewEntry