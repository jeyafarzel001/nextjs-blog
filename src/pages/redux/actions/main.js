import * as types from "../reducers/types";

export const setInfo = (name) => dispatch => {
    console.log("sssssssssss");
    dispatch({
        type: types.SET_NAME,
        payload: name
    });
}
