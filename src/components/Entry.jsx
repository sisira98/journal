import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getEntry } from '../actions/GetJournal'
import Delete from '../assets/Delete.svg'
import { deleteEntry } from '../actions/DeleteEntry'
import EntryBox from '../styles/EntryStyles'

function Entry() {
  const accessToken = localStorage.getItem('accessToken')
  const selectedEntryId = useSelector((state) => state.entry.selectedEntryId);
  const deleteEntries = async (entryId) => {
    dispatch(deleteEntry(entryId, accessToken));
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

        <img src={Delete} alt='Delete' onClick={() => deleteEntries(journal ? journal.id : '')} />
      </EntryBox.ImageDiv>
    </EntryBox>
  )
}

export default Entry