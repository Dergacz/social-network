import React from "react";
import tenor from "../../Images/62K58PICb88i68HEwVnm5_PIC2018.gif";

export type LoaderType = {
    isFetching: boolean
}

export const Loader = (props: LoaderType) => {
    return (
        <div>
            {props.isFetching ? <div><img src={tenor}/></div> : ""}
        </div>
    )
}