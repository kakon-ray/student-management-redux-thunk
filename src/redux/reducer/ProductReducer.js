import { GET_PRODUCT, ADD_PRODUCT, ADD_CARTLIST, GET_CARTLIST} from "../ActionType"

const initialState = {
    product:[],
    cart:[]
}


const productReducer = (state=initialState,action) => {
         switch(action.type){

            case GET_PRODUCT:
                return{
                    ...state,
                    product:action.payload
                }

            case ADD_PRODUCT:
                return{
                    ...state,
                    product:[...state.product,action.payload]
                }

            case ADD_CARTLIST:
                return{
                    ...state,
                    cart:[...state.cart,action.payload]
                }

            case GET_CARTLIST:
                return{
                    ...state,
                    cart:action.payload
                }

            default:
                return state
         }
}

export default productReducer