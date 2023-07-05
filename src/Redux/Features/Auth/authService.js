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
    // register,
    logout
    // login
}

export default authService;