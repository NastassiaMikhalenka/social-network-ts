import React from "react";
import classes from "../dialogs.module.css"
// import {NavLink} from "react-router-dom";

type MessageType = {
    id: number
    message: string
}

const Message = (props: MessageType) => {
     return (
         <div className={classes.message}>{props.message}</div>
     )
}

export default Message;