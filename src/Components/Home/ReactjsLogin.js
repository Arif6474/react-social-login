import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login"
import facebook from '../../Assets/image/social-icons/facebook.svg'
import google from '../../Assets/image/social-icons/google.svg'
import { useDispatch, useSelector } from "react-redux";
import { LoginWithGoogle, registerWithGoogle, socialLogin, socialRegister } from "../../Redux/Features/Auth/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ReactjsLogin() {

    const navigate = useNavigate()

    const dispatch = useDispatch();
    const { employee, message } = useSelector(state => state.auth)

    //facebook
    useEffect(() => {
        if ((employee?.fbId || employee?.gmailId) && !employee.mobile) {
            navigate('/addNumber')
        }
    }, [employee, navigate])

    useEffect(() => {
        if ((employee?.fbId || employee?.gmailId) && employee.mobile) {
            navigate('/checkout')
        }
    }, [employee, navigate])


    //facebook
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

    async function handleFacebookLogin(response) {
        try {
            const userData = {
                name: `${response.data.first_name}${response.data.last_name ? response.data.last_name : ''}`,
                fbId: response.data.userID
            }

            dispatch(socialLogin(userData));

        } catch (error) {
            console.log(error);
        }
    }



    async function handleGoogleRegister(response) {
        try {
            const userData = {
                name: response.data.name,
                gmailId: response.data.sub
            }

            dispatch(registerWithGoogle(userData));

        } catch (error) {
            console.log(error);
        }
    }

    async function handleGoogleLogin(response) {
        try {
            const userData = {
                name: response.data.name,
                gmailId: response.data.sub
            }

            dispatch(LoginWithGoogle(userData));

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="social">
            <h1 className="error_message">{message}</h1>
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
                    handleFacebookLogin(response)

                }}
                onReject={error => {
                    console.log(error);
                }}
            >
                <button><img src={facebook} alt="" /></button>
                <h1>Login</h1>
                {/* <FacebookLoginButton /> */}
            </LoginSocialFacebook>

            <LoginSocialGoogle
                client_id="712609763230-c5p5n2d574fi49er7r87h8iucnvu5gvf.apps.googleusercontent.com"
                onResolve={response => {

                    handleGoogleRegister(response)

                }}
                onReject={error => {
                    console.log(error);
                }}
            >
                <button><img src={google} alt="" /></button>
                <h1>Register</h1>
                {/* <FacebookLoginButton /> */}
            </LoginSocialGoogle>

            <LoginSocialGoogle
                client_id="712609763230-c5p5n2d574fi49er7r87h8iucnvu5gvf.apps.googleusercontent.com"
                onResolve={response => {

                    handleGoogleLogin(response)

                }}
                onReject={error => {
                    console.log(error);
                }}
            >
                <button><img src={google} alt="" /></button>
                <h1>Login</h1>
                {/* <FacebookLoginButton /> */}
            </LoginSocialGoogle>


        </div>
    )
}

export default ReactjsLogin