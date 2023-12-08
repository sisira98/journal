import React from 'react'
import store from './store';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { Login } from '../auth/components/Login';
import AppRoutes from '../journal/routes';
function Page() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default Page