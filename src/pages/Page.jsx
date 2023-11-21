import React from 'react'
import store from '../actions/Store';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import LoginPage from './LoginPage';
import AppRoutes from './AppRoutes';
function Page() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login/*" element={<LoginPage />} />
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default Page