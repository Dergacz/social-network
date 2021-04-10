import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import NavBar from "./component/NavBar/NavBar";
import Profile from "./component/Profile/Profile";
import {Dialogs} from "./component/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./component/News/News";
import {Music} from "./component/Music/Music";
import {Settings} from "./component/Settings/Settings";
import {StoreType} from "./Redux/state";


export type AppStateType = {
  store: StoreType
}

function App(props: AppStateType) {
    const state = props.store.getState();

  return (
      <BrowserRouter>
        <div className="app_wrapper">
          <Header/>
          <NavBar/>
          <div className="app_wrapper_content">
            <Route path="/profile"
                   render={() => <Profile state={state}
                                          addPostCallback={props.store.addPost.bind(props.store)}
                                          message={state.profilePage.newPostMessage}
                                          changeNewTextCallBach={props.store.changeNewText.bind(props.store)}/>}

            />
            <Route path="/dialogs"
                   render={() => <Dialogs state={state}
                                          addMessageCallBack={props.store.addMessage.bind(props.store)}
                                          message={state.dialogsPage.newDialogsMessage}
                                          changeNewMessageCallBack={props.store.changeNewMessageText.bind(props.store)}/>}
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
