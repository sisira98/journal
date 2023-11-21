import React from 'react';
import Bar from '../assets/Bar.svg';
import Eudaimonia from '../assets/Eudaimonia.svg';
import ProfilePic from '../assets/ProfilePic.svg';
import Head from '../styles/HeaderStyles';

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

export default Header