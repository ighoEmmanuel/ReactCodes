import React,{useState} from 'react';
import CustomButton  from "../../../reuseable/CustomButton.jsx";
import style from "./Login.module.css"
import { useLoginMutation} from "../../../service/userAuthApi.jsx";
import {Link} from "react-router";

const Login = () => {

    const loginDetails = {
        email:"",
        password:""
    }

    const [loginData , setLoginData] = useState(loginDetails);

    const [login, {isLoading, isError}] = useLoginMutation(loginDetails);

    const handelChange  = (e) => {
        const {name,value} = e.target;
        setLoginData((pre) =>({...pre, [name]: value}));
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await login(loginData).unwrap();
            console.log(response)
        }catch(error){
            console.log(error)
        }
    }
    return (
        <>
            <div onSubmit={submitHandler} className={style.form}>
                <div id={style.form}>
                    <form action="">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                            name="email"
                            onChange={handelChange}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <input type="password"
                            name="password"
                            onChange={handelChange}
                            required
                        />

                        <CustomButton  type="sumbit" text={"Login"} />
                        <Link to={"/signup"}>Signup</Link>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Login;