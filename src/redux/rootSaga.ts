import { all, fork } from "redux-saga/effects";
import { watchGetUser } from "./user/saga";

export const rootSaga = function* root(): Generator<unknown, void, unknown> {
    yield all([fork(watchGetUser)]);
};
