/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteCartList } from '../../../redux/action/CartListAction';
import getCartListData from '../../../redux/thunk/action/getCartListData';


import './CartList.css'
const CartList = () => {
  
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getCartListData())
}, [dispatch]);


  const cartlist = useSelector(
    (state) => state.product.cart
  );

  // let cartlist = JSON.parse(localStorage.getItem('cart'));
  // console.log(cartlist)
  const delete_Cart = (item) => {
   
    Swal.fire({
      title: 'Do you want to Delete this Item',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteCartList(item.id))
      } 
    })
   
  }

  const updateQuantity = (quantity,id) => {
    let cartlist = JSON.parse(localStorage.getItem('cart'));
    cartlist.map((item) => {
      return item.id === id? item.quantity=quantity : item;
  })

  localStorage.setItem('cart', JSON.stringify(cartlist));
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
              <input type='number' min='1' onChange={(e)=>updateQuantity(e.target.value,item.id)} defaultValue={item.quantity} className="w-25"></input>
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