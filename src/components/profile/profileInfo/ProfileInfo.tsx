import React from "react";
import classes from "./profileInfo.module.css";
import {Preloader} from "../../common/Preloader";
import imgHeader from '../../../assets/headerPhoto.png'
import {ProfileType} from "../../../redux/profile_reducer";
import userPhoto from "../../../assets/user.png";



type PropsType = {
    profile: ProfileType
    img?: string
    avatar?: string
    name?: string
    location?: string
    description?: string
}

const ProfileInfo = (props: PropsType) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <>
            <div className={classes.contentProfilePhoto}>
                <img src={imgHeader} alt='#'/>
             </div>
            <div className={classes.contentProfileInfo}>
                <div className={classes.profileAvatar}>
                    <img src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto} alt={"user"}/>
                </div>
                <div className={classes.contentDescription}>
                    <div className={classes.nameAndLocation}>
                        <p className={classes.infoName}>{props.profile.fullName}</p>
                        <p className={classes.infoLocation}>{props.profile.lookingForAJobDescription}</p>
                    </div>
                    <p className={classes.infoDescription}>{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;