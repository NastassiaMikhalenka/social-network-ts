import React from "react";
import {connect} from "react-redux";
import {StateReduxType} from "../../redux/redux-store";
import {
    getUsersThunkCreator,
    setCurrentPage,
    // setToogleIsFetching,
    setTotalUserCount,
    toogleFollowingProgress,
    userType
} from "../../redux/users_reducer";
import {Dispatch} from "redux";
import {follow, setUsers, unfollow} from "../../redux/users_reducer";
import axios from "axios";
import Users from "./Users";
import {Preloader} from "../common/Preloader";
import {usersAPI} from "../../API/api";

class UsersContainer extends React.Component<UsersPropsType> {
    // constructor(props: UsersPropsType) { // можно не делать constructor если передаются только встроенные пропсы
    //     super(props);
    // }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.setToogleIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
        //     this.props.setToogleIsFetching(false)
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUserCount(data.totalCount)
        // });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.setCurrentPage(pageNumber)
        // this.props.setToogleIsFetching(true)
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
        //     this.props.setToogleIsFetching(false)
        //     this.props.setUsers(data.items)
        // })
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/>
                : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   // toogleFollowingProgress={this.props.toogleFollowingProgress}
            />
        </>
    }
}

type mapStateToPropsType = {
    users: userType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

type mapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    // setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalUserCount: number) => void
    // setToogleIsFetching: (isFetching: boolean) => void
    toogleFollowingProgress: (isFetching: boolean, id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StateReduxType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => { // наши callback's
//     return {
//         follow: (id: number) => {
//             dispatch(followAC(id))
//         },
//         unfollow: (id: number) => {
//             dispatch(unfollowAC(id))
//         },
//         setUsers: (users: Array<userType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUserCount: (totalCount: number) => {
//             dispatch(setTotalUserCountAC(totalCount))
//         },
//         setToogleIsFetching: (isFetching: boolean) => {
//             dispatch(setToogleIsFetchingAC(isFetching))
//         }
//     }
// }
//export default connect(mapStateToProps, {follow: followAC, etc})(UsersContainer);

export default connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, setTotalUserCount,
    toogleFollowingProgress,
    getUsers: getUsersThunkCreator
})(UsersContainer);