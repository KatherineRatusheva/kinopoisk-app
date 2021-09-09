import { ACTION_TYPES } from "./constants";

const initialState = {
    films: [],
    cardFilm: {},
    selectCategory: '',
    selectNavigationType: '',

    email: '',
    password: '',
    user: null,
    accessToken: '',

    rating: false,

    inputSearch: '',
    searchFilms: [],

    selectValueFilterCountry: '',
    selectValueFilterYear: '',
    selectValueFilterStar: '',

    saveFilmsUser: [],
}

const reducer = (state = initialState, action) => {

    if(action.type === ACTION_TYPES.GET_FILMS) {
        return {
            ...state,
            films: action.payload,
            inputSearch: ''
        }
    }

    if(action.type === ACTION_TYPES.CLICK_FILM) {
        return {
            ...state,
            cardFilm: action.payload,
            inputSearch: ''
        }
    }

    if(action.type === ACTION_TYPES.SELECT_CATEGORY_FILMS) {
        return {
            ...state,
            selectCategory: action.payload,
        }
    }

    if(action.type === ACTION_TYPES.SELECT_NAVIGATION_TYPE_FILMS) {
        return {
            ...state,
            selectNavigationType: action.payload,
        }
    }

// Авторизация
    if(action.type === ACTION_TYPES.INPUT_EMAIL) {
        return {
            ...state,
            email: action.payload,
        }
    }

    if(action.type === ACTION_TYPES.INPUT_PASSWORD) {
        return {
            ...state,
            password: action.payload,
        }
    }

    if(action.type === ACTION_TYPES.GET_USER) {
        return {
            ...state,
            user: action.payload,
        }
    }

    if(action.type === ACTION_TYPES.GET_ACCESSTOKEN_USER) {
        return {
            ...state,
            accessToken: action.payload,
        }
    }

///////
    if(action.type === ACTION_TYPES.CHANGE_RATING) {
        return {
            ...state,
            rating: action.payload,
        }
    }

    if(action.type === ACTION_TYPES.SEARCH_INPUT) {
        return {
            ...state,
            inputSearch: action.payload,
        }
    }

    if(action.type === ACTION_TYPES.GET_SEARCH_FILMS) {
        return {
            ...state,
            searchFilms: action.payload,
        }
    }

    if(action.type === ACTION_TYPES.SELECT_VALUE_FILTER_COUNTRY) {
        return {
            ...state,
            selectValueFilterCountry: action.payload,
        }
    }

    if(action.type === ACTION_TYPES.SELECT_VALUE_FILTER_YEAR) {
        return {
            ...state,
            selectValueFilterYear: action.payload,
        }
    }

    if(action.type === ACTION_TYPES.SELECT_VALUE_FILTER_STAR) {
        return {
            ...state,
            selectValueFilterStar: action.payload,
        }
    }

    // Сохраненные фильмы
    if(action.type === ACTION_TYPES.SAVE_FILM_USER) {
        return {
            ...state,
            saveFilmsUser: action.payload,
        }
    }


  return state
}

export default reducer;