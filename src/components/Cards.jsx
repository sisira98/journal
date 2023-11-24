import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { listTotalEntries } from "../actions/TotalJournals";
import { format } from 'date-fns';
import { setSelectedEntryId } from "../actions/SelectJournal";
import { Link } from "react-router-dom";
import WrapperForCards from '../styles/CardsStyles'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

function Cards() {
  const accessToken = localStorage.getItem('accessToken')
  function formatDate(createdDate) {
    const date = new Date(createdDate);
    return format(date, "MMMM do, yyyy");
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listTotalEntries(accessToken));
  }, []);

  const entries = useSelector(state => state.entry.totalList);

  const handleEditClick = (entryId) => {
    dispatch(setSelectedEntryId(entryId));
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
                <WrapperForCards.Template onClick={() => { handleEditClick(entry.id); }}>
                  <h3>{entry.title}</h3>
                  <h4>{formatDate(entry.createdAt)}</h4>
                  <p dangerouslySetInnerHTML={{ __html: `${entry.content.substr(0, 200)}${entry.content.length > 200 ? "..." : ""}` }}
                  />
                </WrapperForCards.Template>
              </Link>
            </SplideSlide>
          );
        }
        )}
      </Splide>
    </WrapperForCards>
  )
}


export default Cards