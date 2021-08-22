import React, { useEffect } from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_TYPES } from "../../constants";
import './index.css'

const SignIn = () => {

    const dispatch = useDispatch()
    const login = useSelector((state) => { return state.login })
    const password = useSelector((state) => { return state.password })
    const name = useSelector((state) => { return state.name })
    const user = useSelector((state) => { return state.user })

    const getUserLogin = (event) => {
        dispatch ({
            type: ACTION_TYPES.INPUT_LOGIN,
            payload: event.target.value
        })
    }

    const getUserPassword = (event) => {
        dispatch ({
            type: ACTION_TYPES.INPUT_PASSWORD,
            payload: event.target.value
        })
    }

    const getUserName = (event) => {
        dispatch ({
            type: ACTION_TYPES.INPUT_NAME,
            payload: event.target.value
        })
    }

    const getUsers = async () => {
        try {
            const responce = await axios.post(`http://localhost:3000/users`, 
            { 
                "login": login, 
                "password": password,
                "name": name,
            })

            dispatch ({
                type: ACTION_TYPES.GET_USER,
                payload: responce.data
            })
            // console.log(responce.data);

        } catch (err) {
            console.log('response error', err);
        }
    }


    

    return (
        <div className='app-signin'>
            
            <div className='name-container'>
                <div className='name-title'>Введите имя:</div>

                <input type='text' 
                className='user-name' 
                placeholder="Name" 
                value={name} 
                onChange={getUserName}></input>
            </div>

            <div className='login-container'>
                <div className='login-title'>Введите логин:</div>

                <input type='text' 
                className='user-login' 
                placeholder="Login" 
                value={login} 
                onChange={getUserLogin}></input>
            </div>

            <div className='password-container'>
                <div className='password-title'>Введите пароль:</div>

                <input type='password' 
                className='user-password' 
                placeholder="Password" 
                value={password} 
                onChange={getUserPassword}></input>
            </div>

            <button className='signin-button' onClick={getUsers}>Войти в систему</button>
            
        </div>
    )
}

export default SignIn;