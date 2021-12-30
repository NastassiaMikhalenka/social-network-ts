import React, {RefObject} from "react";
import Post from "./post/Post";
import classes from "./myPosts.module.css";
import AddBtn from "../../../assets/add.png"
// import Paperclip from "../../../assets/paperclip.png"
// import Group from "../../../assets/Group.png"
// import Image from "../../../assets/image.png"
import {ActionsType, PostsDataType, StoreType} from "../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
// import PostAvatar from "../../../assets/PhotoGirl.png"

type PropsType = {
    newPostText: string
    postsData: Array<PostsDataType>
}

const MyPostsContainer = (props: PropsType) => { // принимаем в пропсах postsData и сделали типизацию как PropsType, переходим на уроверь ниже в Post
    // let postsElements =
    //     props.postsData.map(post => <Post
    //         key={post.id}
    //         id={post.id}
    //         message={post.message}
    //         likeCount={post.likeCount}/>)
    //
    // let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    // let state = props.store.getState()
    const addPost = () => {

        //props.postsData.dispatch(addPostAC(state.profilePage.newPostText))  // с применением доп функций в стейте
        // props.dispatch({type: "ADD_POST"}) // без применения доп финкций в стейте
        // props.addPost() // первоначальный вариант
    }

    // Action Creator - функция, которая возвращает экшен. Объект с типом и данными
    // ДОП ФУНКЦИЯ!!!
    const onPostChange = (text: string) => {
        // let text = newPostElement.current?.value
        // if(text) {
        //     props.dispatch(updateNewPostTextAC(text)) // с применением доп функций в стейте
        // }
        // let text = newPostElement.current?.value
        // let action = updateNewPostTextAC(text)
        // props.store.dispatch(action) // с применением доп функций в стейте
        // // let text = newPostElement.current?.value // без применения доп финкций в стейте
        // // if(text) {
        // //     props.dispatch({type: "UPDATE_NEW_POST_TEXT", newText: text})
        // // }

        // let text = newPostElement.current?.value // первоначальный вариант
        // if(text) {
        //     props.updatePostText(text)
        // }
    }

    return (
        <MyPosts
            updatePostText={onPostChange}
            addPost={addPost}
            postsData={props.postsData}
            newPostText={props.newPostText}
        />
    )
}

export default MyPostsContainer;

// type ButtonType = {
//     bgImg: string
//     title: string
// }
//
// const Button = (props: ButtonType) => {
//     return <button className={classes.addBtn}><img src={props.bgImg} alt={props.title}/></button>
// }
