import React from "react";
import {
    addMessageActionCreator,
    changeNewMessageActionCreator,
    DialogInitialStateType
} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {Dispatch, Store} from "redux";
import {store} from "../../Redux/state";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";


const state = store.getState();

type mapStateToPropsType = {
    dialogsPage: DialogInitialStateType
}

type mapDispatchToPropsType = {
    addMessageCallBack: () => void
    changeNewMessageCallBack: (body: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessageCallBack: () => {
            dispatch(addMessageActionCreator(state.dialogsPage.newDialogsMessage))
        },
        changeNewMessageCallBack: (body: string) => {
            dispatch(changeNewMessageActionCreator(body))
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)