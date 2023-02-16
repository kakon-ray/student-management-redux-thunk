import { getCartList } from "../../action/CartListAction";


const getCartListData = () => {
  return async (dispatch, getState) => {
    let data = JSON.parse(localStorage.getItem('cart'));
  console.log(data)
    if (data) {
      dispatch(getCartList(data));
    }
  };
};


export default getCartListData;