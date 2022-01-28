import {
    call,
    put,
    takeEvery,
    CallEffect,
    ForkEffect,
    PutEffect,
} from "redux-saga/effects";
import {
    success,
    failed,
    GET_USER,
    UserAction,
    UserActionSuccessResult,
} from "./actions";
import { UserInfo } from "./reducer";
import * as Util from "../../utils";

const createRandomFrom = ({ max, min }: { max: number; min: number }): number =>
    Math.floor(Math.random() * (max + 1 - min)) + min;

const getUserById = async (userId: string): Promise<UserInfo> => {
    const age = createRandomFrom({ max: 100, min: 0 });
    if (age > 50) throw new Error(`Failed to get userId: ${userId}`);

    return {
        name: `sample ${userId}`,
        age,
        nationality: "USA",
    };
};

export function* handleGetUser(
    action: UserAction
): Generator<
    | CallEffect<UserInfo>
    | PutEffect<UserActionSuccessResult>
    | PutEffect<UserAction>,
    void,
    UserInfo
> {
    try {
        const res: UserInfo = yield call(getUserById, action.payload);
        yield put(success(res));
    } catch (error) {
        yield put(failed(Util.errorMessageOf(error)));
    }
}

export function* watchGetUser(): Generator<ForkEffect<never>, void, unknown> {
    yield takeEvery(GET_USER, handleGetUser);
}
