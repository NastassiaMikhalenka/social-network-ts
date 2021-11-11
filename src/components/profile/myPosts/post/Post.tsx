import React from "react";
import classes from "./post.module.css"

type PostPropsType = {
    message: string
    likeCount: null | number
};

const Post = (props: PostPropsType) => {
    return (
        <div className={classes.post}>
            <img src='https://vk-wiki.ru/wp-content/uploads/2019/06/user-1.png' alt='#'/>
            {props.message}
            <div>
                <span>like </span>
                <span>{props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post;