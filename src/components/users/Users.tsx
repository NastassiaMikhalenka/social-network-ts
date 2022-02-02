import React from "react";
import {toogleFollowingProgress, userType} from "../../redux/users_reducer";
import classes from "./stylesUsers.module.css";
import userPhoto from '../../assets/user.png'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../API/api";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: Array<userType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    followingInProgress: Array<number>
    toogleFollowingProgress: (isFetching: boolean, id: number) => void
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
                                    ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  props.toogleFollowingProgress(true, user.id)
                                                  usersAPI.unFollow(user.id)
                                                      .then((data) => {
                                                          if (data.resultCode === 0) {
                                                              props.follow(user.id)
                                                          }
                                                          props.toogleFollowingProgress(false, user.id)
                                                      });
                                              }}>UnFollow</button>
                                    : <button
                                        disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            props.toogleFollowingProgress(true, user.id)
                                            usersAPI.follow(user.id)
                                                .then((response) => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(user.id)
                                                    }
                                                    props.toogleFollowingProgress(false, user.id)
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

