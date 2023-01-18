import { GET_CONTENT } from "../ActionType"

const initialState = {
    allStudent:[],
    joinPlayStudent:[]
}


const studentReducer = (state=initialState,action) => {
         switch(action.type){

            case GET_CONTENT:
                return{
                    ...state,
                    allStudent:action.payload
                }

            default:
                return state
         }
}

export default studentReducer