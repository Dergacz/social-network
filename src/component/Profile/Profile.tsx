import React from "react";
import classes from "./Profile.module.css";
import MyPost from "./Posts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, RootStateType, StoreType} from "../../Redux/state";
import MyPostContainer from "./Posts/Post/MyPostContainer";

type ProfilePropsType = {
    store: StoreType
}

const Profile = (props: ProfilePropsType) => {


    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostContainer
                store={props.store}
            />
        </div>
    )
}

export default Profile;
