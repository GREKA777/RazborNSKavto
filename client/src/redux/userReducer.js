let initialState = {
    user:
        {
            id: 1,
            FIO: "Егор Гречко Вячеславович",
            email: "egorka.gre4ko2015@gmail.com",
            phone: "+7 923 777 06 08",
            role: "Администратор"
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
        default:
            return state
    }
}
export default userReducer