import { combineReducers } from "redux";
import { countState, countReducer } from "./count/reducer";
import { userState, userReducer } from "./user/reducer";

export interface RootState {
    count: countState;
    user: userState;
}

export default combineReducers<RootState>({
    count: countReducer,
    user: userReducer,
});
