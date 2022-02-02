import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {dataType, getAuthUserData, setAuthUserData} from "../../redux/auth_reducer";
import {StateReduxType} from "../../redux/redux-store";
import {authAPI} from "../../API/api";

type authPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<authPropsType> {
    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // })
        // authAPI.me()
        //     .then((response) => {
        //         if (response.data.resultCode === 0) {
        //             let {id, email, login} = response.data.data
        //             this.props.setAuthUserData(id, email, login)
        //         }
        //     });
        this.props.getAuthUserData()

    }

    render() {
        return <Header {...this.props}/>
    }
}

type mapStateToPropsType = {
    usersId: string
    email: string
    login: string
    isAuth: boolean
}

type mapDispatchToPropsType = {
    getAuthUserData: () => void;
}

const mapStateToProps = (state: StateReduxType): mapStateToPropsType => {
    return {
        usersId: state.auth.data.userId,
        email: state.auth.data.email,
        login: state.auth.data.login,
        isAuth: state.auth.isAuth,
    }
}


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)
