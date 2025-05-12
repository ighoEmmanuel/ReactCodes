import React,{useState} from 'react';
import CustomButton  from "../../../reuseable/CustomButton.jsx";
import style from "./Login.module.css"

const Login = () => {

    const loginDetails = {
        email:"",
        password:""
    }

    const [loginData , setLoginData] = useState(loginDetails);

    const handelChange  = (e) => {
        const {name,value} = e.target;
        setLoginData((pre) =>({...pre, [name]: value}));
    }
    return (
        <>
            <div onSubmit={sumbitHandler} className={style.form}>
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
            </div>
        </>

    )
}

export default Login;