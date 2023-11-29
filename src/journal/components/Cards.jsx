import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { totalListJournal, selectJournal } from "../action";
import { format } from 'date-fns';
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

export const Cards=()=> {
  const accessToken = localStorage.getItem('accessToken')
  function formatDate(createdDate) {
    const date = new Date(createdDate);
    return format(date, "MMMM do, yyyy");
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(totalListJournal({accessToken}));
  }, []);

  const entries = useSelector(state => state.entry.totalList);

  const handleEditClick = (entryId) => {
    console.log(entryId);
    dispatch(selectJournal(entryId));
  };
  return (
    <WrapperForCards>
      <Splide
        options={{
          perPage: 4,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}

      >
        {entries.map((entry) => {
          return (
            <SplideSlide key={entry.id}>
              <Link to={'/entry'}>
                <Template onClick={() => { handleEditClick(entry.id); }}>
                  <h3>{entry.title}</h3>
                  <h4>{formatDate(entry.createdAt)}</h4>
                  <p dangerouslySetInnerHTML={{ __html: `${entry.content.substr(0, 200)}${entry.content.length > 200 ? "..." : ""}` }}
                  />
                </Template>
              </Link>
            </SplideSlide>
          );
        }
        )}
      </Splide>
    </WrapperForCards>
  )
}

const WrapperForCards = styled.div`
margin:6rem 3rem;
`;

const Template = styled.div`
height:100%;
cursor:pointer;
box-shadow: 4px 4px 4px 4px #0000000F; 
border-radius:2rem;
padding:1rem;
background: linear-gradient(153.62deg, #301DAD 3.89%, #6048FF 92.46%);
color:white;
h3{
  font-family:Sacramento;
  font-size:1.6rem;
  font-weight:400;
  line-height:2.28rem;
},

h4{
  font-family:Open Sans;
  font-size:0.7rem;
  font-weight:300;
  line-height:0.34rem;
},
p{
    font-family:Open Sans;
    font-size:0.9rem;
    font-weight:300;
    line-height:1.19rem;
  }
`;
