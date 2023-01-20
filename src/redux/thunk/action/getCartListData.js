import { getCartList } from "../../action/CartListAction";

const getCartListData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://127.0.0.1:8000/api/get-cartlist");
    const data = await res.json();

    if (data) {
      dispatch(getCartList(data));
    }
  };
};


export default getCartListData;