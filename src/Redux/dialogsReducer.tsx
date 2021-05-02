import {
    ActionsTypes,
    AddMessageDispatchType,
    ChangeNewMessageTextDispatchType, DialogsPageType,
    MessagesType
} from "./state";

const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT";

const initialState = {
    dialogs: [
        {id: 1, name: "Sania"},
        {id: 2, name: "Pasha"},
        {id: 3, name: "Vasia"},
        {id: 4, name: "Petia"},
        {id: 5, name: "Ashot"}
    ],
    messages: [
        {id: 1, message: "Doroy"},
        {id: 2, message: "Che kavo"},
        {id: 3, message: "Kak sam?"}
    ],
    newDialogsMessage: ""
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessagesType = {
                id: new Date().getTime(),
                message: state.newDialogsMessage,
            }
            state.messages.push(newMessage);
            state.newDialogsMessage = "";
            return state;
        case CHANGE_NEW_MESSAGE_TEXT:
            state.newDialogsMessage = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = (messageText: string): AddMessageDispatchType => {
    return {
        type: ADD_MESSAGE,
        messageText: messageText
    }
}

export const changeNewMessageActionCreator = (newMessage: string): ChangeNewMessageTextDispatchType => {
    return {
        type: CHANGE_NEW_MESSAGE_TEXT,
        newMessage: newMessage
    }
}