import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "../component/Users/usersReducer";

export const Rootreducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

export const store: Store = createStore(Rootreducer);

export type AppStateType = ReturnType<typeof Rootreducer>


