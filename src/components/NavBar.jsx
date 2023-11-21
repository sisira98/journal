import React from 'react';
import DashboardIcon from '../assets/Dashboard.svg';
import EntryIcon from '../assets/EntryIcon.svg';
import Trash from '../assets/Trash.svg';
import Nav from '../styles/NavBarStyles';

function NavBar({ isOpen, toggleSidebar }) {
  return (
    <Nav selected={isOpen} onClick={toggleSidebar}>
      <Nav.LinkContainer>
        <Nav.NavLink to={'/dashboard'} selected={window.location.pathname === '/dashboard' ? true : false}>
          <Nav.LinkTitle>
            <img src={DashboardIcon} alt="Dashboard" />
            <h3>Dashboard</h3>
          </Nav.LinkTitle>
        </Nav.NavLink>
        <Nav.NavLink to={'/new-entry'} selected={window.location.pathname === '/new-entry' ? true : false}>
          <Nav.LinkTitle>
            <img src={EntryIcon} alt="New Entry" />
            <h3>New Entry</h3>
          </Nav.LinkTitle>
        </Nav.NavLink>
        <Nav.NavLink to={'/trash'} selected={window.location.pathname === '/trash' ? true : false}>
          <Nav.LinkTitle >
            <img src={Trash} alt="All Entries" />
            <h3>Trash</h3>
          </Nav.LinkTitle>
        </Nav.NavLink>
      </Nav.LinkContainer>
    </Nav>
  );

}

export default NavBar;
