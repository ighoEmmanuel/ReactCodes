import React from 'react'
import { useSelector, useDispatch} from "react-redux";
import { decrement, increment,reset} from "./counterSlice.jsx";

const Counter = () => {

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <div>
                <h1>{count}</h1>
                <div>
                    <button onClick={() => dispatch(decrement())}>-</button>
                    <button onClick={() => dispatch(increment())}>+</button>
                    <button onClick={() => dispatch(reset())}>reset</button>
                </div>
            </div>
        </>
    )
}

export default Counter;