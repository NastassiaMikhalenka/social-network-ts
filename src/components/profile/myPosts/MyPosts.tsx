import React, {RefObject} from "react";
import Post from "./post/Post";
import classes from "./myPosts.module.css";
import AddBtn from "../../../assets/add.png"
// import Paperclip from "../../../assets/paperclip.png"
// import Group from "../../../assets/Group.png"
// import Image from "../../../assets/image.png"
import {PostsDataType} from "../../../redux/state";
// import PostAvatar from "../../../assets/PhotoGirl.png"

type PropsType = {
    postsData: Array<PostsDataType>
    addPost: (postMessage: string) => void
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
        let text: any = newPostElement.current?.value
        // debugger
        props.addPost(text)
    }
    return (
        <>
            <div className={classes.wrapper}>
                <textarea ref={newPostElement} className={classes.postTextarea} placeholder={"Type your post"} rows={3}/>
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
