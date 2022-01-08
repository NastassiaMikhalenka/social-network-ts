import React, {RefObject} from "react";
import classes from "./dialogs.module.css"
import {ActionsType, MessagesPageType} from "../../redux/state";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

type PropsType = {
    store: MessagesPageType
}

const DialogsContainer = (props: PropsType) => { // приняли в пропсах messagesData || dialogsData и сделали типизацию как PropsType
    // let messagesElements = props.state.messagesData.map(message => <Message
    //     key={message.id}
    //     message={message.message}
    //     id={message.id}
    // />)
    //
    // let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem
    //     key={dialog.id}
    //     name={dialog.name}
    //     id={dialog.id}
    // />)
    //
    // let newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef();

    const sendMessage = () => {
        // props.dispatch(addMessageAC())

        // props.dispatch({type: "ADD_MESSAGE"})
    }

    const onMessageChange = () => {
        // let newMessage = newMessageElement.current?.value
        // if(newMessage) {
        //     props.dispatch(updateNewMessageTextAC(newMessage))
        // }

        // let text = newMessageElement.current?.value
        // if(text) {
        //     props.dispatch({type: "UPDATE_NEW_MESSAGE_TEXT", newMessage: text})
        // }
    }

    return (
        <Dialogs
            dialogsData={props.store.dialogsData}
            newMessage={props.store.newMessage}
            messagesData={props.store.messagesData}
            sendMessage={sendMessage}
            onMessageChange={onMessageChange}
        />
    )
}

export default DialogsContainer;