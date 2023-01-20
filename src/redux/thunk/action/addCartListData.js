import React from 'react';
import { postProduct } from '../../action/ProductAction';
import Swal from 'sweetalert2'
import { postCartList } from '../../action/CartListAction';

const addCartListData = (cartdata) => {
    return async (dispatch, getState) => {
        const res = await fetch("http://127.0.0.1:8000/api/add-cartlist", {
          method: "POST",
          body: JSON.stringify(cartdata),
          headers: {
            "Content-type": "application/json",
          },
        });
        const data = await res.json();
    
        if (data == 1) {
          dispatch(
            postCartList(cartdata)
          );

          Swal.fire({
            title: 'Successfylly add Product to Cartlist',
            text: 'One Item add',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }
      };
};

export default addCartListData;