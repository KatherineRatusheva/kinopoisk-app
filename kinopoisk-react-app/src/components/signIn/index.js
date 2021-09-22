import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_TYPES } from "../../constants";
import { signIn } from "../../actions";
import { registerUser } from "../../actions";
import './index.css'

const SignIn = () => {

    const dispatch = useDispatch()
    const email = useSelector((state) => { return state.email })
    const password = useSelector((state) => { return state.password })
    const login = useSelector((state) => { return state.login })
    const user = useSelector((state) => { return state.user })
    const error = useSelector((state) => { return state.error })

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

    const getUserLogin = (event) => {
        dispatch ({
            type: ACTION_TYPES.INPUT_LOGIN,
            payload: event.target.value
        })
    }

    const getUsersSignIn = async () => {
        dispatch(signIn(email, password))
    }

    const getUsersRegistration = async () => {
        dispatch(registerUser(login, email, password))
    }

    // Выйти из кабинета
    const logout = () => {
        sessionStorage.clear()
        dispatch ({
            type: ACTION_TYPES.GET_USER,
            payload: null
        })
    }

    const [ valueNavRegistration, setValueNavRegistration ] = useState('Регистрация')

    const getValueNavRegistration = (event) => {
        setValueNavRegistration(event.target.innerText);
    }


    return (
    
    <div className='app-signin'>
        
        {user ? 

        <div>
            <div className='signin-title'> Привет <b>{user.email}</b> 👋</div>
            <button className='signin-button' onClick={logout}>Выйти</button>
        </div>

        :
        
        <div className='signin-body'>
            <div className='signin-tags'>
                <div className={valueNavRegistration === 'Регистрация' ? 'signin-navbar-select' : 'signin-navbar'} 
                onClick={getValueNavRegistration} 
                value={valueNavRegistration}> Регистрация</div>

                <div className={valueNavRegistration === 'Войти' ? 'signin-navbar-select' : 'signin-navbar'} 
                onClick={getValueNavRegistration} 
                value={valueNavRegistration}> Войти</div>
            </div>

            {valueNavRegistration === 'Войти' &&
            <div className='signin-container'>
            <h1 className='signin-title'>Войти в профиль</h1>
            {error ? <div className='signin-error'> {error} </div> : <div className='signin-error'> </div>}

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

            <button className='signin-button' onClick={getUsersSignIn}>Войти в систему</button>
            </div>
            }
            
            {valueNavRegistration === 'Регистрация' &&
            <div className='signin-container'>
            <h1 className='signin-title'>Регистрация</h1>
            {error ? <div className='signin-error'> {error} </div> : <div className='signin-error'> </div>}

            <div className='login-container'>
                <div className='login-title'>Введите логин:</div>

                <input type='text' 
                className='user-login' 
                placeholder="login" 
                value={login}
                onChange={getUserLogin}></input>
            </div>

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

            <button className='signin-button' onClick={getUsersRegistration}>Зарегистрироваться</button>
            </div>
            }
            
        </div>    
        }

    </div>
        
    )
}

export default SignIn;