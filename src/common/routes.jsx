import React from 'react'
import store from './Store';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import LoginPage from '../auth/loginRoutes';
import AppRoutes from '../journal/appRoutes';
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