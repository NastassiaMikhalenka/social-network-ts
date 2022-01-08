import React from "react";
import classes from "./dialogs.module.css"
import { MessagesPageType} from "../../redux/state";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateReduxType} from "../../redux/redux-store";
import {Dispatch} from "redux";

// type PropsType = {
//     store: MessagesPageType
// }
//
// const DialogsContainer = (props: PropsType) => { // приняли в пропсах messagesData || dialogsData и сделали типизацию как PropsType
//     // let messagesElements = props.state.messagesData.map(message => <Message
//     //     key={message.id}
//     //     message={message.message}
//     //     id={message.id}
//     // />)
//     //
//     // let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem
//     //     key={dialog.id}
//     //     name={dialog.name}
//     //     id={dialog.id}
//     // />)
//     //
//     // let newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef();
//
//     const sendMessage = () => {
//         // props.dispatch(addMessageAC())
//
//         // props.dispatch({type: "ADD_MESSAGE"})
//     }
//
//     const onMessageChange = () => {
//         // let newMessage = newMessageElement.current?.value
//         // if(newMessage) {
//         //     props.dispatch(updateNewMessageTextAC(newMessage))
//         // }
//
//         // let text = newMessageElement.current?.value
//         // if(text) {
//         //     props.dispatch({type: "UPDATE_NEW_MESSAGE_TEXT", newMessage: text})
//         // }
//     }
//
//     return (
//         <Dialogs
//             dialogsData={props.store.dialogsData}
//             newMessage={props.store.newMessage}
//             messagesData={props.store.messagesData}
//             sendMessage={sendMessage}
//             onMessageChange={onMessageChange}
//         />
//     )
// }

type mapStateToPropsType = {
    messagesPage: MessagesPageType
}

let mapStateToProps = (state: StateReduxType): mapStateToPropsType => {
    return {
        messagesPage: state.messagesPage
    }
}

type mapDispatchToPropsType = {
    onMessageChange: (newMessage: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onMessageChange: (newMessage: string) => {
            dispatch(updateNewMessageTextAC(newMessage))
        },
        sendMessage: () => {
            dispatch(addMessageAC())
            dispatch(updateNewMessageTextAC(''))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;