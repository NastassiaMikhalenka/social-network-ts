import React from "react";
import Profile from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateReduxType} from "../../../redux/redux-store";
import {ProfileType, setUserProfileAC} from "../../../redux/profile_reducer";

class ProfileContainer extends React.Component<ProfilePropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {
                this.props.setUserProfile(response.data);
            });
    }

    render(){
       return (
           <>
               <Profile {...this.props} profile={this.props.profile}/>
           </>
       )
   }
}
type mapStateToPropsType = {
    profile: ProfileType
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: boolean) => void
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state: StateReduxType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {
    setUserProfile: setUserProfileAC
}) (ProfileContainer);