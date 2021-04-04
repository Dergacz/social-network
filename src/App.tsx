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
import {addMessage, changeNewMessageText, changeNewText, RootStateType} from "./Redux/state";
import {addPost} from "./Redux/state";

export type AppStateType = {
  state: RootStateType
}

function App(props: AppStateType) {

  return (
      <BrowserRouter>
        <div className="app_wrapper">
          <Header/>
          <NavBar/>
          <div className="app_wrapper_content">
            <Route path="/profile"
                   render={() => <Profile state={props.state}
                                          addPostCallback={addPost}
                                          message={props.state.profilePage.newPostMessage}
                                          changeNewTextCallBach={changeNewText}/>}

            />
            <Route path="/dialogs"
                   render={() => <Dialogs state={props.state}
                                          addMessageCallBack={addMessage}
                                          message={props.state.dialogsPage.newDialogsMessage}
                                          changeNewMessageCallBack={changeNewMessageText}/>}
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
