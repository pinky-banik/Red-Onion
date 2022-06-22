import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Homepage/Home/Home';
import Navbar from './Components/Shared/Navbar/Navbar';
import Error from './Components/Shared/Error/Error';
import FoodDetails from './Components/Homepage/foods/FoodDetails';
import PlaceOrder from './Components/Homepage/foods/PlaceOrder.js/PlaceOrder';
import OrderProvider from './Context/OrderProvider';
import DeliveryProvider from './Context/DeliveryProvider';
import OrderSuccessfulScreen from './Components/Homepage/foods/PlaceOrder.js/OrderSuccessfulScreen';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <OrderProvider>
      <DeliveryProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/foods/:title' element={<FoodDetails/>} />
        <Route path="/orders" element={<PlaceOrder/>}></Route>
        <Route path='/order-successful' element={<OrderSuccessfulScreen/>}></Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </DeliveryProvider>
      </OrderProvider>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
