import React from "react";
import classes from "./profileInfo.module.css";
import HeaderProfile from "../../../assets/HeaderPhoto.jpeg";


const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.contentProfile}>
                <img src={HeaderProfile} alt='#'/>
             </div>
            <div className={classes.profileAvatar}>
                <img src='https://i2.wp.com/neptune.ai/wp-content/uploads/blurring-image-pgmagick.jpg?resize=256%2C256&ssl=1' alt='#'/>
            </div>
        </div>
    )
}

export default ProfileInfo;