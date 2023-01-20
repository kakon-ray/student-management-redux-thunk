import { GET_PRODUCT, ADD_PRODUCT,DELETE_PORDUCT} from "../ActionType"


export const postProduct = (data) => {
    return {
        type: ADD_PRODUCT,
        payload: data
    }
}
export const getProduct = (data) => {
    return {
        type: GET_PRODUCT,
        payload: data
    }
}
export const deleteProduct = (data) => {
    return {
        type: DELETE_PORDUCT,
        payload: data
    }
}
