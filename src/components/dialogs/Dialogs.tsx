import React from "react";
import classes from "./dialogs.module.css"

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog}>
                    Andrey
                </div>
                <div className={classes.dialog}>
                    Masha
                </div>
                <div className={classes.dialog}>
                    Sasha
                </div>
                <div className={classes.dialog}>
                    Timur
                </div>
                <div className={classes.dialog}>
                    Valera
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