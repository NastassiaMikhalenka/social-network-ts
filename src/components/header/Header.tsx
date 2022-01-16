import React from "react";
import classes from "./header.module.css"
import headerLogo from './../../assets/Logo.png'
import {NavLink} from "react-router-dom";

type PropsType = {
    login: string
    isAuth: boolean
    email: string
}

const Header = (props: PropsType ) => {
    return (
        <header className={classes.header}>
            <img src={headerLogo} alt='Logo'/>
            <div className={classes.loginBlock}>
                {props.isAuth ? <span>Привет!</span>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;