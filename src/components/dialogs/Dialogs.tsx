import React, {RefObject} from "react";
import classes from "./dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {ActionsType, DialogItemType, MessageItemType, MessagesPageType} from "../../redux/state";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs_reducer";
import {DialogsPropsType} from "./DialogsContainer";

type PropsType = {
    dialogsData: Array<DialogItemType>
    newMessage: string
    messagesData: Array<MessageItemType>
    sendMessage: () => void
    onMessageChange: () => void
    // addMessage: () => void
    // updateMessageText: (newMessage: string) => void
}

const Dialogs = (props: DialogsPropsType) => { // приняли в пропсах messagesData || dialogsData и сделали типизацию как PropsType
    let messagesElements = props.messagesPage.messagesData.map(message => <Message
        key={message.id}
        message={message.message}
        id={message.id}
    />)

    let dialogsElements = props.messagesPage.dialogsData.map(dialog => <DialogItem
        key={dialog.id}
        name={dialog.name}
        id={dialog.id}
    />)

    // let newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef();

    const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.onMessageChange(e.currentTarget.value)
    }

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                    <div>
                    <textarea
                        value={props.messagesPage.newMessage}
                        onChange={onMessageChange}
                    />
                        <button onClick={props.sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;