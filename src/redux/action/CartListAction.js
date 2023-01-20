import { ADD_CARTLIST,GET_CARTLIST,DELETE_CARTLIST } from "../ActionType"


export const postCartList = (product) => {
    return {
        type: ADD_CARTLIST,
        payload: product
    }
}
export const getCartList = (data) => {
    return {
        type: GET_CARTLIST,
        payload: data
    }
}
export const deleteCartList = (id) => {
    return {
        type: DELETE_CARTLIST,
        payload: id
    }
}
