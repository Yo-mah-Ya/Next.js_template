import { Reducer } from "redux";
import { ADD_COUNT, MINUS_COUNT } from "./actions";

export type countState = {
    count: number;
};

export const INITIAL_STATE: countState = {
    count: 0,
};

export const countReducer: Reducer<countState> = (
    state = INITIAL_STATE,
    action
) => {
    switch (action.type) {
        case ADD_COUNT:
            return { ...state, count: state.count + action.payload };
        case MINUS_COUNT:
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
};
