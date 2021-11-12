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
                <div>
                    <p>{props.name}</p>
                    <p>{props.location}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;