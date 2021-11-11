import React from "react";
import classes from "./header.module.css"
import headerLogo from './../../assets/Logo.png'

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={headerLogo} alt='Logo'/>
        </header>
    )
}

export default Header;