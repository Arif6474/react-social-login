import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import ReactjsLogin from './Components/Home/ReactjsLogin';
import AddNumber from './Components/Home/AddNumber';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './Redux/Features/Auth/authSlice';
import Checkout from './Components/Home/Checkout';


function App() {
  const { employee } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());

  }
  return (
    <div className="App">
      <BrowserRouter>
        <button className='btn' onClick={handleLogout} >Logout</button>
        {/* <AddNumber/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reactjsLogin" element={<ReactjsLogin />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/addNumber" element={employee ? <AddNumber /> : <Navigate to='/reactjsLogin' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
