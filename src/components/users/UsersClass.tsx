import React from "react";
import {UsersPropsType} from "./UsersContainer";
import axios from 'axios'
import {userType} from "../../redux/users_reducer";
import classes from "./stylesUsers.module.css";

class Users extends React.Component<UsersPropsType> {
    // constructor(props: UsersPropsType) { // можно не делать constructor если передаются только встроенные пропсы
    //     super(props);
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalUserCount)
            });
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            {/*<button onClick={this.getUsers}></button>*/}
            <div>
                {pages.map(p => {
                    return <span
                        onClick={() => {
                            this.onPageChanged(p)
                        }}
                        className={this.props.currentPage === p ? classes.selectedPage : classes.UsersPage}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(user => <div key={user.id}>
                    <div>
                        <div>
                            <img src={"user.photos.small"} alt={"user"} style={{width: "70px", borderRadius: "50%"}}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    this.props.follow(user.id)
                                }}>Follow</button>
                                : <button onClick={() => {
                                    this.props.unfollow(user.id)
                                }}>UnFollow</button>}

                        </div>
                    </div>
                    <div>
                        <div>
                            <p>{user.name}</p>
                            <p>{user.status}</p>
                        </div>
                        <div>
                            <p>{"user.location.country"}</p>
                            <p>{"user.location.city"}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>

    }
}

export default Users;
