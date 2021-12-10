import React from "react";
// import classes from "./profile.module.css"
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import HeaderProfile from "../../assets/headerPhoto.png";
import Avatar from "../../assets/user.png";
import {ActionsType, ProfilePageType} from "../../redux/state";

type PropsType = {
    state: ProfilePageType
    dispatch: (action: ActionsType) => void
    // addPost: () => void
    // updatePostText: (newText: string) => void
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
            <MyPosts postsData={props.state.postsData}
                     newPostText={props.state.newPostText}
                     dispatch={props.dispatch}
                     // addPost={props.addPost}
                     // updatePostText={props.updatePostText}
            />
        </>
    )
}

export default Profile;