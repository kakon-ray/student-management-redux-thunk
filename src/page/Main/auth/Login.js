
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import axios from 'axios'
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const navigate = useNavigate();
  let location = useLocation();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [currentuser] = useAuthState(auth);
  let from = location.state?.from?.pathname || "/";

  const  onSubmit  =  async (info) => {
    const email = info.email;
    const password = info.password;
  
    axios.post('http://127.0.0.1:8000/api/login', {
      email:email,
      password:password,
    })
    .then(function (response) {
      console.log(response)
      if(response.data === 1){      
        signInWithEmailAndPassword(email, password)
        navigate(from, { replace: true });
    }
 
    })
    .catch(function (error) {
      console.log(error);
    });

    
     
  };

  // if (currentuser) {
  //   Swal.fire({
  //     icon: "success",
  //     title: "Login Successed",
  //     text: "Welcome",
  //   });
  //   setTimeout(() => {
  //     navigate(from, { replace: true });
  //   }, 1000);
  // }

    return (
        <div className='container'>
           <div className='row'>
            <h1 className='text-center py-2'>Login</h1>
              <div className='col-lg-6 mx-auto'>
              <div className=' card  m-2 p-4'>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" {...register("email")} placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" {...register("password")} placeholder="Password" />
                    </Form.Group>
  
                    
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <p className='pt-2'>
            Already have a account?{" "}
            <Link to="/registation" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer", color: "#f79837" }}>Registation</span>
            </Link>
          </p>
        </div>
              </div>
           </div>
        </div>
    );
};

export default Login;