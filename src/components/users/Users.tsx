import React from "react";
import {UsersPropsType} from "./UsersContainer";


export const Users = (props: UsersPropsType) => {
    if(props.users.users.length === 0) {
        props.setUsers([{
            id: 1,
            avatarUrl: 'https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146',
            followed: true,
            fullName: 'Anastasia',
            status: 'I am ok',
            location: {city: 'Minsk', country: 'Belarus'}
        },
            {
                id: 2,
                avatarUrl: 'https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146',
                followed: false,
                fullName: 'Valeria',
                status: 'while',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                avatarUrl: 'https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146',
                followed: true,
                fullName: 'Alexander',
                status: 'do',
                location: {city: 'Kiev', country: 'Ukraine'}
            },])
    }
    return (
        <div>
            {
                props.users.users.map(user => <div key={user.id}>
                    <div>
                        <div>
                            <img src={user.avatarUrl} alt={"user"} style={{width: "70px", borderRadius: "50%"}}/>
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
                            <p>{user.fullName}</p>
                            <p>{user.status}</p>
                        </div>
                        <div>
                            <p>{user.location.country}</p>
                            <p>{user.location.city}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users

