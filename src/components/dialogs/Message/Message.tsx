import React from "react";
import classes from "../dialogs.module.css"
// import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    message: string
}

const Message = (props: PropsType) => {
     return (
         <div className={classes.message}>{props.message}</div>
     )
}

export default Message;