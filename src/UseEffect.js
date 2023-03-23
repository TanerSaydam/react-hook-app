import {useEffect, useState} from 'react'

function UseEffect(){
    const [count, setCount] = useState(0);
    const [calc, setCalc] = useState(0);

    useEffect(()=> {
    let timer = setTimeout(()=> {
        setCount(c => c+1)
       },1000);

       return () => clearTimeout(timer);
    },[calc]);

    return(
        <>
        <h1>Use Effect</h1>
        <h2>{count}</h2>
        <button onClick={()=> setCalc(c=> c + 1)}>+</button>
        </>
    )
}

export default UseEffect;