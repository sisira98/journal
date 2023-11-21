import React from 'react'
import Pen from '../assets/Pen.svg'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import HomePageMainContent from '../styles/HomePageStyles'

function HomePage() {
    return (
        <HomePageMainContent>
            <HomePageMainContent.JournalBox>
                <img src={Pen} alt="Pen" />
                <HomePageMainContent.Book>
                    <HomePageMainContent.PartOne>
                    </HomePageMainContent.PartOne>
                    <HomePageMainContent.PartTwo>
                        <Link to={'/new-entry'}>
                            <TypeAnimation
                                sequence={[
                                    "Start writing your first journal",
                                    1000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                                style={{ fontSize: '1.5rem', fontFamily: 'Sacramento', margin: '0 0 3rem 1rem', alignSelf: 'center' }}
                            />
                            <h2>Arthur's Journal</h2>
                        </Link>
                    </HomePageMainContent.PartTwo>
                </HomePageMainContent.Book>
            </HomePageMainContent.JournalBox>
        </HomePageMainContent>
    )
}

export default HomePage