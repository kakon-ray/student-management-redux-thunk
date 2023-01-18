import { GET_CONTENT,ADD_CONTENT,UPDATE_CONTENT,DELETE_CONTENT } from "../ActionType"


export const postStudentData = (data) => {
    return {
        tupe: ADD_CONTENT,
        payload: data
    }
}
export const getStudentData = (data) => {
    return {
        tupe: GET_CONTENT,
        payload: data
    }
}
export const updateStudentData = (data) => {
    return {
        tupe: UPDATE_CONTENT,
        payload: data
    }
}
export const deleteStudentData = (id) => {
    return {
        tupe: DELETE_CONTENT,
        payload: id
    }
}