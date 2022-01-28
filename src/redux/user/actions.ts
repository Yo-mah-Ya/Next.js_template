import { UserInfo } from "./reducer";

export const GET_USER = "GET_USER";
export const SUCCESS = "SUCCESS";
export const FAILED = "FAILED";

export type UserAction = {
    type: string;
    payload: string;
};
export type UserActionSuccessResult = {
    type: string;
    payload: UserInfo;
};

export const getUser = (payload: string): UserAction => ({
    type: GET_USER,
    payload: payload,
});

export const success = (payload: UserInfo): UserActionSuccessResult => ({
    type: SUCCESS,
    payload: payload,
});

export const failed = (payload: string): UserAction => ({
    type: FAILED,
    payload: payload,
});
