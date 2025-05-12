import React,{useState} from 'react'
import styles from "./SignUp.module.css"
import Button from "../../../reuseable/CustomButton.jsx"
import { useSignUpMutation} from "../../../service/userAuthApi.jsx";
import {Link} from "react-router";


const SignUp = () => {

    const userDetails = {
        userName: "",
        email: "",
        password: ""
    };

    const [userData, setUserData] = useState(userDetails);

    const [signUp,{isLoading, isError}] = useSignUpMutation();




    const handelInput = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({
            ...prev, [name]: value.trim()
        }));
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try{
            const response = await signUp(userData).unwrap();
            // console.log(response.message)
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }

    // console.log(userData);

    return (
        <>
            <div onSubmit={submitHandler}  className={styles.signUp}>
                <div id={styles.form}>
                    <form action="">
                        <label htmlFor="userName">UserName</label>
                        <input
                            type="text"
                            name="userName"
                            onChange={handelInput}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={handelInput}
                            required/>

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handelInput}
                            required/>
                        {/*<Button text={"Register"} />*/}
                        <button  type="submit">submit</button>

                        <Link to={"/login"}>Login</Link>
                        </form>
                </div>
            </div>

        </>
    )
}

export default SignUp