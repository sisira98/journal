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
import { addCategory } from '../actions/AddCategory';
import { listCategory } from '../actions/ListCategory';

function NewEntry() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const selectedEntryId = useSelector((state) => state.entry.selectedEntryId);
  const accessToken = localStorage.getItem('accessToken')
  // const categories = localStorage.getItem('categories')
  // const categoryArray = categories.split(',');
  const [isOther, setisOther] = useState(false);


  const handleSelectCategory = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    setisOther(selectedCategory === 'others');
  };
  const handleAddCategory = () => {
    dispatch(addCategory(category, accessToken))
    setisOther(!isOther)
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCategory(accessToken))
    if (selectedEntryId) {
      dispatch(getEntry(selectedEntryId, accessToken));
    }
  }, [selectedEntryId]);

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
        dispatch(editEntry(journal.id, title, content, accessToken));
      }

      if (!journal && title !== '' && content !== '') {
        dispatch(shareEntry(title, content, category, accessToken));
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
          {isOther ? (
            <EntryContainer.categoryStyle>
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
            </EntryContainer.categoryStyle>
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