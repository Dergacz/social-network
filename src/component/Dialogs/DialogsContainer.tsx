import React from "react";
import {StoreType} from "../../Redux/state";
import {addMessageActionCreator, changeNewMessageActionCreator} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {
    const state = props.store.getState();

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator(state.dialogsPage.newDialogsMessage));
    }

    const onChangeNewMessageCallback = (body: string) => {
        props.store.dispatch(changeNewMessageActionCreator(body));
    }

    return (
        <Dialogs
            state={state}
            message={state.dialogsPage.newDialogsMessage}
            addMessageCallBack={addMessage}
            changeNewMessageCallBack={onChangeNewMessageCallback}/>

    )
}