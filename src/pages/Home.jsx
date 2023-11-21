import React from 'react'
import HomePage from '../components/HomePage'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import Cards from '../components/Cards';
import { listEntries } from "../actions/ListJournal"

function Home() {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken')
  useEffect(() => {
    dispatch(listEntries(accessToken, 0));
  }, [accessToken, 0]);
  const entries = useSelector(state => state.entry);
  return (
    <>
      {entries.length === 0 ? <HomePage /> : <Cards />}
    </>
  )
}

export default Home