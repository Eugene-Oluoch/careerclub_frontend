//States 
import { useState } from 'react'

//Css
import './css/Authentication.css';

//Icons
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut"
import { AiOutlineUserAdd } from '@react-icons/all-files/ai/AiOutlineUserAdd'

function Authentication({close,setClose}) {

    //States
    let [change,setChange] = useState(false)

    //State functions
    let handleChangeToRegister = ()=>{
        setChange(false)
    } 

    let handleChangeToLogin = ()=>{
        setChange(true)
    } 

    return (
    <section className="authentication">
        <article className="authentication-overlay" onClick={setClose}>.</article>
        <article className="authentication-container">
            <div className="authentication-container-header">
                <div className={change?"authentication-container-header-signin":"authentication-container-header-signin current"}  onClick={handleChangeToLogin}>
                    <h1><FiLogOut />Sign in</h1>
                </div>
                <div className={change?"authentication-container-header-register current":"authentication-container-header-register"} onClick={handleChangeToRegister}>
                    <h1><AiOutlineUserAdd />New account</h1>
                </div>
            </div>
            <div className="authentication-container-forms">
                {change?
                <form className="authentication-container-forms-signin">
                    <input type="email" name="signin-email" id="signin-email" placeholder="Email Address *" />
                    <input type="password" name="signin-password" id="signin-password" placeholder="Password *" />
                    <button type="submit">Log in</button>
                </form> 
                :
                <form className="authentication-container-forms-register">
                    <input type="text" name="register-username" id="register-username" placeholder="Username *" />
                    <input type="email" name="register-email" id="register-email" placeholder="Email Address *" />
                    <div className="authentication-container-forms-register-password">
                        <input type="password" name="register-password" id="register-password" placeholder="Password *" />
                        <input type="password" name="register-password-confirm" id="register-password-confirm" placeholder="Password Confirm *" />
                    </div>
                    <button type="submit">Create Account</button>
                </form>
                }
            </div>

        </article>
    </section>
    )
}

export default Authentication;