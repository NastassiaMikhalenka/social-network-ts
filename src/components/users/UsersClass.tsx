import React from "react";
import {UsersPropsType} from "./UsersContainer";
import axios from 'axios'
import {userType} from "../../redux/users_reducer";

class Users extends React.Component<UsersPropsType> {
    // constructor(props: UsersPropsType) { // можно не делать constructor если передаются только встроенные пропсы
    //     super(props);
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then((response: { data: { items: userType[]; }; }) => {
                this.props.setUsers(response.data.items)
            });
    }

    // getUsers  = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
    //             .then((response: { data: { items: userType[]; }; }) => {
    //                 this.props.setUsers(response.data.items)
    //             });
    //     }
    // }

    render() {

        let pagesCount = this.props.totalUserCount / this.props.pageSize;

        let pages = [];
        for(let i = 1; i< pagesCount; i++){
            pages.push(i)
        }
        return <div>
            {/*<button onClick={this.getUsers}></button>*/}
            <div>
                {pages.map(p => {
                    <span>{p}</span>
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
