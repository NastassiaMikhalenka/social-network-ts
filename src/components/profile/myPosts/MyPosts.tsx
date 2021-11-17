import React from "react";
import Post from "./post/Post";
import classes from "./myPosts.module.css";
import AddBtn from "../../../assets/add.png"
import Paperclip from "../../../assets/paperclip.png"
import Group from "../../../assets/Group.png"
import Image from "../../../assets/image.png"
// import PostAvatar from "../../../assets/PhotoGirl.png"

export type ButtonType = {
    bgImg: string
    title: string
}

export const Button = (props: ButtonType) => {
    return <button className={classes.addBtn}><img src={props.bgImg} alt={props.title}/></button>
}

const MyPosts = () => {
    let postsData = [
        {id: 1, name: "Helen", message: "Hello?", likeCount: 7},
        {id: 2, name: "Helen", message: "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer?", likeCount: null}
    ]

    return (
        <>
            <div className={classes.wrapper}>
                <textarea className={classes.postTextarea} placeholder={"Type your post"} rows={3}/>
                <div className={classes.blockBtns}>
                    <Button bgImg={AddBtn} title={'#'}/>
                    <Button bgImg={Paperclip} title={'#'}/>
                    <Button bgImg={Group} title={'#'}/>
                    <Button bgImg={Image} title={'#'}/>
                </div>
            </div>
            <Post id={postsData[0].id} name={postsData[0].name} message={postsData[0].message} likeCount={postsData[0].likeCount}/>
            <Post id={postsData[1].id} name={postsData[1].name} message={postsData[1].message} likeCount={postsData[1].likeCount}/>

        </>
    )
}

export default MyPosts;