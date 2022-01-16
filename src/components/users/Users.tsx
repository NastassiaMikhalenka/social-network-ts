import React from "react";
import {userType} from "../../redux/users_reducer";
import classes from "./stylesUsers.module.css";
import userPhoto from '../../assets/user.png'
import {NavLink} from "react-router-dom";
import axios from "axios";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: Array<userType>
    follow: (id: number) => void
    unfollow: (id: number) => void
}

export const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {/*<button onClick={this.getUsers}></button>*/}
            <div>
                {pages.map(p => {
                    return <span
                        onClick={(e) => {
                            props.onPageChanged(p)
                        }}
                        className={props.currentPage === p ? classes.selectedPage : classes.UsersPage}>{p}</span>
                })}
            </div>
            <div>
                {
                    props.users.map(user => <div key={user.id}>
                        <div>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt={"user"}
                                         style={{width: "70px", borderRadius: "50%"}}/>
                                </NavLink>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "1816a1c5-7ed6-402d-b14d-8887ab743f36",
                                            },
                                        })
                                            .then((response) => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(user.id)
                                                }
                                            });
                                    }}>UnFollow</button>
                                    :<button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "1816a1c5-7ed6-402d-b14d-8887ab743f36",
                                            },
                                        })
                                            .then((response) => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(user.id)
                                                }
                                            });
                                    }}>Follow</button>
                                }

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
        </div>
    )
}

export default Users

