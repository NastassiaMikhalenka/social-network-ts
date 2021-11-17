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
    id: number
    message: string
}

const Message = (props: MessageType) => {
     return (
         <div className={classes.message}>{props.message}</div>
     )
}

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Masha"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Timur"},
        {id: 5, name: "Valera"}
    ]
    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your"},
        {id: 3, message: "Yuu"}
    ]

    let messagesElements = messagesData.map(message => <Message message={message.message} id={message.id} />)

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;