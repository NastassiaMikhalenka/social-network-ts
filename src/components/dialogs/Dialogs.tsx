import React from "react";
import classes from "./dialogs.module.css"
// import {DialogItemType, MessageItemType} from "../../index";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogItemType, MessageItemType} from "../../redux/state";

type PropsType = {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageItemType>
}

const Dialogs = (props: PropsType) => {
    let messagesElements = props.messagesData.map(message => <Message
        key={message.id}
        message={message.message}
        id={message.id}
    />)

    let dialogsElements = props.dialogsData.map(dialog => <DialogItem
        key={dialog.id}
        name={dialog.name}
        id={dialog.id}
    />)

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