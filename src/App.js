import logo from './logo.svg';
import './App.css';
import Home from './page/Main/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>

    
    
  );
}

export default App;
