import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import NavBar from "./component/NavBar/NavBar";
import Profile from "./component/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./component/News/News";
import {Music} from "./component/Music/Music";
import {Settings} from "./component/Settings/Settings";
import {DialogsContainer} from "./component/Dialogs/DialogsContainer";
import {Store} from "redux";
import {UsersContainer} from "./component/Users/UsersContainer";


export type AppStateType = {
    store: Store
}

function App(props: AppStateType) {

    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <NavBar/>
                <div className="app_wrapper_content">
                    <Route path="/profile"
                           render={() => <Profile/>}
                    />
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}
                    />
                    <Route path="/users"
                           render={() => <UsersContainer/>}
                    />
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>


            </div>
        </BrowserRouter>
    );
}

export default App;
