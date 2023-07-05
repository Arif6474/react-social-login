import React from 'react'

function LogoutButton({  logout }) {
    return (
        <div>
            <button className='logut_btn' onClick={logout}>Logout</button>
        </div>
    )
}

export default LogoutButton