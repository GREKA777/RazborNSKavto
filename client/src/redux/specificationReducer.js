const SET_TYPE = "SET_TYPE"
const SET_SELECTEDSORT = "SET_SELECTEDSORT"

let initialState = {
    listType: [],
    listSort:
            [{id: 1, name: 'TimeDown', title: 'Добавлено', icon: 'expand_more'},
            {id: 2, name: 'TimeUp', title: 'Добавлено', icon: 'expand_less'},
            {id: 3, name: 'PriceDown', title: 'Цена', icon: 'expand_more'},
            {id: 4, name: 'PriceUp', title: 'Цена', icon: 'expand_less'}],
    selectedSort: {id: 1, name: 'TimeDown', title: 'Добавлено', icon: 'expand_more'}
}
const specificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TYPE:
            return {
                ...state, listType: action.types
            }
        case SET_SELECTEDSORT:
            return {
                ...state, selectedSort: action.sort
            }
        default:
            return state
    }
}
export const setTypeAC = (types) => ({type: SET_TYPE, types})
export const setSelectedSortAC = (sort) => ({type: SET_SELECTEDSORT, sort})
export default specificationReducer
