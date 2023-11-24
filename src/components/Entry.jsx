import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getEntry } from '../actions/GetJournal'
import Delete from '../assets/Delete.svg'
import { addToTrash } from '../actions/Trash'
import EntryBox from '../styles/EntryStyles'
import { Link } from 'react-router-dom'

function Entry() {
  const accessToken = localStorage.getItem('accessToken')
  const selectedEntryId = useSelector((state) => state.entry.selectedEntryId);
  const deleteEntries = async (entryId) => {
    dispatch(addToTrash(entryId, accessToken));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedEntryId) {
      dispatch(getEntry(selectedEntryId, accessToken));
    }
  }, [selectedEntryId]);

  const journal = useSelector(state => state.entry.selectedEntry);
  return (
    <EntryBox>
      <h3>{journal ? journal.title : ''}</h3>
      <p dangerouslySetInnerHTML={{ __html: journal ? journal.content : '' }}></p>
      <EntryBox.ImageDiv>

        <Link to={'/dashboard'}>
          <img src={Delete} alt='Delete' onClick={() => deleteEntries(journal ? journal.id : '')} />
        </Link>
      </EntryBox.ImageDiv>
    </EntryBox>
  )
}

export default Entry