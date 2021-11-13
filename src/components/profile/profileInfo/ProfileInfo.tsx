import React from "react";
import classes from "./profileInfo.module.css";


type ProfileInfoType = {
    img: string
    avatar: string
    name: string
    location: string
    description: string
}

const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <>
            <div className={classes.contentProfilePhoto}>
                <img src={props.img} alt='#'/>
             </div>
            <div className={classes.contentProfileInfo}>
                <div className={classes.profileAvatar}>
                    <img src={props.avatar} alt='#'/>
                </div>
                <div className={classes.contentDescription}>
                    <div className={classes.nameAndLocation}>
                        <p className={classes.infoName}>{props.name}</p>
                        <a className={classes.laravel_icon} href="#">{props.location}</a>
                        <p className={classes.infoLocation}>{props.location}</p>
                    </div>
                    <p className={classes.infoDescription}>{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;