import {expect, test} from "vitest";
import {Provider} from "react-redux";
import {store} from "../store/store.jsx"
import {render} from "@testing-library/react";

test("add two numbers", () =>{
    expect(1+1).toBe(2);
})

test("that the store provider works",()=>{
    return render(<Provider store={store}></Provider>)
})