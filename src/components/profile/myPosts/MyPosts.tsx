import React from "react";
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div>
            <textarea />
            <button>Add post</button>
            <Post message={"Hello"} likeCount={null}/>
            <Post message={"How are you?"} likeCount={7}/>
        </div>
    )
}

export default MyPosts;