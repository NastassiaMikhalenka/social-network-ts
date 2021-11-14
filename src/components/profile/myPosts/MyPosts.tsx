import React from "react";
import Post from "./post/Post";
import classes from "./myPosts.module.css";

const MyPosts = () => {
    return (
        <>
            <textarea className={classes.postTextarea} placeholder={"Type your post"} rows={3}/>
            <button>Add post</button>
            <Post message={"Hello"} likeCount={null}/>
            <Post message={"How are you?"} likeCount={7}/>
        </>
    )
}

export default MyPosts;