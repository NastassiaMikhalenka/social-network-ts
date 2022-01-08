import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {StateReduxType} from "../../redux/redux-store";
import {userType} from "../../redux/users_reducer";
// import {usersPageType} from "../../redux/users_reducer";
import {Dispatch} from "redux";
import {followAC, initialStateType, setUsersAC, unfollowAC} from "../../redux/users_reducer";


type mapStateToPropsType = {
    users: Array<userType>
}
type mapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<userType>) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StateReduxType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => { // наши callback's
    return {
        follow: (id: number) => {
            dispatch((followAC(id)))
        },
        unfollow: (id: number) => {
            dispatch((unfollowAC(id)))
        },
        setUsers: (users: Array<userType>) => {
            dispatch((setUsersAC(users)))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;