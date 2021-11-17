import React from "react";
import classes from "../dialogs.module.css"
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    name: string
}

const DialogItem = (props: PropsType) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={`/dialogs/${props.id}`} key={props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;