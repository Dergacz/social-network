import {ActionsTypes, AddPostDispatchType, ChangeNewTextDispatchType, PostType} from "./state";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT";

const initialState = {
    newPostMessage: "",
    posts: [
        {id: 1, message: "Hey, How are you?", likes: 15},
        {id: 2, message: "It's my first post", likes: 20},
    ]
}

export type ProfileInitialType = typeof initialState;

export const profileReducer = (state: ProfileInitialType = initialState, action: ActionsTypes): ProfileInitialType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostMessage,
                likes: 0
            }
            state.posts.push(newPost);
            state.newPostMessage = "";
            return state;
        case CHANGE_NEW_TEXT:
            state.newPostMessage = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = (postText: string): AddPostDispatchType => {
    return {
        type: ADD_POST,
        postText: postText
    }
}

export const newPostActionCreator = (newText: string): ChangeNewTextDispatchType => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: newText
    }
}
