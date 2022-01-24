import React from "react";
import Profile from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateReduxType} from "../../../redux/redux-store";
import {ProfileType, setUserProfileAC} from "../../../redux/profile_reducer";
import {useLocation, useParams} from "react-router";

// вынести в отдельный файл функцию withRouter
export interface RoutedProps<Params = any, State = any> {
    location: string;
    params: { userId: string };
}

export function withRouter<P extends RoutedProps>(Child: React.ComponentClass<P>) {
    return (props: Omit<P, keyof RoutedProps>) => {
        // const location = useLocation();
        const params = useParams();
        return <Child {...props as P}
                      params={params}
                      // location={location}
        />;
    }
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId: string = this.props.params.userId
        if (!userId){
            userId='2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response) => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
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
    setUserProfile: (profile: ProfileType) => void
}

export type PropsType = mapStateToPropsType & mapDispatchToPropsType & RoutedProps


let mapStateToProps = (state: StateReduxType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})


let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile: setUserProfileAC
})(withUrlDataContainerComponent);