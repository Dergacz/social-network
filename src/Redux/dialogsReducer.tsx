import {
    ActionsTypes,
    AddMessageDispatchType,
    ChangeNewMessageTextDispatchType,
    MessagesType
} from "./state";

const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT";

export const dialogsReducer = (state: any, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessagesType = {
                id: new Date().getTime(),
                message: state.dialogsPage.newDialogsMessage,
            }
            state.dialogsPage.messages.push(newMessage);
            state.dialogsPage.newDialogsMessage = "";
            return state;
        case CHANGE_NEW_MESSAGE_TEXT:
            state.dialogsPage.newDialogsMessage = action.newMessage;
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