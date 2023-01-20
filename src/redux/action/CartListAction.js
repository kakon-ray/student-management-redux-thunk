import { ADD_CARTLIST,GET_CARTLIST } from "../ActionType"


export const postCartList = (data) => {
    return {
        type: ADD_CARTLIST,
        payload: data
    }
}
export const getCartList = (data) => {
    return {
        type: GET_CARTLIST,
        payload: data
    }
}
