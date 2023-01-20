import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addProductData from '../../redux/thunk/action/addProductData';

const AddProduct = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const product = {
      productName:data.productName,
      price:data.price,
      quantity:data.quantity,
      image:data.image,
      productDetails:data.productDetails,
    }
    
    
    dispatch(addProductData(product))
  };

    return (
        <div className='add-student'>
         <div className=' card  m-2 p-4'>
                 <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" {...register("productName")} placeholder="Product Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" {...register("price")} placeholder="Price" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" {...register("quantity")} placeholder="Total Product" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" {...register("image")} placeholder="Image" />
      </Form.Group>
 
      <Form.Group className="mb-3">
        <Form.Label>Product Details</Form.Label>
        <Form.Control type="text" {...register("productDetails")} placeholder="Product Details" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
                 </div>
        </div>
    );
};

export default AddProduct;