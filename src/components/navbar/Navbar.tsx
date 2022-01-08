import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./navbar.module.css"
// import Sitebar from "../sitebar/Sitebar";
import {sitebarType, StateType} from "../../redux/state";
import DialogItem from "../dialogs/DialogItem/DialogItem";
//
// type PropsType = {
//     state: sitebarType
// }

const Navbar = () => {

    return (
        <nav className={classes.nav}>
            <NavBarLink linkTo={"/profile"} linkName={"Profile"} />
            <NavBarLink linkTo={"/dialogs/*"} linkName={"Messages"} />
            <NavBarLink linkTo={"/news"} linkName={"News"} />
            <NavBarLink linkTo={"/music"} linkName={"Music"} />
            <NavBarLink linkTo={"/settings"} linkName={"Settings"} />
        </nav>
    )
}

export default Navbar;


type NavNarLinkType = {
    linkTo: string
    linkName: string
}

const NavBarLink = (props: NavNarLinkType) => {
    return (
        <div className={classes.item}>
            <NavLink to={props.linkTo} className={(NavNarLinkType) => NavNarLinkType.isActive ? classes.active : ''}
            >{props.linkName}</NavLink>
        </div>
    )
}

// <div>
//     <h2>SiteBar</h2>
//     <div>
//         {sitebarElements}
//     </div>
// </div>

// let sitebarElements = props.state.dialogsData.slice(0, 3).map(dialog => <DialogItem
//     key={dialog.id}
//     name={dialog.name}
//     id={dialog.id}
// />)