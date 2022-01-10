import React from "react";
import {connect} from "react-redux";
import {StateReduxType} from "../../redux/redux-store";
import {setCurrentPageAC, setTotalUserCountAC, userType} from "../../redux/users_reducer";
import Users from "./UsersClass";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users_reducer";


type mapStateToPropsType = {
    users: userType[],
    pageSize: number,
    totalUserCount: number,
    currentPage: number,

}
type mapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalUserCount: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StateReduxType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch((setCurrentPageAC(currentPage)))
        },
        setTotalUserCount: (totalUserCount: number) => {
            dispatch((setTotalUserCountAC(totalUserCount)))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;