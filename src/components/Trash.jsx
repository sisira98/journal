import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { listEntries } from '../actions/ListJournal';
import { format } from 'date-fns';
import Delete from '../assets/Trash.svg'
import Restore from '../assets/Restore.svg'
import TrashContainer from '../styles/TrashStyles';

function Trash() {

    function formatDate(createdDate) {
        const date = new Date(createdDate);
        return format(date, "MMMM do, yyyy");
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listEntries());
    }, []);

    const entries = useSelector(state => state.entry.listData);
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
                                    <img src={Restore} alt="Restore" title='Restore' />
                                    <img src={Delete} alt="Delete" title='Delete' />
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