import {authAPI} from "../API/api";
import {Dispatch} from "redux";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

export type initialStateType = {
    data: dataType
    isAuth: boolean
}

export type dataType = {
    userId: string
    email: string
    login: string
}

const initialState = {
    data: {} as dataType,
    isAuth: false
}

type actionsType = setAuthUserDataACType;

export const authReducer = (state: initialStateType = initialState, action: actionsType): initialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload.data,
                isAuth: true,
            }
        default:
            return state;
    }
}

type setAuthUserDataACType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (id: string, email: string, login: string) => {
    return {
        type: "SET_AUTH_USER_DATA",
        payload: {
            data: {id, email, login}
        },
    } as const
}

export const getAuthUserData = () => (dispatch: Dispatch) =>{
    authAPI.me()
        .then((response) => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        });
}
