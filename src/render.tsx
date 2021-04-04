import {RootStateType} from "./Redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export const renderThree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>,
        document.getElementById("root")
    );
}