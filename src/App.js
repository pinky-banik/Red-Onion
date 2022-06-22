import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Homepage/Home/Home';
import Login from './Components/Login/Login/Login';
import Navbar from './Components/Shared/Navbar/Navbar';
import Register from './Components/Login/Register/Register';
import Error from './Components/Shared/Error/Error';
import FoodDetails from './Components/Homepage/foods/FoodDetails';
import OrderSuccessful from './Components/Homepage/foods/PlaceOrder.js/OrderSuccessful';
import PlaceOrder from './Components/Homepage/foods/PlaceOrder.js/PlaceOrder';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/foods/:title' element={<FoodDetails/>} />
        <Route path="/orders" element={<PlaceOrder/>}></Route>
        <Route path='/ordersuccess' element={<OrderSuccessful/>}></Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
