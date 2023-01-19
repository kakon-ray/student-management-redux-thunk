import logo from './logo.svg';
import './App.css';
import Home from './page/Main/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import { RouterProvider } from 'react-router-dom';
import router from './router/router';


function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    
    </div>
  );
}

export default App;
