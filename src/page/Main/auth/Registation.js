import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import axios from 'axios'
import {useLocation, useNavigate} from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Registation = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [currentuser] = useAuthState(auth);
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";


  const  onSubmit  =  async (info) => {
    const email = info.email;
    const password = info.password;

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

    if(password.length < 8){
      Swal.fire({
        title: 'Password Length Minmum 8 char',
        text: 'Please Correct',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      })

      return 0
    }
    
    axios.post('http://127.0.0.1:8000/api/registation', {
      name:info.name,
      email:email,
      password:password,
    })
    .then(function (response) {
      if(response.statusText === 'OK' && response.status === 200 && response.data === 1){ 
        createUserWithEmailAndPassword(email, password)        
        navigate('/login');
      }
 
    })
    .catch(function (error) {
      console.log(error);
    });

    
     
  };

 
  if (currentuser) {
    Swal.fire({
      icon: "success",
      title: "Registation Successed",
      text: "Welcome",
    });
    setTimeout(() => {
      navigate(from, { replace: true });
    }, 1000);
  }

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