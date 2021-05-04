import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {Dialog} from "./Dialog";
import {Message} from "./Message";
import {DialogInitialStateType} from "../../Redux/dialogsReducer";

type DialogsPropsType = {
    dialogsPage: DialogInitialStateType
    addMessageCallBack: () => void
    changeNewMessageCallBack: (body: string) => void
}


export const Dialogs = (props: DialogsPropsType) => {

    let dialogElement = props.dialogsPage.dialogs.map(d => <Dialog id={d.id} name={d.name} key={d.id}/>)
    let messageElement = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)

    //Добавление текста
    //let newMessageElement = React.createRef<HTMLTextAreaElement>();
    const addMessage = () => {
        props.addMessageCallBack()

    }
    const onChangeNewMessageCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.changeNewMessageCallBack(body);

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
                value={props.dialogsPage.newDialogsMessage}
                onChange={onChangeNewMessageCallback}
                placeholder={"Enter your message"}
            ></textarea>
            <button onClick={addMessage}>+</button>
        </div>
    )
}