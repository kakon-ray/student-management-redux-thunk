import { getProduct } from "../../action/ProductAction";

const getProductData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://127.0.0.1:8000/api/getproduct");
    const data = await res.json();

    if (data) {
      dispatch(getProduct(data));
    }
  };
};


export default getProductData;