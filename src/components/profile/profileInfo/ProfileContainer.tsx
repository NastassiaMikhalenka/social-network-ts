import React from "react";
import Profile from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateReduxType} from "../../../redux/redux-store";
import {setUserProfileAC} from "../../../redux/profile_reducer";

class ProfileContainer extends React.Component<any>{

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
    profile: any
}

let mapStateToProps = (state: StateReduxType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {
    setUserProfile: setUserProfileAC
}) (ProfileContainer);