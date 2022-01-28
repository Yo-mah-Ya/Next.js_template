import { Reducer } from "redux";
import { GET_USER, SUCCESS, FAILED } from "./actions";

export type UserInfo = {
    name: string;
    age: number;
    nationality: string;
};

export type userState = {
    userId: string;
    response?: UserInfo;
    errorMessage?: string;
    loading: boolean;
};

export const INITIAL_STATE: userState = {
    userId: "",
    loading: false,
};

export const userReducer: Reducer<userState> = (
    state = INITIAL_STATE,
    action
) => {
    switch (action.type) {
        case GET_USER:
            return { ...state, loading: true };
        case SUCCESS:
            return { ...state, loading: false, response: action.payload };
        case FAILED:
            return { ...state, loading: false, errorMessage: action.payload };
        default:
            return state;
    }
};
