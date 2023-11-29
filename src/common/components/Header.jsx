import React from 'react';
import styled from "styled-components";
import Bar from '../../assets/Bar.svg';
import Eudaimonia from '../../assets/Eudaimonia.svg';
import ProfilePic from '../../assets/ProfilePic.svg';

function Header({ toggleSidebar }) {
    return (
        <><Head>
            <img src={Bar} alt="bar" onClick={toggleSidebar} />
            <img src={Eudaimonia} alt="Eudaimonia" />
            <img src={ProfilePic} alt="Profile" />
        </Head>
        </>
    )
}


const Head = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:5rem;
box-shadow: 0px 5px 4px 0px #00000014;
img{
    padding: 0 2rem;
}

@media (max-width: 600px) {

    img{
        padding:1rem;
    }
`;

export default Header