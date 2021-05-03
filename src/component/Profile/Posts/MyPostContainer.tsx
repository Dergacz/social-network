import React from "react";
import MyPost from "./MyPost";
import {addPostActionCreator, newPostActionCreator, ProfileInitialType} from "../../../Redux/profileReducer";
import {Dispatch, Store} from "redux";
import {connect} from "react-redux";
import {store} from "../../../Redux/state";
import {AppStateType} from "../../../Redux/reduxStore";

// type MyPostContainerPropsType = {
//     store: Store
// }
//
//
// const MyPostContainer = (props: MyPostContainerPropsType) => {
//     const state = props.store.getState();
//     // let postElement = props.posts
//     //     .map(m => <Post key={m.id} message={m.message} likes={m.likes}/>)
//     //
//     // //Добавление нового поста
//     const addPost = () => {
//         //props.addPostCallback(props.message);
//         props.store.dispatch(addPostActionCreator(state.profilePage.newPostMessage))
//     }
//     const newPostOnChangeHandler = (body: string) => {
//         // props.changeNewTextCallBach(e.currentTarget.value);
//         props.store.dispatch(newPostActionCreator(body))
//     }
//
//     return (
//         <MyPost
//             state={state}
//             addPostCallback={addPost}
//             changeNewTextCallBach={newPostOnChangeHandler}
//             message={state.profilePage.newPostMessage}
//         />
//     )
// }
//
// export default MyPostContainer;

const state = store.getState();

type mapStateToPropsType = {
    profilePage: ProfileInitialType
}

type mapDispatchToPropsType = {
    addPostCallback: () => void
    changeNewTextCallBach: (body: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPostCallback: () => {
            dispatch(addPostActionCreator(state.profilePage.newPostMessage))
        },
        changeNewTextCallBach: (body: string) => {
        dispatch(newPostActionCreator(body))
    }
    }
}


export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)