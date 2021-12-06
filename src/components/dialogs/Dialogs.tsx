import React, {RefObject} from "react";
import classes from "./dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { MessagesPageType} from "../../redux/state";

type PropsType = {
    // newMessageText: string
    state: MessagesPageType
    addMessage: () => void
    updateMessageText: (newMessage: string) => void
}

const Dialogs = (props: PropsType) => { // приняли в пропсах messagesData || dialogsData и сделали типизацию как PropsType
    let messagesElements = props.state.messagesData.map(message => <Message
        key={message.id}
        message={message.message}
        id={message.id}
    />)

    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem
        key={dialog.id}
        name={dialog.name}
        id={dialog.id}
    />)

    let newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef();

    const sendMessage = () => {
        props.addMessage()
        // let text = newMessageElement.current?.value
        // alert(text)
    }

    const onMessageChange = () => {
        let text = newMessageElement.current?.value
        if(text) {
            props.updateMessageText(text)
        }
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
                    <textarea ref={newMessageElement}
                              value={props.state.newMessage}
                              onChange={onMessageChange}
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Dialogs;