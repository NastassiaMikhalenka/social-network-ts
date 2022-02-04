import React from "react";
import Profile from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateReduxType} from "../../../redux/redux-store";
import {getUserProfileThunk, ProfileType} from "../../../redux/profile_reducer";
import {usersAPI} from "../../../API/api";
import {Location, NavigateFunction, useLocation, useNavigate, useParams} from "react-router-dom";

// вынести в отдельный файл функцию withRouter
export interface RoutedProps<Params = any, State = any> {
    location: Location;
    navigate: NavigateFunction
    params: { userId: string };
}

export function withRouter<P extends RoutedProps>(Child: React.ComponentClass<P>) {
    return (props: Omit<P, keyof RoutedProps>) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Child {...props as P}
                      params={params}
                      location={location}
                      navigate={navigate}
        />;
    }
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId: string = this.props.params.userId
        if (!userId){
            userId='2';
        }
        // debugger
        this.props.getUserProfileThunk(userId)
        // usersAPI.getProfile(userId).then((response) => {
        //     this.props.setUserProfile(response.data)
        // })

        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        //     .then((response) => {
        //         this.props.setUserProfile(response.data);
        //     });
    }

    render() {
        return (
            <>
                <Profile profile={this.props.profile}/>
            </>
        )
    }
}

export type mapStateToPropsType = {
    profile: ProfileType
}
type mapDispatchToPropsType = {
    getUserProfileThunk: (userId: string) => void
}

export type PropsType = mapStateToPropsType & mapDispatchToPropsType & RoutedProps


let mapStateToProps = (state: StateReduxType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})


let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    getUserProfileThunk
})(withUrlDataContainerComponent);