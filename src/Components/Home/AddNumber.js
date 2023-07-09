import React, { useEffect, useState } from 'react'
import './AddNumber.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoneNumber } from '../../Redux/Features/Auth/authSlice';

function AddNumber() {

    const [mobile, setMobile] = useState('')
    const navigate = useNavigate()
    const { employee } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        if (employee?.fbId && employee.mobile) {
            navigate('/checkout')
        }
    }, [employee, navigate])


    async function handleAddNumber(e) {
        e.preventDefault();
        try {
            const token = employee?.token

            const userData = { mobile, token }

            dispatch(addPhoneNumber(userData));
            // const config = {
            //     headers: {
            //         Authorization: `Bearer ${employee.token}`
            //     }
            // }
            // const userData = {mobile , token}
            // const response = await axios.patch(CONSUMERS_API + "addMobileNumber/", userData )

            // console.log("🚀 ~ file: AddNumber.js:13 ~ handleAddNumber ~ response:", response)

            // if (response.data) {
            //     localStorage.setItem('employee', JSON.stringify(response.data))
            //     navigate('/checkout')
            // }
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