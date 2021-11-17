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

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
            </div>
        </div>
    )
}

export default Dialogs;