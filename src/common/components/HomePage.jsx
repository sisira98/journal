import React from 'react'
import Pen from '../../assets/Pen.svg'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import styled from "styled-components";
import { useSelector } from 'react-redux'

export const HomePage = () => {
    const user = localStorage.getItem('name')
    const state = useSelector((state) => state.entry)
    return (
        <HomePageMainContent>
            <JournalBox>
                <img src={Pen} alt="Pen" />
                <Book>
                    <PartOne>
                    </PartOne>
                    <PartTwo>
                        <Link to={'/new-entry'}>
                            <TypeAnimation
                                sequence={[
                                    "Start writing your journal",
                                    1000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                                style={{ fontSize: '1.5rem', fontFamily: 'Sacramento', margin: '0 0 3rem 1rem', alignSelf: 'center' }}
                            />
                            <h2>{user}'s Journal</h2>
                        </Link>
                    </PartTwo>
                </Book>
            </JournalBox>
        </HomePageMainContent>
    )
}


const HomePageMainContent = styled.div`
display:flex;
justify-content:center;
`;
const JournalBox = styled.div`
display:flex;
flex-direction:row;
margin-top:3rem;
height:30rem;
img{
    margin-left:3rem;
}
`;
const Book = styled.div`
margin-left:-4rem;
display:flex;
flex-direction:row;
margin-right:3rem;
`;
const PartOne = styled.div`
width:3.4rem;
box-shadow: 4px 4px 4px 4px #0000000D;
background-color:#1C106B;

`;
const PartTwo = styled.div`
background: linear-gradient(153.62deg, #301DAD 3.89%, #6048FF 92.46%);
border-top-right-radius:1rem;
border-bottom-right-radius:1rem;
display:grid;
a{
    display:grid;
    justify-items: center;
    color:white;
    text-decoration:none;
    align-self: end;
}
h2{
    margin:4rem;
font-family: Sacramento;
font-size: 2.5rem;
font-weight: 400;
line-height: 3.6rem;
text-align: left;
}
`;

const StyledTypeAnimation = styled.h3`
font-family: Sacramento;
font-size: 2rem;
font-weight: 300;
line-height: 3.6rem;
`;
