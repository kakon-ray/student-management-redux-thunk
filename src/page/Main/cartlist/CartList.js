/* eslint-disable react/style-prop-object */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteCartList } from '../../../redux/action/CartListAction';

import './CartList.css'
const CartList = () => {
  
const dispatch = useDispatch();

  const cartlist = useSelector(
    (state) => state.product.cart
  );


  const delete_Cart = (item) => {
   
    Swal.fire({
      title: 'Do you want to Delete this Item',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Delete',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteCartList(item.id))
      } 
    })
   
  }

    return (
        <div className='container pt-4'>
        <div className='row table-responsive'>
        <table className="table table-striped table-hover table-bordered text-center">
     <thead>
       <tr>
         <th scope="col">ID</th>
         <th scope="col">Product Name</th>
         <th scope="col">Price</th>
         <th scope="col">Quantity</th>
         <th scope="col">Product Image</th>
         <th scope="col">Deltails</th>
         <th scope="col">Others</th>
       </tr>
     </thead>
     <tbody>
      {
        cartlist?.map(item => {
          return(
            <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.productName}</td>
            <td>{item.price}</td>
            <td>
              <input type='number' defaultValue={item.quantity} className="w-25"></input>
            </td>
            <td>
              <img src={item.image} alt="Cart" className="cart-img"></img>
            </td>
            <td>{item.productDetails}</td>
            <td>
            <button type="button" className="btn btn-danger" onClick={()=>delete_Cart(item)}>Delete</button>
            </td>
          </tr>
          )
        })
      }
      
  
     </tbody>
   </table>
        </div>
    </div>
    );
};

export default CartList;