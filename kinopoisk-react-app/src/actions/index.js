import axios from 'axios'
import { ACTION_TYPES } from "../constants";

// Войти в систему
export const signIn = (email, password) => {
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
                payload: responce.data.user.saveFilms
            })
            sessionStorage.setItem('accessTokenUser', responce.data.accessToken)
            sessionStorage.setItem('userId', responce.data.user.id)
    
        } catch (err) {
            console.log('response error', err);
        }
    }
}

// Зарегистрироваться
export const registerUser = (login, email, password) => {
    return async (dispatch) => {

        try {
            const responce = await axios.post(`http://localhost:3000/register`, 
            {
                "login": login, 
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
                const responce = await axios.get(`http://localhost:3000/users/${sessionStorage.userId}`, {
                    headers: {"Authorization" : `Bearer ${token}`}
                })
                
                dispatch ({
                    type: ACTION_TYPES.GET_USER,
                    payload: responce.data
                })
                dispatch ({
                    type: ACTION_TYPES.SAVE_FILM_USER,
                    payload: responce.data.saveFilms
                })
            } catch (err) {
                console.log('response error', err);
            }
        }

    }
}

// Получить фильмы
export const getMovies = () => {
    return async (dispatch) => {
        try {
            const responce = await axios.get(`http://localhost:3000/films`)
            dispatch ({
                type: ACTION_TYPES.GET_FILMS,
                payload: responce.data
            })
    
        } catch (err) {
            console.log('response error', err);
        }
    }
}

// Получать карточки фильмов
export const getMoviesCard = (id) => {
    return async (dispatch) => {
        try {
            const responce = await axios.get(`http://localhost:3000/films/${id}`)
            dispatch ({
                type: ACTION_TYPES.CLICK_FILM,
                payload: responce.data
            })
    
        } catch (err) {
            console.log('response error', err);
        }
    }
}

// Выводить фильмы по категориям
export const getMoviesNavbar = (selectCategoryMenu) => {
    return async (dispatch) => {
        try {
            const responce = await axios.get(`http://localhost:3000/films?type=${selectCategoryMenu}`)
            dispatch ({
                type: ACTION_TYPES.GET_FILMS,
                payload: responce.data
            })
    
        } catch (err) {
            console.log('response error', err);
        }
    }
}

// Поиск
export const getMoviesSearch = (inputSearchValue) => {
    return async (dispatch) => {
        try {
            const responce = await axios.get(`http://localhost:3000/films?q=${inputSearchValue}`)
            dispatch ({
                type: ACTION_TYPES.GET_SEARCH_FILMS,
                payload: responce.data
            })
    
        } catch (err) {
            console.log('response error', err);
        }
    }
}