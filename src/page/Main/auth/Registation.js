import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

const Registation = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const dispatch = useDispatch();
  
  const navigate = useNavigate();


  const  onSubmit  =  async (info) => {

    if(info.password !== info.confirmpassword){
        Swal.fire({
            title: 'Two Password is not Match',
            text: 'Please Correct',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
          })

          return 0
    }
    
    axios.post('http://127.0.0.1:8000/api/registation', {
      name:info.name,
      email:info.email,
      password:info.password,
    })
    .then(function (response) {
      if(response.statusText === 'OK' && response.status === 200 && response.data === 1){         
          Swal.fire({
            title: 'Registation Completed',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Go to Login Page',
           
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              navigate('/login');
            } 
          })
        console.log(response);
      }
 
    })
    .catch(function (error) {
      console.log(error);
    });

    
     
  };

    return (
        <div className='container'>
           <div className='row'>
            <h1 className='text-center py-2'>Registation</h1>
              <div className='col-lg-6 mx-auto'>
              <div className=' card  m-2 p-4'>
<Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" {...register("name")} placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" {...register("email")} placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" {...register("password")} placeholder="Password" />
      </Form.Group>
     
      <Form.Group className="mb-3" >
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" {...register("confirmpassword")} placeholder="Confirm Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
</Form>
        </div>
              </div>
           </div>
        </div>
    );
};

export default Registation;