const ADD_POST = "ADD-POST";
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT";

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
type SideBarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SideBarType
}


type AddPostDispatchType = {
    type: "ADD-POST"
    postText: string
}

type ChangeNewTextDispatchType = {
    type: "CHANGE-NEW-TEXT"
    newText: string
}

type AddMessageDispatchType = {
    type: "ADD-MESSAGE"
    messageText: string
}

type ChangeNewMessageTextDispatchType = {
    type: "CHANGE-NEW-MESSAGE-TEXT"
    newMessage: string
}

export type ActionsTypes = AddPostDispatchType | ChangeNewTextDispatchType | AddMessageDispatchType | ChangeNewMessageTextDispatchType

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
        if (action.type === ADD_POST){
            const newPost: PostType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostMessage,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostMessage = ""
            this._renderThree()
        }
        else if (action.type === CHANGE_NEW_TEXT){
            this._state.profilePage.newPostMessage = action.newText;
            this._renderThree();
        }
        else if (action.type === ADD_MESSAGE){
            const newMessage: MessagesType = {
                id: new Date().getTime(),
                message: this._state.dialogsPage.newDialogsMessage,
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newDialogsMessage = ""
            this._renderThree()
        }
        else if (action.type === CHANGE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newDialogsMessage = action.newMessage;
            this._renderThree();
        }
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

export const addMessageActionCreator = (messageText: string): AddMessageDispatchType => {
    return {
        type: ADD_MESSAGE,
        messageText: messageText
    }
}

export const changeNewMessageActionCreator = (newMessage: string): ChangeNewMessageTextDispatchType => {
    return {
        type: CHANGE_NEW_MESSAGE_TEXT,
        newMessage: newMessage
    }
}