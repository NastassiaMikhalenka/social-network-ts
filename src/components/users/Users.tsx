import React from "react";
import {UsersPropsType} from "./UsersContainer";
import axios from 'axios'
import { userType } from "../../redux/users_reducer";


export const Users = (props: UsersPropsType) => {

    let getUsers  = () => {
        if (props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
                .then((response: { data: { items: userType[]; }; }) => {
                    props.setUsers(response.data.items)
                });
        }
    }
    return (
        <div>
            <button onClick={getUsers}>getUsers</button>
            {
                props.users.map(user => <div key={user.id}>
                    <div>
                        <div>
                            <img src={"user.photos.small"} alt={"user"} style={{width: "70px", borderRadius: "50%"}}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    props.follow(user.id)
                                }}>Follow</button>
                                : <button onClick={() => {
                                    props.unfollow(user.id)
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
    )
}

export default Users

