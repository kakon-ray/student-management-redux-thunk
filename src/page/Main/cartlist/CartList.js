/* eslint-disable react/style-prop-object */
import React from 'react';
import { useSelector } from 'react-redux';
import './CartList.css'
const CartList = () => {
  


  const cartlist = useSelector(
    (state) => state.product.cart
  );



    return (
        <div className='container pt-4'>
        <div className='row'>
        <table class="table table-striped table-hover table-bordered text-center">
     <thead>
       <tr>
         <th scope="col">ID</th>
         <th scope="col">Product Name</th>
         <th scope="col">Price</th>
         <th scope="col">Product Image</th>
         <th scope="col">Quantity</th>
         <th scope="col">Other</th>
       </tr>
     </thead>
     <tbody>
      {
        cartlist.map(item => {
          return(
            <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.productName}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>
              <img src={item.image} alt="Cart" className="cart-img"></img>
            </td>
            <td>{item.productDetails}</td>
            <td>
            <button type="button" class="btn btn-danger" >Delete</button>
            <button type="button" class="btn btn-info m-2" >Edit</button>
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