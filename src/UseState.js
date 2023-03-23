import { useState } from "react"

function UseState(){
    const [color, setColor] = useState("red");

    return(
        <>
        <h1>UseState Hook</h1>
        <h2>{color}</h2>
        <button
        type="button"
        onClick={() => setColor("blue")}>
            Blue
        </button>
        <button
        type="button"
        onClick={() => setColor("pink")}>
            Pink
        </button>
        </>
    )
}

export default UseState;