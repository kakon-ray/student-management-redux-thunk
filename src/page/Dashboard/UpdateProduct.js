import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import {useParams} from 'react-router-dom';
import getProductData from '../../redux/thunk/action/getProductData';
import updateProductData from '../../redux/thunk/action/updateProductData';

const UpdateProduct = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(getProductData())
  }, [dispatch]);

  const allProduct = useSelector(
    (state) => state.product.product
  );

  const oneProduct = allProduct.filter(item => item.id == id)


  const onSubmit = (data) => {
    if(data.productName === ''){
      data.productName = oneProduct[0]?.productName
    }
     if(data.price === ''){
      data.price = oneProduct[0]?.price
    }
   if(data.quantity === ''){
      data.quantity = oneProduct[0]?.quantity
    }
    if(data.image === ''){
      data.image = oneProduct[0]?.image
    }
    if(data.productDetails === ''){
      data.productDetails = oneProduct[0]?.productDetails
    }

    const product = {
      id:id,
      productName:data.productName,
      price:data.price,
      quantity:data.quantity,
      image:data.image,
      productDetails:data.productDetails,
    }

    
    
    
    dispatch(updateProductData(product))
  };

 

    return (
        <div className='add-student'>
         <div className=' card  m-2 p-4'>
                 <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" {...register("productName")} defaultValue={oneProduct[0]?.productName} placeholder="Product Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" {...register("price")} defaultValue={oneProduct[0]?.price} placeholder="Price" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" {...register("quantity")} defaultValue={oneProduct[0]?.quantity} placeholder="Total Product" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" {...register("image")} defaultValue={oneProduct[0]?.image} placeholder="Image" />
      </Form.Group>
 
      <Form.Group className="mb-3">
        <Form.Label>Product Details</Form.Label>
        <Form.Control type="text" {...register("productDetails")} defaultValue={oneProduct[0]?.productDetails} placeholder="Product Details" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
                 </div>
        </div>
    );
};

export default UpdateProduct;