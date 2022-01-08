import React, {RefObject} from "react";
import Post from "./post/Post";
import classes from "./myPosts.module.css";
import AddBtn from "../../../assets/add.png"
// import Paperclip from "../../../assets/paperclip.png"
// import Group from "../../../assets/Group.png"
// import Image from "../../../assets/image.png"
import {ActionsType, MessagesPageType, PostsDataType, ProfilePageType, StoreType} from "../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {StateReduxType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addMessageAC, updateNewMessageTextAC} from "../../../redux/dialogs_reducer";
import {connect} from "react-redux";
import Dialogs from "../../dialogs/Dialogs";
// import PostAvatar from "../../../assets/PhotoGirl.png"

// type PropsType = {
//     newPostText: string
//     postsData: Array<PostsDataType>
// }
//
// const MyPostsContainer = (props: PropsType) => { // принимаем в пропсах postsData и сделали типизацию как PropsType, переходим на уроверь ниже в Post
//     // let postsElements =
//     //     props.postsData.map(post => <Post
//     //         key={post.id}
//     //         id={post.id}
//     //         message={post.message}
//     //         likeCount={post.likeCount}/>)
//     //
//     // let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();
//
//     // let state = props.store.getState()
//     const addPost = () => {
//
//         //props.postsData.dispatch(addPostAC(state.profilePage.newPostText))  // с применением доп функций в стейте
//         // props.dispatch({type: "ADD_POST"}) // без применения доп финкций в стейте
//         // props.addPost() // первоначальный вариант
//     }
//
//     // Action Creator - функция, которая возвращает экшен. Объект с типом и данными
//     // ДОП ФУНКЦИЯ!!!
//     const onPostChange = (text: string) => {
//         // let text = newPostElement.current?.value
//         // if(text) {
//         //     props.dispatch(updateNewPostTextAC(text)) // с применением доп функций в стейте
//         // }
//         // let text = newPostElement.current?.value
//         // let action = updateNewPostTextAC(text)
//         // props.store.dispatch(action) // с применением доп функций в стейте
//         // // let text = newPostElement.current?.value // без применения доп финкций в стейте
//         // // if(text) {
//         // //     props.dispatch({type: "UPDATE_NEW_POST_TEXT", newText: text})
//         // // }
//
//         // let text = newPostElement.current?.value // первоначальный вариант
//         // if(text) {
//         //     props.updatePostText(text)
//         // }
//     }
//
//     return (
//         <MyPosts
//             updatePostText={onPostChange}
//             addPost={addPost}
//             postsData={props.postsData}
//             newPostText={props.newPostText}
//         />
//     )
// }
//
// // export default MyPostsContainer;
//
// // type ButtonType = {
// //     bgImg: string
// //     title: string
// // }
// //
// // const Button = (props: ButtonType) => {
// //     return <button className={classes.addBtn}><img src={props.bgImg} alt={props.title}/></button>
// // }


type mapStateToPropsType = {
    postsData: Array<PostsDataType>
    newPostText: string
}

let mapStateToProps = (state: StateReduxType): mapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

type mapDispatchToPropsType = {
    onPostChange: (text: string) => void
    addPost: () => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onPostChange: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC()) //   проверить
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
