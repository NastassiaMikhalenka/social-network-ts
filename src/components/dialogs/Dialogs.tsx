import React, {RefObject} from "react";
import classes from "./dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { MessagesPageType} from "../../redux/state";

type PropsType = {
    state: MessagesPageType
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
        let text = newMessageElement.current?.value
        alert(text)
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
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Dialogs;