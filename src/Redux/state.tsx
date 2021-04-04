import {renderThree} from "../render";

export type PostType = {
    id: number
    message: string
    likes: number
}

export type ProfilePageType = {
    newPostMessage: string
    posts: Array<PostType>
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newDialogsMessage: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state = {
    profilePage : {
        newPostMessage: "",
        posts : [
            {id: 1, message: "Hey, How are you?", likes: 15},
            {id: 2, message: "It's my first post", likes: 20},
        ]
    },
    dialogsPage : {
        dialogs : [
            {id: 1, name: "Sania"},
            {id: 2, name: "Pasha"},
            {id: 3, name: "Vasia"},
            {id: 4, name: "Petia"},
            {id: 5, name: "Ashot"}
        ],
        messages : [
            {id: 1, message: "Doroy"},
            {id: 2, message: "Che kavo"},
            {id: 3, message: "Kak sam?"}
        ],
        newDialogsMessage: ""
    }
}

export const addPost = () => {
    const newPost: PostType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostMessage,
        likes: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostMessage = ""
    renderThree(state)
}

export const changeNewText = (newText: string) => {
    state.profilePage.newPostMessage = newText;
    renderThree(state);
}

export const addMessage = () => {
    const newMessage: MessagesType = {
        id: new Date().getTime(),
        message: state.dialogsPage.newDialogsMessage,
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newDialogsMessage = ""
    renderThree(state)
}

export const changeNewMessageText = (newMessage: string) => {
    state.dialogsPage.newDialogsMessage = newMessage;
    renderThree(state);
}



export default state;