import React from 'react';
import { Header } from './Header';
import { NavBar } from './NavBar';
import { useState } from 'react';
import styled from 'styled-components';

export const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Overlay selected={isSidebarOpen}>
      <Header toggleSidebar={toggleSidebar} />
      <NavBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {children}
    </Overlay>
  );

};
const Overlay = styled.div`
${props =>
    props.selected
      ? 'position: fixed;top: 0;left: 0;width: 100%;height: 100%;background-color: rgba(0,0,0,0.4);transition: 0.5s;z-index:1;opacity:10;'
      : ''}
`;
