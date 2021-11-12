import React from "react";
import classes from "./dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/1"
                    >Andrey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2"
                    >Masha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3"
                    >Sasha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4"
                    >Timur</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5"
                    >Valera</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How is your</div>
                <div className={classes.message}>Yuu</div>
            </div>
        </div>
    )
}

export default Dialogs;