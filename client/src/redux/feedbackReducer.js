let initialState = {
    listFeedback: [
        {
            id: 1,
            name: "Виталик Багин",
            text: "Покупал на чепырку крыло, два раза бампер передний, фару, да вообще всю чепырку собрал с данного авторазбора. Скоро настанет очередь Калдины))",
        },
        {
            id: 2,
            name: "Егор Гречко",
            text: "Всё понравилось. Покупал стойки на Mark II, всё соответствует качеству, цена подарок, спасибо! Ассортимент большой, на любое авто найдутся автозапчасти. Планирую у вас в дальнейшем купить ходовую часть для Mark'а."
        },
        {
            id: 3,
            name: "Саня Пантелеев",
            text: "Перебрал мотор с запчастей, купленных на данном авторазборе, всё как заявлено, цены лучшие во всём Новосибирске, жду фару на Toyota Crown"
        }
    ]
}
const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export default feedbackReducer