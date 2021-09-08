import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_TYPES } from "../../constants";
import { getUserLogin } from "../../actions";
import './index.css'

const SignIn = () => {

    const dispatch = useDispatch()
    const email = useSelector((state) => { return state.email })
    const password = useSelector((state) => { return state.password })
    const user = useSelector((state) => { return state.user })

    const getUserEmail = (event) => {
        dispatch ({
            type: ACTION_TYPES.INPUT_EMAIL,
            payload: event.target.value
        })
    }

    const getUserPassword = (event) => {
        dispatch ({
            type: ACTION_TYPES.INPUT_PASSWORD,
            payload: event.target.value
        })
    }

    const getUsers = async () => {
        dispatch(getUserLogin(email, password))
    }

    // Выйти из кабинета
    const logout = () => {
        sessionStorage.clear()
        dispatch ({
            type: ACTION_TYPES.GET_USER,
            payload: null
        })
    }


    return (
    
    <div className='app-signin'>
        
        {user ? 

        <div>
            <div className='signin-title'> Привет <b>{user.email}</b> 👋</div>
            <button className='signin-button' onClick={logout}>Выйти</button>
        </div>

        :
        
        <div>
            <h1 className='signin-title'>Войти в профиль</h1>

            <div className='login-container'>
                <div className='login-title'>Введите e-mail:</div>

                <input type='text' 
                className='user-login' 
                placeholder="E-mail" 
                value={email} 
                onChange={getUserEmail}></input>
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
        }

    </div>
        
    )
}

export default SignIn;