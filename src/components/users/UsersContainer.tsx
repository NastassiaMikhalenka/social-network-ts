import React from "react";
import {connect} from "react-redux";
import {StateReduxType} from "../../redux/redux-store";
import {setCurrentPageAC, setToogleIsFetchingAC, setTotalUserCountAC, userType} from "../../redux/users_reducer";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users_reducer";
import axios from "axios";
import Users from "./Users";
import {Preloader} from "../common/Preloader";

class UsersContainer extends React.Component<UsersPropsType> {
    // constructor(props: UsersPropsType) { // можно не делать constructor если передаются только встроенные пропсы
    //     super(props);
    // }

    componentDidMount() {
        this.props.setToogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setToogleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setToogleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setToogleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/>
                : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged} currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
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
}
type mapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalUserCount: number) => void
    setToogleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StateReduxType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => { // наши callback's
    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        unfollow: (id: number) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users: Array<userType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(setTotalUserCountAC(totalCount))
        },
        setToogleIsFetching: (isFetching: boolean) => {
            dispatch(setToogleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);