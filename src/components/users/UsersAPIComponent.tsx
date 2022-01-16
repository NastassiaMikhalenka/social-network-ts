import React from "react";
import {UsersPropsType} from "./UsersContainer";
import axios from 'axios'
import Users from "./Users";

class UsersAPIComponent extends React.Component<UsersPropsType> {
    // constructor(props: UsersPropsType) { // можно не делать constructor если передаются только встроенные пропсы
    //     super(props);
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                      onPageChanged={this.onPageChanged} currentPage={this.props.currentPage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>
    }
}

export default UsersAPIComponent;
