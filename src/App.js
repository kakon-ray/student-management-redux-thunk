import logo from './logo.svg';
import './App.css';
import Home from './page/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './component/HeaderNav';


function App() {
  return (
    <div className="App">
      <HeaderNav/>
        <Home/>
    </div>
  );
}

export default App;
