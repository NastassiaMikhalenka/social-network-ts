import React from "react";
// import classes from "./profile.module.css"
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import HeaderProfile from "../../assets/headerPhoto.png";
import Avatar from "../../assets/user.png";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {StateReduxType} from "../../redux/redux-store";
import {ProfilePageType} from "../../redux/state";

type PropsType = {
    store: ProfilePageType
}

const Profile = (props: PropsType) => { // принимаем в  пропсах postsData и сделали типизацию как PropsType, переходим на уроверь ниже в MyPosts
    return (
        <>
            <ProfileInfo
                img={HeaderProfile}
                avatar={Avatar}
                name={"Ivan Ivanov"}
                location={"Saint Petersburg, Russian Federation"}
                description={"Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers."}
            />
            <MyPostsContainer
                // postsData={props.store.postsData}
                // newPostText={props.store.newPostText}
                // dispatch={props.dispatch}
                // addPost={props.addPost}
                // updatePostText={props.updatePostText}
                // store={props.store}
            />
        </>
    )
}

export default Profile;