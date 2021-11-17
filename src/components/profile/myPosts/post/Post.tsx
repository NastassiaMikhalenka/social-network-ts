import React from "react";
import classes from "./post.module.css"

type PostPropsType = {
    id: number
    name: string | undefined
    avatar?: string
    message: string
    likeCount: null | number
};

const Post = (props: PostPropsType) => {
    return (
        <div className={classes.postWrapper}>
            <div className={classes.postAva}>
                {/*<img src={props.avatar} alt='#'/>*/}
                <p className={classes.name}>{props.name}</p>
            </div >
            <div className={classes.message}>
            {props.message}
            </div>
            <div className={classes.like}>
                <span>Like</span>
                <span className={classes.likeCount}>{props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post;