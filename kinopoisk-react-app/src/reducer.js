import { ACTION_TYPES } from "./constants";

const initialState = {
    films: [],
    cardFilm: {},
    selectCategory: '',

    login: '',
    password: '',
    name: '',
    user: {}
}

const reducer = (state = initialState, action) => {

    if(action.type === ACTION_TYPES.GET_FILMS) {
        return {
            ...state,
            films: action.payload,
        }
    }

    if(action.type === ACTION_TYPES.CLICK_FILM) {
        return {
            ...state,
            cardFilm: action.payload,
        }
    }

    if(action.type === ACTION_TYPES.SELECT_CATEGORY_FILMS) {
        return {
            ...state,
            selectCategory: action.payload,
        }
    }



    if(action.type === ACTION_TYPES.INPUT_LOGIN) {
        return {
            ...state,
            login: action.payload,
        }
    }

    if(action.type === ACTION_TYPES.INPUT_PASSWORD) {
        return {
            ...state,
            password: action.payload,
        }
    }

    if(action.type === ACTION_TYPES.INPUT_NAME) {
        return {
            ...state,
            name: action.payload,
        }
    }

    if(action.type === ACTION_TYPES.GET_USER) {
        return {
            ...state,
            user: action.payload,
        }
    }

  return state
}

export default reducer;