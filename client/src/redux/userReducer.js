const SET_USER = "SET_USER"
const SET_ISAUTH = "SET_ISAUTH"
const SET_BASKET = "SET_BASKET"
const SET_FAVOURITE = "SET_FAVOURITE"
const SET_HISTORY = "SET_HISTORY"
let initialState = {
    user: {},
    listBasket: [],
    listFavourite: [],
    listHistory: [],
    isAuth: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state, user: action.user
            }
        case SET_ISAUTH:
            return {
                ...state, isAuth: action.isAuth
            }
        case SET_BASKET:
            return {
                ...state, listBasket: action.basket
            }
        case SET_FAVOURITE:
            return {
                ...state, listFavourite: action.favourite
            }
        case SET_HISTORY:
            return {
                ...state, listHistory: action.history
            }
        default:
            return state
    }
}


export const setUserAC = (user) => ({type: SET_USER, user})
export const setIsAuthAC = (isAuth) => ({type: SET_ISAUTH, isAuth})
export const setBasketAC = (basket) => ({type: SET_BASKET, basket})
export const setFavouriteAC = (favourite) => ({type: SET_BASKET, favourite})
export const setHistoryAC = (history) => ({type: SET_BASKET, history})
export default userReducer