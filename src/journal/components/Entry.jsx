import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Delete from '../../assets/Delete.svg'
import { getJournal } from '../action'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import {addToTrash} from '../../trash/action'

export const Entry=()=> {
  const accessToken = localStorage.getItem('accessToken')
  const entryId = useSelector((state) => state.entry.selectedEntryId);
  const deleteEntries = async (entryId) => {
    dispatch(addToTrash({entryId, accessToken}));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (entryId != null) {
      dispatch(getJournal({entryId, accessToken}));
    }
  }, [entryId]);

  const journal = useSelector(state => state.entry.selectedEntry);
  return (
    <EntryBox>
      <h3>{journal ? journal.title : ''}</h3>
      <p dangerouslySetInnerHTML={{ __html: journal ? journal.content : '' }}></p>
      <ImageDiv>

        <Link to={'/dashboard'}>
          <img src={Delete} alt='Delete' onClick={() => deleteEntries(journal ? journal.id : '')} />
        </Link>
      </ImageDiv>
    </EntryBox>
  )
}


const EntryBox = styled.div`
max-width:100%;
position:absolute;
top:20%;
left:10%;
right:5%;
border-radius:0.62rem;
box-shadow: 5px 4px 10px 4px #0000000F;
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
  margin:2rem 2rem 4rem 5rem;
  border: none;
  font-family:Open Sans;
  font-weight: 300;
  font-size:1.25rem;
  line-height:1.17rem;
  color: #5A4282;
}
img{
  cursor:pointer;
    margin:2rem;
    align-items:end;
}
`;

const ImageDiv = styled.div`
display:flex;
justify-content:flex-end;
`;
