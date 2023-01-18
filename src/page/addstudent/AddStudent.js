import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddStudent.css'
const AddStudent = () => {
    return (
        <div className='add-student'>
          <div className='container'>
             <div className='row'>
                 <div className=' card  p-5 col-lg-8 mx-auto'>
                 <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Student Name</Form.Label>
        <Form.Control type="text" placeholder="Student Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="phone" placeholder="Phone Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" placeholder="Image" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Father Name</Form.Label>
        <Form.Control type="text" placeholder="Father Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mother Name</Form.Label>
        <Form.Control type="text" placeholder="Mother Name" />
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

export default AddStudent;