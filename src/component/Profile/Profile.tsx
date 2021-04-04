import React from "react";
import classes from "./Profile.module.css";
import MyPost from "./Posts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {RootStateType} from "../../Redux/state";

type ProfilePropsType = {
    state: RootStateType
    addPostCallback: (postText: string) => void
    changeNewTextCallBach: (newText: string) => void
    message: string
}

const Profile = (props: ProfilePropsType) => {


    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPost posts={props.state.profilePage.posts}
                    addPostCallback={props.addPostCallback}
                    message={props.message}
                    changeNewTextCallBach={props.changeNewTextCallBach}/>
        </div>
    )
}

export default Profile;
