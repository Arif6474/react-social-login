import { LoginSocialFacebook } from "reactjs-social-login"
import facebook from '../../Assets/image/social-icons/facebook.svg'
import { useDispatch, useSelector } from "react-redux";
import { socialRegister } from "../../Redux/Features/Auth/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ReactjsLogin() {

    const navigate = useNavigate()

    const dispatch = useDispatch();
    const {employee} = useSelector(state => state.auth)

    useEffect(() => {
        if (employee?.fbId && !employee.mobile) {
            navigate('/addNumber')
        }
    }, [employee, navigate])

    async function handleFacebookRegister(response) {
        try {
            const userData = {
                name: `${response.data.first_name}${response.data.last_name ? response.data.last_name : ''}`,
                fbId: response.data.userID
            }

            dispatch(socialRegister(userData));

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <LoginSocialFacebook
                appId="3168002450136139"
                onResolve={response => {
                    handleFacebookRegister(response)
                }}
                onReject={error => {
                    console.log(error);
                }}
            >
                <button><img src={facebook} alt="" /></button>
                <h1>Register</h1>
                {/* <FacebookLoginButton /> */}
            </LoginSocialFacebook>
            <LoginSocialFacebook
                appId="3168002450136139"
                onResolve={response => {
                    console.log(response)
                }}
                onReject={error => {
                    console.log(error);
                }}
            >
                <button><img src={facebook} alt="" /></button>
                <h1>Login</h1>
                {/* <FacebookLoginButton /> */}
            </LoginSocialFacebook>
        </div>
    )
}

export default ReactjsLogin