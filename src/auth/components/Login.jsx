import React from 'react'
import Eud from '../../assets/EduWhite.svg'
import Blue from '../../assets/BlueTemplate.svg'
import HiddenEye from '../../assets/EyeIcon.svg'
import Eye from '../../assets/Eye.png'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../action'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { userSignUp } from '../action'
import styled from "styled-components";

export const Login = ()=> {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const accessToken = localStorage.getItem('accessToken')

    const dispatch = useDispatch();
    const handleLogin = (e) => {
        if (isSignUp) {
            dispatch(userSignUp({name, email, password}));
        } else {
            dispatch(userLogin({name, password}));
            setIsSignUp(!isSignUp)
            if (accessToken != null) {
                    navigate('/')
                }
            }
        };
        const state = useSelector((state)=>state.entry)
        console.log(state);
    const handleSignUp = () => {
        setIsSignUp(!isSignUp)
    };
    const hidePassword = () => {
        setIsHidden(!isHidden)
    };
    return (
        <LoginMainDiv>
            <LoginDiv>
                <Heading>
                    <h1>{isSignUp ? 'Sign' : 'Log'}</h1>
                    <h1>{isSignUp ? 'Up' : 'In'}</h1>
                </Heading>
                <img src={Eud} alt="Logo" />
            </LoginDiv>
            <FormDiv>
                <img src={Blue} alt="" />
                <form className="App">
                    <input placeholder={isSignUp ? 'User name' : 'User name or Email ID'} value={name} onChange={(e) => setName(e.target.value)} />
                    {isSignUp &&
                        <input placeholder='User Email ID' value={email} onChange={(e) => setEmail(e.target.value)} />
                    }
                    <EyeIcon>
                        <input placeholder='Password' type={isHidden ? 'password' : 'text'} value={password} onChange={(e) => setPassword(e.target.value)} />
                        <img src={isHidden ? Eye : HiddenEye} alt="Hide" onClick={(hidePassword)} />
                    </EyeIcon>
                    <h4>forgotten password?</h4>
                    <ActionButtons>
                        <h3 onClick={handleSignUp}>{isSignUp ? 'Log In?' : 'Sign Up?'}</h3>
                        <button onClick={handleLogin}>Submit</button>
                    </ActionButtons>
                </form>
            </FormDiv>
        </LoginMainDiv>
    )
}


const LoginMainDiv = styled.div`
display:flex;
height:100vh;
background: #301DAD;
`;
const LoginDiv = styled.div`
display:flex;
width:100%;
flex-direction:column;
justify-content:space-between;
img{
    
    width:9rem;
    margin:2rem;
}
`;
const Heading = styled.div`
display:flex;
margin-top:3rem;
flex-direction:column;
@media (max-width: 900px) {
    flex-direction:row;
  },
h1{
    margin:0;
    font-family: Open Sans;
    font-weight: 800;
    line-height: 130px;
    text-align: right;
    font-size:8rem;
    color:white;
    position: relative;
    right: -1rem;
    @media (max-width: 900px) {
            font-size:6rem;
            right: 0rem;
    
}
`;
const FormDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  img { 
    width: 100%;
    height:100%;
    object-fit:fill;
    @media (max-width: 900px) {
        display:none;
      }
  }

  form {
    position: absolute; 
    margin-left:7rem;
    display:flex;
    flex-direction:column;
    input{
        width:20rem;
        margin-top:1.5rem;
        padding:1rem;
        border:none;
        outline:none;
        border-bottom:1px solid #00000033;
    }
    input::placeholder{
        font-family: Open Sans;
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.6;
        text-align: left;
        color: #301DAD;
    }
    input:focus{
        background-color: #CBC3FF24;

    }
    h4{
        cursor:pointer;
        margin:0 0 3rem 1rem;
        font-family: Open Sans;
        font-size: 14px;
        font-weight: 300;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        font-variation-settings: 'wdth' 90;
        color: #301DAD;
        align-self:start;

    }
}
    @media (max-width: 900px) {
        form{
        margin-left:0rem;
        h4{
            color:white;
        }
    }
    `;
    
const ActionButtons = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    h3{
        cursor:pointer;
        margin:0rem 2rem 0 0;
        font-family: Open Sans;
        font-size: 14px;
        font-weight: 300;
        line-height: 1.18rem;
        font-variation-settings: 'wdth' 90;
        color: #301DAD;
        align-self:center;
        @media (max-width: 900px) {
            color:white;
        }

    }
    button{
        cursor:pointer;
        align-self:end;
        width:10rem;
        border:1px solid #301DAD;
        border-radius:0.16rem;
        font-family: Open Sans;
        font-family: Open Sans;
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.6;
        text-align: center;
        color: #301DAD;
        background-color:white;
        box-shadow: 0px 4px 7px 0px #00000040;

    }
`;
const EyeIcon = styled.div`
display: grid;
flex-direction: row;
justify-items: end;
img{
    position:relative;
    bottom: 2rem;
    right: 2rem;
    width:1rem;  
    @media (max-width: 900px) {
        display:block;
      }
}
`;
