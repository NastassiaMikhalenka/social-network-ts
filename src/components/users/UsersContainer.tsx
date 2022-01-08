import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {StateReduxType} from "../../redux/redux-store";
import {userType} from "../../redux/users_reducer";


type mapStateToPropsType = {
    users: Array<userType>
}
type mapDispatchToPropsType = {}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StateReduxType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (): mapDispatchToPropsType => {
    return {}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;