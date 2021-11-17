import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./navbar.module.css"

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