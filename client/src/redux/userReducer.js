const SET_USER = "SET_USER"
let initialState = {
    user:
        {

        },
    listBasket: [
        {
            id: 1,
            name: "Капот",
            description: "какое-то описание",
            price: 25000,
            type: "AutoPart"
        },
        {
            id: 2,
            name: "Крыло левое",
            description: "какое-то описание",
            price: 4000,
            type: "AutoPart"
        },
        {
            id: 3,
            name: "Бриджстоун",
            description: "какое-то описание",
            price: 8000,
            type: "AutoTier"
        }
    ],
    listFavourite: [
        {
            id: 1,
            name: "Капот",
            description: "какое-то описание",
            price: 25000,
            type: "AutoPart"
        },
        {
            id: 2,
            name: "Крыло левое",
            description: "какое-то описание",
            price: 4000,
            type: "AutoPart"
        },
        {
            id: 3,
            name: "Бриджстоун",
            description: "какое-то описание",
            price: 8000,
            type: "AutoTier"
        }
    ],
    listHistory: [
        {
            id: 1,
            name: "Капот",
            description: "какое-то описание",
            price: 25000,
            type: "AutoPart"
        },
        {
            id: 2,
            name: "Крыло левое",
            description: "какое-то описание",
            price: 4000,
            type: "AutoPart"
        },
        {
            id: 3,
            name: "Бриджстоун",
            description: "какое-то описание",
            price: 8000,
            type: "AutoTier"
        }
    ]
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state, user: action.user
            }
        default:
            return state
    }
}
export const setUserAC = (user) => ({type: SET_USER, user})
export default userReducer