import React from 'react';
import Swal from 'sweetalert2'
import { deleteProduct } from '../../action/ProductAction';


const deleteProductData = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch("http://127.0.0.1:8000/api/delete-product", {
          method: "POST",
          body: JSON.stringify(id),
          headers: {
            "Content-type": "application/json",
          },
        });
        const data = await res.json();
    
        if (data == 1) {
          dispatch(
            deleteProduct(id.id)
          );

          Swal.fire({
            title: 'Successfylly Delete Product',
            text: 'One Item add',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          })
        }
      };
};

export default deleteProductData;