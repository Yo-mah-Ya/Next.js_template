import { createStore, Store, applyMiddleware /*StoreCreator, */ } from "redux";
import createSagaMiddleware, { Task } from "redux-saga";
import roodReducers, { RootState } from "./rootReducer";
import { rootSaga } from "./rootSaga";
import { createWrapper } from "next-redux-wrapper";
export interface SagaStore extends Store {
    sagaTask?: Task;
}

const makeStore = (): SagaStore => {
    // 1: Create the middleware
    const sagaMiddleware = createSagaMiddleware();

    // 2: Add an extra parameter for applying middleware:
    const store: SagaStore = createStore(
        roodReducers,
        applyMiddleware(sagaMiddleware)
    );

    // 3: Run your sagas on server
    store.sagaTask = sagaMiddleware.run(rootSaga);

    // 4: now return the store:
    return store;
};

export const wrapper = createWrapper<Store<RootState>>(makeStore, {
    debug: false,
});
