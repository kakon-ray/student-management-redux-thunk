import { getStudentData } from "../../action/StudentAction";


const getStudent = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();

    if (data.length) {
      dispatch(getStudentData(data));
    }
  };
};

export default getStudent;