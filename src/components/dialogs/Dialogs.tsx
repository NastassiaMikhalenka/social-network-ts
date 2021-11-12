import React from "react";
import classes from "./dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: number
    name: string
}

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={`/dialogs/${props.id}`} key={props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
     return (
         <div className={classes.message}>{props.message}</div>
     )
}

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                    <DialogItem name={"Andrey"} id={1}/>
                    <DialogItem name={"Masha"} id={2}/>
                    <DialogItem name={"Sasha"} id={3}/>
                    <DialogItem name={"Timur"} id={4}/>
                    <DialogItem name={"Valera"} id={5}/>
            </div>
            <div className={classes.messages}>
                <Message message={"Hi"} />
                <Message message={"How is your"} />
                <Message message={"Yuu"} />
            </div>
        </div>
    )
}

export default Dialogs;