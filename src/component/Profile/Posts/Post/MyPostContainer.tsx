import React from "react";
import {StoreType} from "../../../../Redux/state";
import MyPost from "../MyPost";
import {addPostActionCreator, newPostActionCreator} from "../../../../Redux/profileReducer";

type MyPostContainerPropsType = {
    store: StoreType
}


const MyPostContainer = (props: MyPostContainerPropsType) => {
    const state = props.store.getState();
    // let postElement = props.posts
    //     .map(m => <Post key={m.id} message={m.message} likes={m.likes}/>)
    //
    // //Добавление нового поста
    const addPost = () => {
        //props.addPostCallback(props.message);
        props.store.dispatch(addPostActionCreator(state.profilePage.newPostMessage))
    }
    const newPostOnChangeHandler = (body: string) => {
        // props.changeNewTextCallBach(e.currentTarget.value);
        props.store.dispatch(newPostActionCreator(body))
    }

    return (
        <MyPost
            state={state}
            addPostCallback={addPost}
            changeNewTextCallBach={newPostOnChangeHandler}
            message={state.profilePage.newPostMessage}
        />
    )
}

export default MyPostContainer;