import React from 'react'
import HomePage from '../components/HomePage'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import Cards from '../components/Cards';
import { listTotalEntries } from "../actions/TotalJournals"
import { listCategory } from "../actions/ListCategory"

function Home() {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken')
  useEffect(() => {
    dispatch(listTotalEntries(accessToken));
    dispatch(listCategory(accessToken));
  }, [accessToken]);
  const entries = useSelector(state => state.entry.totalList);
  const categories = useSelector(state => state.entry.catList);
  localStorage.setItem('categories', categories);
  return (
    <>
      {entries.length === 0 ? <HomePage /> : <Cards />}
    </>
  )
}

export default Home