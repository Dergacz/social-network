import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {Dialog} from "./Dialog";
import {Message} from "./Message";
import { addMessageActionCreator, changeNewMessageActionCreator} from "../../Redux/dialogsReducer";
import {ActionsTypes, RootStateType} from "../../Redux/state";

type DialogsPropsType = {
    state: RootStateType
    message: string
    addMessageCallBack: (message: string) => void
    changeNewMessageCallBack: (newMessage: string) => void
    dispatch: (action: ActionsTypes) => void
}


export const Dialogs = (props: DialogsPropsType) => {

    let dialogElement = props.state.dialogsPage.dialogs.map(d => <Dialog id={d.id} name={d.name}/>)
    let messageElement = props.state.dialogsPage.messages.map(m => <Message message={m.message}/>)

    //Добавление текста
    //let newMessageElement = React.createRef<HTMLTextAreaElement>();
    const addMessage = () => {
        //props.addMessageCallBack(props.message)
        props.dispatch(addMessageActionCreator(props.message))
    }
    const onChangeNewMessageCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //props.changeNewMessageCallBack(e.currentTarget.value);
        props.dispatch(changeNewMessageActionCreator(e.currentTarget.value));
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                {dialogElement}
            </div>
            <div className={classes.messages}>
                {messageElement}
            </div>
            <textarea
                value={props.message}
                onChange={onChangeNewMessageCallback}
                placeholder={"Enter your message"}
            ></textarea>
            <button onClick={addMessage}>+</button>
        </div>
    )
}