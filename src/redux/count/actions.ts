export const ADD_COUNT = "ADD_COUNT";
export const MINUS_COUNT = "MINUS_COUNT";

type CountAction = {
    type: string;
    payload: number;
};
export const addCount = (payload: number): CountAction => ({
    type: ADD_COUNT,
    payload: payload,
});

export const minusCount = (payload: number): CountAction => ({
    type: MINUS_COUNT,
    payload: payload,
});
