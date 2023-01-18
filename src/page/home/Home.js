import React from 'react';
import AddStudent from '../addstudent/AddStudent';

import './Home.css'

const Home = () => {
    return (
       <div className='container pt-4'>
           <div className='row'>
           <table class="table table-striped table-hover table-bordered text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
         
        </tbody>
      </table>
           </div>
       </div>
    );
};

export default Home;