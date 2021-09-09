import axios from 'axios'
import { ACTION_TYPES } from "../constants";

// Авторизация пользователей
export const getUserLogin = (email, password) => {
    return async (dispatch) => {

        try {
            const responce = await axios.post(`http://localhost:3000/login`, 
            { 
                "email": email, 
                "password": password,
            })
    
            dispatch ({
                type: ACTION_TYPES.GET_USER,
                payload: responce.data.user
            })
            dispatch ({
                type: ACTION_TYPES.GET_ACCESSTOKEN_USER,
                payload: responce.data.accessToken
            })
            dispatch ({
                type: ACTION_TYPES.SAVE_FILM_USER,
                payload: responce.data.user.SaveFilmName
            })
            sessionStorage.setItem('accessTokenUser', responce.data.accessToken)
            sessionStorage.setItem('userId', responce.data.user.id)
    
        } catch (err) {
            console.log('response error', err);
        }
    }
}

// Получать пользователя при рендере приложения
export const getAuthorizedUser = () => {
    return async (dispatch) => {

        const token = sessionStorage.accessTokenUser;
        if (token) {

            try {
                const responce = await axios.get(`http://localhost:3000/users/${sessionStorage.userId}`)
                dispatch ({
                    type: ACTION_TYPES.GET_USER,
                    payload: responce.data
                })
                dispatch ({
                    type: ACTION_TYPES.SAVE_FILM_USER,
                    payload: responce.data.SaveFilmName
                })
            } catch (err) {
                console.log('response error', err);
            }
        }

    }
}