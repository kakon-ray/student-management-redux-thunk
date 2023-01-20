import React from 'react';
import { postProduct } from '../../action/ProductAction';
import Swal from 'sweetalert2'

const addProductData = (product) => {
    return async (dispatch, getState) => {
        const res = await fetch("http://127.0.0.1:8000/api/sendproduct", {
          method: "POST",
          body: JSON.stringify(product),
          headers: {
            "Content-type": "application/json",
          },
        });
        const data = await res.json();
    
        if (data == 1) {
          dispatch(
            postProduct(product)
          );

          Swal.fire({
            title: 'Successfylly add Product',
            text: 'One Item add',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          })
        }
      };
};

export default addProductData;