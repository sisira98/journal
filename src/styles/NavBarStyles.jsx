import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

Nav.LinkContainer = styled.div`
  margin: 9rem 4rem;
`;

Nav.NavLink = styled(Link)`
  text-decoration: none;
${props => (props.selected ? 'h3{color:#301DAD}' : 'h3{color:#5A4282}')};
`;

Nav.LinkTitle = styled.div`
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

export default Nav