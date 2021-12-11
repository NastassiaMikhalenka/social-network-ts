import React, {RefObject} from "react";
import Post from "./post/Post";
import classes from "./myPosts.module.css";
import AddBtn from "../../../assets/add.png"
// import Paperclip from "../../../assets/paperclip.png"
// import Group from "../../../assets/Group.png"
// import Image from "../../../assets/image.png"
import {ActionsType, addPostAC, PostsDataType, updateNewPostTextAC} from "../../../redux/state";
// import PostAvatar from "../../../assets/PhotoGirl.png"

type PropsType = {
    newPostText: string
    postsData: Array<PostsDataType>
    dispatch: (action: ActionsType) => void
    // addPost: () => void
    // updatePostText: (newText: string) => void

}

const MyPosts = (props: PropsType) => { // принимаем в пропсах postsData и сделали типизацию как PropsType, переходим на уроверь ниже в Post
    let postsElements =
        props.postsData.map(post => <Post
            key={post.id}
            id={post.id}
            message={post.message}
            likeCount={post.likeCount}/>)

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    const addPost = () => {
        props.dispatch(addPostAC(props.newPostText))  // с применением доп функций в стейте
        // props.dispatch({type: "ADD_POST"}) // без применения доп финкций в стейте
        // props.addPost() // первоначальный вариант
    }

    // Action Creator - функция, которая возвращает экшен. Объект с типом и данными
    // ДОП ФУНКЦИЯ!!!
    const onPostChange = () => {
        let text = newPostElement.current?.value
        if(text) {
            props.dispatch(updateNewPostTextAC(text)) // с применением доп функций в стейте
        }

        // let text = newPostElement.current?.value // без применения доп финкций в стейте
        // if(text) {
        //     props.dispatch({type: "UPDATE_NEW_POST_TEXT", newText: text})
        // }

        // let text = newPostElement.current?.value // первоначальный вариант
        // if(text) {
        //     props.updatePostText(text)
        // }
    }

    return (
        <>
            <div className={classes.wrapper}>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          onChange={onPostChange}
                          className={classes.postTextarea}
                          placeholder={"Type your post"} rows={3}/>
                <div className={classes.blockBtns}>
                    <button onClick={addPost} className={classes.addBtn}><img src={AddBtn} alt="#"/></button>
                    {/*<Button bgImg={AddBtn} title={'#'}/>*/}
                    {/*<Button bgImg={Paperclip} title={'#'}/>*/}
                    {/*<Button bgImg={Group} title={'#'}/>*/}
                    {/*<Button bgImg={Image} title={'#'}/>*/}
                </div>
            </div>
            {postsElements}
            {/*<Post id={postsData[0].id} name={postsData[0].name} message={postsData[0].message} likeCount={postsData[0].likeCount}/>*/}
            {/*<Post id={postsData[1].id} name={postsData[1].name} message={postsData[1].message} likeCount={postsData[1].likeCount}/>*/}
        </>
    )
}

export default MyPosts;

// type ButtonType = {
//     bgImg: string
//     title: string
// }
//
// const Button = (props: ButtonType) => {
//     return <button className={classes.addBtn}><img src={props.bgImg} alt={props.title}/></button>
// }
