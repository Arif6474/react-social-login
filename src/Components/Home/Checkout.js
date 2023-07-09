import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Features/Auth/authSlice';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const dispatch = useDispatch();
  const { employee } = useSelector(state => state.auth)
  const navigate = useNavigate()

  function handleLogout() {
    dispatch(logout());

  }
  useEffect(() => {
    if (!employee?.fbId && !employee?.mobile) {
      navigate('/reactjsLogin')
    }
  }, [employee, navigate])
  
  return (
    <div>
      <h1>Checkout</h1>
      {
        employee &&
        <button className='btn' onClick={handleLogout} >Logout</button>
      }
    </div>
  )
}

export default Checkout