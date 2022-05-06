const ADD_AUTOPART = "ADD_AUTOPART"
const ADD_TIERS = "ADD_TIERS"
let initialState = {
    listAutopart: [
        {
            id: 1,
            name: "Капот",
            description: "какое-то описание",
            price: 25000
        },
        {
            id: 2,
            name: "Крыло левое",
            description: "какое-то описание",
            price: 4000
        },
        {
            id: 3,
            name: "Крыло правое",
            description: "какое-то описание",
            price: 5000
        }
    ],
    listTiers: [
        {
            id: 1,
            name: "Бриджстоун",
            description: "какое-то описание",
            price: 8000
        },
        {
            id: 2,
            name: "Нокиан",
            description: "какое-то описание",
            price: 4000
        },
        {
            id: 3,
            name: "Тоя",
            description: "какое-то описание",
            price: 6000
        }
    ]
}
const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AUTOPART:
            return {
                ...state, listAutopart: [...state.listAutopart,
                    {
                        id: 4,
                        name: "Оптика передняя",
                        description: "какое-то описание",
                        price: 20000
                    }
                ]
            }
        case ADD_TIERS:
            return {
                ...state, listTiers: [...state.listTiers,
                    {
                        id: 4,
                        name: "Йокогама",
                        description: "какое-то описание",
                        price: 9000
                    }
                ]
            }
        default:
            return state
    }
}
export const addAutopartAC = () => ({type: ADD_AUTOPART})
export const addTiersAC = () => ({type: ADD_TIERS})
export default catalogReducer
