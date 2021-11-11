import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./navbar.module.css"

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" style={isActive => ({
                    color: isActive ? "green" : "blue"
                })}
                >Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" style={isActive => ({
                    color: isActive ? "green" : "blue"
                })}
                >Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" style={isActive => ({
                    color: isActive ? "green" : "blue"
                })}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" style={isActive => ({
                    color: isActive ? "green" : "blue"
                })}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" style={isActive => ({
                    color: isActive ? "green" : "blue"
                })}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;