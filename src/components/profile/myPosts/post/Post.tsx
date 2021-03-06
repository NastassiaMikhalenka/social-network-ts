import React from "react";
import classes from "./post.module.css"

type PropsType = {
    id: number
    message: string
    likeCount: number
};

const Post = (props: PropsType) => {
    return (
        <div className={classes.postWrapper}>
            <div className={classes.postAva}>
                {/*<img src={props.avatar} alt='#'/>*/}
                {/*<p className={classes.name}>{props.name}</p>*/}
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