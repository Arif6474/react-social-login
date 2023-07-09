import axios from 'axios';
import { CONSUMERS_API } from '../../../Utilities/APIs'

// Register user

async function socialRegister(employeeData) {

    const response = await axios.post(CONSUMERS_API + "registerWithFacebook/", employeeData)

    if (response.data) {
        localStorage.setItem('employee', JSON.stringify(response.data))
    }

    return response.data

}

async function addPhoneNumber(employeeData) {

    const response = await axios.patch(CONSUMERS_API + "addMobileNumber/", employeeData)

    if (response.data) {
        localStorage.setItem('employee', JSON.stringify(response.data))
    }

    return response.data

}
async function socialLogin(employeeData) {

    const response = await axios.post(CONSUMERS_API + "loginWithFaceBook/", employeeData)

    if (response.data) {
        localStorage.setItem('employee', JSON.stringify(response.data))
    }

    return response.data

}

// async function register(employeeData) {

//     const response = await axios.post(EMPLOYEES_API + 'register', employeeData);

//     if (response.data) {
//         localStorage.setItem('employee', JSON.stringify(response.data))
//     }

//     return response.data

// }

// async function login(employeeData) {

//     const response = await axios.post(EMPLOYEES_API + 'login', employeeData);

//     if (response.data) {
//         localStorage.setItem('employee', JSON.stringify(response.data))
//     }

//     return response.data

// }

const logout = () => {
    localStorage.removeItem('employee')
}

const authService = {
    socialRegister,
    addPhoneNumber,
    socialLogin,
    // register,
    logout
    // login
}

export default authService;