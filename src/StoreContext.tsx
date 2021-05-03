import React from "react";
import {RootStateType, StoreType} from "./Redux/state";


export const StoreContext = React.createContext({} as StoreType);

export type ProvideType = {
    store: StoreType;
    children: any;
}

export const Provider = (props: ProvideType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}