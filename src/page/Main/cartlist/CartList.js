/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteCartList, update_cartqunatity } from '../../../redux/action/CartListAction';
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

let totalPrice = 0;
let shipping = 5;

cartlist.forEach(element => {
totalPrice = totalPrice +  element.price * element.quantity;
});



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
 const data = {quantity,id}
  dispatch(update_cartqunatity(data))
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

        <div className="row">
          <div className="col-md-6">
            <Card>
              <Card.Body style={{ margin: "0", padding: "0" }}>
                <Card.Title
                  style={{
                    backgroundColor: "#f79837",
                    color: "#fff",
                    padding: "10px",
                    width: "100%",
                  }}
                >
                  COUPON
                </Card.Title>

                <div style={{ padding: "15px" }} className="cupon">
                  <p className="text-secondary ">
                    Enter your coupon code if you have one.
                  </p>
                  <input
                    className="pb-2"
                    placeholder="Coupon code"
                    type="text"
                  />
                  <Button variant="dark">APPLY TO CUPON</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <Card>
              <Card.Body style={{ margin: "0", padding: "0" }}>
                <Card.Title
                  style={{
                    backgroundColor: "#f79837",
                    color: "#fff",
                    padding: "10px",
                    width: "100%",
                  }}
                >
                  CART TOTAL
                </Card.Title>
                <div style={{ padding: "15px" }} className="text-secondary">
                  <div className="d-flex justify-content-between py-2">
                    <span>Subtotal</span>
                    <span>${totalPrice}.00</span>
                  </div>
                  <div className="d-flex justify-content-between py-2">
                    <span>Shipping</span>
                    <span>
                      ${totalPrice > 0 ? shipping : (shipping = 0)}.00
                    </span>
                  </div>
                  <p className="text-end py-2">Calculate shipping</p>
                  <hr />
                  <div className="d-flex justify-content-between py-2">
                    <span>Total</span>
                    <span>${totalPrice + shipping}.00</span>
                  </div>
                  <div className="d-flex justify-fontent-end py-2">
                    <Button variant="dark pb-2 pt-2 ms-auto">
                      PROCEED TO CHECKOUT
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
    </div>
    );
};

export default CartList;