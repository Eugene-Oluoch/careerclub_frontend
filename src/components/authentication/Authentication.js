/* eslint-disable react-hooks/rules-of-hooks */
//States 
import { useState } from 'react'

//Css
import './css/Authentication.css';

//Icons
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut"
import { AiOutlineUserAdd } from '@react-icons/all-files/ai/AiOutlineUserAdd'

//Modules
import axios from 'axios'
import { useFormik } from 'formik'
import { BeatLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import jwt from 'jwt-decode'

//Redux slices
import AuthSlice from '../../app/features/AuthSlice/AuthSlice';
import UserSlice from '../../app/features/UserSlice/UserSlice'

function Authentication({close,setClose}) {

    //Dispatch initialization
    let dispatch = useDispatch()


    //States
    let [code,setCode] = useState(false)
    let [change,setChange] = useState(false)
    let [loading,useLoading] = useState(false)

    //State functions
    let handleChangeToRegister = ()=>{
        setChange(false)
    } 

    let handleChangeToLogin = ()=>{
        setChange(true)
    } 

    //Api requests
    let registerRequest = (username,email,password)=>{
        useLoading(true)
        axios.post(`https://7d1e-196-201-214-228.eu.ngrok.io/users/create`,{
            username:username,
            email:email,
            password:password
        })
        .then(res=>{
            setChange(true)
            toast("Account created successfully.")
            useLoading(false)
        })
        .catch(err=>{
            useLoading(false)
            toast.error(err.response.data.message)
        })
    }

    let loginRequest = (email,password)=>{
        useLoading(true)
        axios.post(`https://7d1e-196-201-214-228.eu.ngrok.io/auth/login`,{
            email:email,
            password:password
        })
        .then(res=>{
            setCode(true)
            localStorage.setItem('otpToken', res.data.accessToken);
            toast("Code sent to your email")
            useLoading(false)
        })
        .catch(err=>{
            useLoading(false)
            toast.error(err.response.data.message)
            console.log(err)
        })
    }

    let userRequest = token =>{
        let userDetails = jwt(token)
        axios.get(`https://7d1e-196-201-214-228.eu.ngrok.io/users/username/${userDetails.sub}`)
        .then(res=>{
        dispatch(UserSlice.actions.addUser(res.data))
        useLoading(false)
        setClose(false)
        toast("Logged in successfully")            
        })
        .catch(err=>console.log(err))
    }

    let codeRequest = (code_verify)=>{
        useLoading(true) 
        axios({
            method: "post",
            url: `https://7d1e-196-201-214-228.eu.ngrok.io/code/verify`,
            data: {
                code:code_verify
            },
            headers: { 
                "Authorization" : `Bearer ${localStorage.getItem('otpToken')}`
            }})
        .then(res=>{
            dispatch(AuthSlice.actions.addToken(res.data))
            localStorage.removeItem('otpToken');
            localStorage.setItem('accessToken', res.data.accessToken);
            localStorage.setItem('refreshToken', res.data.refreshToken);
            userRequest(res.data.accessToken)
            alert(dispatch(store=>store.user.username))
        })
        .catch(err=>{
            useLoading(false)
            toast.error(err.response.data.message)
        })
    }



    //Module initialization
    let formikRegister = useFormik({
        initialValues:{
            username:'',
            email:'',
            password:'',
            passwordConfirm:''
        },
        validate : values =>{
            let errors = {}

            if(!values.username){
                errors.username = "Username is Required"
            }

            if (!values.email) {
                errors.email = 'Email is Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Password is Required';
            } 

            if (!values.passwordConfirm) {
                errors.passwordConfirm = 'Password Confirmation is Required';
            }else if(values.password !== values.passwordConfirm){
                errors.passwordConfirm = 'Password must match'
            }

            return errors
        },
        onSubmit: values =>{
            registerRequest(values.username,values.email,values.password)
        }
    })

    let formikLogin = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate : values =>{
            let errors = {}

            if (!values.email) {
                errors.email = 'Email is Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Password is Required';
            } 

            return errors
        },
        onSubmit: values =>{
            loginRequest(values.email,values.password)
        }
    })

    let formikCode = useFormik({
        initialValues:{
            code:''
        },
        validate : values =>{
            let errors = {}

            if (!values.code) {
                errors.code = 'Code is Required';
            } 

            return errors
        },
        onSubmit: values =>{
            codeRequest(values.code)
        }
    })

    


    return (
    <section className="authentication">
        <article className="authentication-overlay" onClick={setClose}>.</article>
        <article className="authentication-container">
            <div className="authentication-container-header">
                <div className={change?"authentication-container-header-signin":"authentication-container-header-signin current"}  onClick={handleChangeToLogin}>
                    <h1><FiLogOut />{code?"Code":"Sign in"}</h1>
                </div>
                <div className={change?"authentication-container-header-register current":"authentication-container-header-register"} onClick={handleChangeToRegister}>
                    <h1><AiOutlineUserAdd />New account</h1>
                </div>
            </div>
            <div className="authentication-container-forms">
                {change?
                code?
                <form className="authentication-container-forms-signin" onSubmit={formikCode.handleSubmit}>
                    <input type="text" name="code" id="code" placeholder="Code Verification *" {...formikCode.getFieldProps('code')} className={formikCode.errors.code && formikCode.touched.code ?"input-error":""}/>
                    <button type="submit" disabled={loading?true:false} style={loading?{cursor:"progress"}:{cursor:"pointer"}}>{loading?<BeatLoader loading size={10} color="white" />:"Verify"}</button>
                </form> 
                :
                <form className="authentication-container-forms-signin" onSubmit={formikLogin.handleSubmit}>
                    <input type="email" name="signin-email" id="signin-email" placeholder="Email Address *" {...formikLogin.getFieldProps('email')} className={formikLogin.errors.email && formikLogin.touched.email ?"input-error":""}/>
                    <input type="password" name="signin-password" id="signin-password" placeholder="Password *" {...formikLogin.getFieldProps('password')} className={formikLogin.errors.password && formikLogin.touched.password ?"input-error":""}/>
                    <button type="submit" disabled={loading?true:false} style={loading?{cursor:"progress"}:{cursor:"pointer"}}>{loading?<BeatLoader loading size={10} color="white" />:"Login"}</button>
                </form> 
                :
                <form className="authentication-container-forms-register" onSubmit={formikRegister.handleSubmit}>
                    <input type="text" name="register-username" id="register-username" placeholder="Username *" {...formikRegister.getFieldProps('username')} className={formikRegister.errors.username && formikRegister.touched.username ?"input-error":""}/>
                    <input type="email" name="register-email" id="register-email" placeholder="Email Address *" {...formikRegister.getFieldProps('email')} className={formikRegister.errors.email && formikRegister.touched.email ?"input-error":""}/>
                    <div className="authentication-container-forms-register-password">
                        <input type="password" name="register-password" id="register-password" placeholder="Password *" {...formikRegister.getFieldProps('password')} className={formikRegister.errors.password && formikRegister.touched.password ?"password input-error":"password"}/>
                        <input type="password" name="register-password-confirm" id="register-password-confirm" placeholder="Password Confirm *" {...formikRegister.getFieldProps('passwordConfirm')} className={formikRegister.errors.passwordConfirm && formikRegister.touched.passwordConfirm ?"password input-error":"password"}/>
                    </div>
                    <button type="submit" disabled={loading?true:false} style={loading?{cursor:"progress"}:{cursor:"pointer"}}>{loading?<BeatLoader loading size={10} color="white" />:"Create account"}</button>
                </form>
                }
            </div>

        </article>
    </section>
    )
}

export default Authentication;