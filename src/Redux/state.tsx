import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";


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
export type SideBarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SideBarType
}


export type AddPostDispatchType = {
    type: "ADD-POST"
    postText: string
}

export type ChangeNewTextDispatchType = {
    type: "CHANGE-NEW-TEXT"
    newText: string
}

export type AddMessageDispatchType = {
    type: "ADD-MESSAGE"
    messageText: string
}

export type ChangeNewMessageTextDispatchType = {
    type: "CHANGE-NEW-MESSAGE-TEXT"
    newMessage: string
}

export type FollowedType = {
    type: "FOLLOWED",
    userId: number
}

export type UnFollowedType = {
    type: "UNFOLLOWED",
    userId: number
}

export type SetUsersType = {
    type: "SET_USERS",
    users: any
}

export type ActionsTypes = AddPostDispatchType | ChangeNewTextDispatchType | AddMessageDispatchType | ChangeNewMessageTextDispatchType | FollowedType | UnFollowedType | SetUsersType

export type StoreType = {
    _state: RootStateType
    _renderThree: () => void
    addPost: () => void
    changeNewText: (newText: string) => void
    addMessage: () => void
    changeNewMessageText: (newMessage: string) => void
    subscribe:(observer:() => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            newPostMessage: "",
            posts: [
                {id: 1, message: "Hey, How are you?", likes: 15},
                {id: 2, message: "It's my first post", likes: 20},
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Sania"},
                {id: 2, name: "Pasha"},
                {id: 3, name: "Vasia"},
                {id: 4, name: "Petia"},
                {id: 5, name: "Ashot"}
            ],
            messages: [
                {id: 1, message: "Doroy"},
                {id: 2, message: "Che kavo"},
                {id: 3, message: "Kak sam?"}
            ],
            newDialogsMessage: ""
        },
        sidebar: {}
    },
    _renderThree() {
        console.log("render")
    },

    addPost() {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostMessage,
            likes: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostMessage = ""
        this._renderThree()
    },
    changeNewText(newText: string){
        this._state.profilePage.newPostMessage = newText;
        this._renderThree();
    },

    addMessage () {
        const newMessage: MessagesType = {
            id: new Date().getTime(),
            message: this._state.dialogsPage.newDialogsMessage,
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newDialogsMessage = ""
        this._renderThree()
    },
    changeNewMessageText(newMessage: string) {
        this._state.dialogsPage.newDialogsMessage = newMessage;
        this._renderThree();
    },

    subscribe(observer){
        this._renderThree = observer
    },
    getState() {
        return this._state;
    },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._renderThree();

    }

}



