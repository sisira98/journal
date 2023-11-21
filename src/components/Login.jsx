import React from 'react'
import Eud from '../assets/EduWhite.svg'
import Blue from '../assets/BlueTemplate.svg'
import Eye from '../assets/EyeIcon.svg'
import LoginMainDiv from '../styles/LoginStyles'
import { useDispatch } from 'react-redux'
import { userLogin } from '../actions/UserLogin'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { userSignUp } from '../actions/SignUp'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = () => {
        dispatch(userLogin(username, password));
        navigate('/')
    };
    const handleSignUp = () => {
        dispatch(userSignUp(username, email, password));
        navigate('/')
    };
    return (
        <LoginMainDiv>
            <LoginMainDiv.LoginDiv>
                <LoginMainDiv.Heading>
                    <h1>Log</h1>
                    <h1>In</h1>
                </LoginMainDiv.Heading>
                <img src={Eud} alt="Logo" />
            </LoginMainDiv.LoginDiv>
            <LoginMainDiv.FormDiv>
                <img src={Blue} alt="" />
                <form className="App">
                    <input placeholder='User name or Email ID' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input placeholder='User name or Email ID' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <LoginMainDiv.EyeIcon>
                        <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <img src={Eye} alt="Hide" />
                    </LoginMainDiv.EyeIcon>
                    <h4>forgotten password?</h4>
                    <LoginMainDiv.ActionButtons>
                        <h3 onClick={handleSignUp}>Sign Up?</h3>
                        <button onClick={handleLogin}>Submit</button>
                    </LoginMainDiv.ActionButtons>
                </form>
            </LoginMainDiv.FormDiv>
        </LoginMainDiv>
    )
}

export default Login