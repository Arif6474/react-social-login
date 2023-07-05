import React, { useState } from 'react'
import './AddNumber.css'
import { CONSUMERS_API } from '../../Utilities/APIs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AddNumber() {
    const [mobile, setMobile] = useState('')
    const navigate = useNavigate()
    const {employee} = useSelector(state => state.auth)
    console.log("🚀 ~ file: AddNumber.js:12 ~ AddNumber ~ employee:", employee)

    async function handleAddNumber(e) {
         e.preventDefault();
        try {
            const userData = {mobile }
            const config = {
                headers: {
                  Authorization: `Bearer ${employee.token}`
                }
              }
            const response = await axios.patch(CONSUMERS_API + "addMobileNumber/", userData , config)

            console.log("🚀 ~ file: AddNumber.js:13 ~ handleAddNumber ~ response:", response)

            if (response.data) {
                localStorage.setItem('employee', JSON.stringify(response.data))
                navigate('/checkout')
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='phone'>
            <form onSubmit={handleAddNumber}>
                <label className='phone_label'>
                    Phone number:
                    <input type="number" className='' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </label>
                <button type="submit" value="Submit" className='btn'>Submit </button>
            </form>
        </div>
    )
}

export default AddNumber