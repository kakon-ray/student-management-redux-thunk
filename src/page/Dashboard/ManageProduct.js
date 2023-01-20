import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import deleteProductData from '../../redux/thunk/action/deleteProductData';
import getProductData from '../../redux/thunk/action/getProductData';

const ManageProduct = () => {
const dispatch = useDispatch()
  const allProduct = useSelector(
    (state) => state.product.product
  );

  useEffect(() => {
    dispatch(getProductData())
  }, [dispatch]);

  const delete_product = (item) => {
    const id = {id:item.id}
    Swal.fire({
      title: 'Do you want to Delete this Item',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Delete',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteProductData(id))
      } 
    })
   
    
  }

    return (
        <div className='container pt-4'>
           <div className='row table-responsive'>
        <table class="table table-striped table-hover table-bordered text-center">
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
        allProduct?.map(item => {
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
            <button type="button" class="btn btn-danger" onClick={()=>delete_product(item)}>Delete</button>
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

export default ManageProduct;