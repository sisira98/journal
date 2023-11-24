import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { listTrash } from '../actions/ListTrash';
import { format } from 'date-fns';
import Delete from '../assets/Trash.svg'
import Restore from '../assets/Restore.svg'
import TrashContainer from '../styles/TrashStyles';
import { deleteEntry } from '../actions/DeleteEntry';
import { restoreEntry } from '../actions/RestoreJournal';

function Trash() {
    const accessToken = localStorage.getItem('accessToken')
    function formatDate(createdDate) {
        const date = new Date(createdDate);
        return format(date, "MMMM do, yyyy");
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listTrash(accessToken));
    }, []);

    const handleDelete = (entryId) => {
        dispatch(deleteEntry(entryId, accessToken))
    }
    const handleRestore = (entryId) => {
        dispatch(restoreEntry(entryId, accessToken))
    }

    const entries = useSelector(state => state.entry.trashList);
    return (
        <TrashContainer>
            <TrashContainer.TrashBox>
                <TrashContainer.PageTwo>
                    <TrashContainer.Title>

                        <h2>Entry</h2>
                        <h2>Date of Entry</h2>
                        <h2>Actions</h2>
                    </TrashContainer.Title>
                    {entries.map((entry) => {
                        return (
                            <TrashContainer.DeletedList key={entry.id}>
                                <div>{entry.title}</div>
                                <div>{formatDate(entry.createdAt)}</div>
                                <TrashContainer.Buttons>
                                    <img src={Restore} alt="Restore" title='Restore' onClick={() => { handleRestore(entry.id) }} />
                                    <img src={Delete} alt="Delete" title='Delete' onClick={() => { handleDelete(entry.id) }} />
                                </TrashContainer.Buttons>
                            </TrashContainer.DeletedList>
                        )
                    }
                    )}
                </TrashContainer.PageTwo>
            </TrashContainer.TrashBox>
        </TrashContainer>
    )
}

export default Trash