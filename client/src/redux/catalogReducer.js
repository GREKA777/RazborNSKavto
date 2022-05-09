const SET_AUTOPART = "SET_AUTOPART"
const SET_TIERS = "SET_TIERS"
let initialState = {
    listAutopart: [],
    listTiers: []
}
const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTOPART:
            return {
                ...state, listAutopart: action.autoParts
            }
        case SET_TIERS:
            return {
                ...state, listTiers: action.tiers
            }
        default:
            return state
    }
}
export const setAutopartAC = (autoParts) => ({type: SET_AUTOPART, autoParts})
export const setTiersAC = (tiers) => ({type: SET_TIERS, tiers})
export default catalogReducer
