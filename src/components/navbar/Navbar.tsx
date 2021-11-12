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
            <div className={classes.item}>
                <NavBarLink linkTo={"/profile"} linkName={"Profile"} />
            </div>
            <div className={classes.item}>
                <NavBarLink linkTo={"/dialogs"} linkName={"Messages"} />
            </div>
            <div className={classes.item}>
                <NavBarLink linkTo={"/news"} linkName={"News"} />
            </div>
            <div className={classes.item}>
                <NavBarLink linkTo={"/music"} linkName={"Music"} />
            </div>
            <div className={classes.item}>
                <NavBarLink linkTo={"/settings"} linkName={"Settings"} />
            </div>
        </nav>
    )
}

export default Navbar;