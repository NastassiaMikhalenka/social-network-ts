import React from "react";
// import classes from "./profile.module.css"
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import HeaderProfile from "../../assets/headerPhoto.png";
import Avatar from "../../assets/user.png";
import MyPostsContainer, {MyPostsPropsType} from "./myPosts/MyPostsContainer";
import {StateReduxType} from "../../redux/redux-store";
import {initialStateType} from "../../redux/users_reducer";
// import {ProfilePageType} from "../../redux/state";

type PropsType = {
    profile: any
}

const Profile = (props: PropsType ) => { // принимаем в  пропсах postsData и сделали типизацию как PropsType, переходим на уроверь ниже в MyPosts
    return (
        <>
            <ProfileInfo
                profile={props.profile}
            />
            <MyPostsContainer
            />
        </>
    )
}

export default Profile;