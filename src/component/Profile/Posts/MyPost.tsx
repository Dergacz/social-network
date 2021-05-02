import React, {ChangeEvent} from "react";
import classes from "./MyPost.module.css";
import Post from "./Post/Post";
import {RootStateType} from "../../../Redux/state";

type MyPostPropsType = {
    state: RootStateType
    addPostCallback: (postText: string) => void
    changeNewTextCallBach: (newText: string) => void
    message: string
}


const MyPost = (props: MyPostPropsType) => {



    let postElement = props.state.profilePage.posts
        .map(m => <Post key={m.id} message={m.message} likes={m.likes}/>)

    //Добавление нового поста
    const addPost = () => {
        props.addPostCallback(props.message);

    }
    const newPostOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
       props.changeNewTextCallBach(e.currentTarget.value);



    }

    return (
        <div className={classes.content}>

            <div className={classes.item}>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea value={props.message} onChange={newPostOnChangeHandler}></textarea>
                <button onClick={addPost}>new post</button>
            </div>
            {postElement}
        </div>
    )
}

export default MyPost;
