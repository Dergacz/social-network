import React from "react";
import classes from "./Profile.module.css";
import MyPost from "./Posts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, RootStateType} from "../../Redux/state";

type ProfilePropsType = {
    state: RootStateType
    addPostCallback: (postText: string) => void
    changeNewTextCallBach: (newText: string) => void
    message: string
    dispatch: (action: ActionsTypes) => void

}

const Profile = (props: ProfilePropsType) => {


    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPost posts={props.state.profilePage.posts}
                    addPostCallback={props.addPostCallback}
                    message={props.message}
                    changeNewTextCallBach={props.changeNewTextCallBach}
                    dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;
