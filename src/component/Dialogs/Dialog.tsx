import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type ProrpsDialog = {
    id: number
    name: string
}

export const Dialog = (props: ProrpsDialog) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}