import React, {  useState } from 'react'
import SocialButton from './SocialButton';
import './Home.css'
import facebook from '../../Assets/image/social-icons/facebook.svg'
import google from '../../Assets/image/social-icons/google.svg'
import LogoutButton from './LogoutButton';

function Home() {
    const [name, setName] = useState('')
    const [state, setState] = useState({
        logged: false,
        user: {},
        currentProvider: ''
    })
    console.log(state);
  

    function handleSocialLogin(user) {
        
        setName(user._profile.name)
        setState({
            logged: true,
            currentProvider: user._provider,
            user
        })
    };

    // if (user) {
    //       localStorage.setItem('customer', JSON.stringify(user._profile)) 
    // }
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${employee.token}`
    //     }

    function logout() {

        setState({
            logged: false,
            currentProvider: '',
            user: {}
        })
        setName('')
       

    }


    return (
        <div className='social'>
            <p>Hi, {name}</p>
            <p>Sign in instantly with your Google or Facebook account.</p>
            <div className="social_login">
                <SocialButton
                    provider="facebook"
                    appId="3168002450136139"
                    onLoginSuccess={handleSocialLogin}
                    key={'facebook'}
                    onInternetFailure={() => {
                        return true;
                    }}

                >
                    <button><img src={facebook} alt="" /></button>

                </SocialButton>

                <SocialButton
                    provider="google"
                    appId="3168002450136139"
                    onLoginSuccess={handleSocialLogin}
                >
                    <button><img src={google} alt="" /></button>

                </SocialButton>
            </div>
            <LogoutButton
               logout={logout}
            />

        </div>
    )
}

export default Home