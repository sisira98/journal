import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { listTrash, restoreJournal, deleteJournal } from '../action';
import { format } from 'date-fns';
import Delete from '../../assets/Trash.svg'
import Restore from '../../assets/Restore.svg'

export const Trash=()=> {
    const accessToken = localStorage.getItem('accessToken')
    function formatDate(createdDate) {
        const date = new Date(createdDate);
        return format(date, "MMMM do, yyyy");
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listTrash({accessToken}));
    }, []);

    const handleDelete = (entryId) => {
        dispatch(deleteJournal({entryId, accessToken}))
        window.location.reload();
    }
    const handleRestore = (entryId) => {
        dispatch(restoreJournal({entryId, accessToken}))
        window.location.reload();
    }

    const entries = useSelector(state => state.trash.trashList);
    return (
        <TrashContainer>
            <TrashBox>
                <PageTwo>
                    <Title>

                        <h2>Entry</h2>
                        <h2>Date of Entry</h2>
                        <h2>Actions</h2>
                    </Title>
                    {entries.map((entry) => {
                        return (
                            <DeletedList key={entry.id}>
                                <div>{entry.title}</div>
                                <div>{formatDate(entry.createdAt)}</div>
                                <Buttons>
                                    <img src={Restore} alt="Restore" title='Restore' onClick={() => { handleRestore(entry.id) }} />
                                    <img src={Delete} alt="Delete" title='Delete' onClick={() => { handleDelete(entry.id) }} />
                                </Buttons>
                            </DeletedList>
                        )
                    }
                    )}
                </PageTwo>
            </TrashBox>
        </TrashContainer>
    )
}



const TrashContainer = styled.div`
margin:3rem 1rem 1rem 5rem;
display:flex;
justify-content:center;
`;
const TrashBox = styled.div`
padding:3rem;
margin:0 2rem;
display:flex;
justify-content:space-around;
border-radius:1rem;
box-shadow: 5px 4px 10px 4px rgba(0, 0, 0, 0.27);
background: linear-gradient(90.13deg, #FFFFFF 0.12%, #FFFFFF 10.51%, #F9F9F9 17.79%, #FBFBFB 67.68%, #F7F7F7 99.9%);
`;
const PageTwo = styled.div`
display:grid;
grid-auto-flow: row;
`;
const Title = styled.div`
display:flex;
justify-content:space-between;
gap:1rem;
h2{
    color:#301DAD;
font-family: Sacramento;
font-size: 2rem;
font-weight: 400;
line-height: 2.9rem;
text-align: center;
}
@media (max-width: 425px) {
    margin:1rem 2rem;
  }
`;
const DeletedList = styled.div`
display:flex;
justify-content:space-between;
gap:4rem;
margin:0rem 0rem;
div{
    margin:1rem 0;
    min-width:3rem;
    font-family: Open Sans;
font-size: 1.25rem;
font-weight: 300;
line-height: 1.68rem;
text-align: left;
color: #5A4282;
}
@media (max-width: 425px) {
    gap:1rem;
  }

`;
const Buttons = styled.div`
display:flex;
justify-content:space-between;
gap:1rem;
img{
    cursor:pointer;
    width:1.5rem;
}

`;
