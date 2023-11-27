import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DashboardIcon from '../assets/Dashboard.svg';
import EntryIcon from '../assets/EntryIcon.svg';
import Trash from '../assets/Trash.svg';

function NavBar({ isOpen, toggleSidebar }) {
  return (
    <Nav selected={isOpen} onClick={toggleSidebar}>
      <LinkContainer>
        <NavLink to={'/dashboard'} selected={window.location.pathname === '/dashboard' ? true : false}>
          <LinkTitle>
            <img src={DashboardIcon} alt="Dashboard" />
            <h3>Dashboard</h3>
          </LinkTitle>
        </NavLink>
        <NavLink to={'/new-entry'} selected={window.location.pathname === '/new-entry' ? true : false}>
          <LinkTitle>
            <img src={EntryIcon} alt="New Entry" />
            <h3>New Entry</h3>
          </LinkTitle>
        </NavLink>
        <NavLink to={'/trash'} selected={window.location.pathname === '/trash' ? true : false}>
          <LinkTitle >
            <img src={Trash} alt="All Entries" />
            <h3>Trash</h3>
          </LinkTitle>
        </NavLink>
      </LinkContainer>
    </Nav>
  );

}


const Nav = styled.div`
opacity: 100;
z-index: 2;
top: 0rem;
position: fixed;
inset-y: 0;
height:100%;
transform: translateX(-100%);
transition: transform 300ms ease-in-out;
border-top-right-radius: 38px;
border-bottom-right-radius: 38px;
background-color: white;
${props => (props.selected ? 'transform: translateX(0);' : '')};
`;

const LinkContainer = styled.div`
  margin: 9rem 4rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
${props => (props.selected ? 'h3{color:#301DAD}' : 'h3{color:#5A4282}')};
`;

const LinkTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  h3 {
    font-family: Open Sans;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 2.29rem;
  }
`;

export default NavBar;
