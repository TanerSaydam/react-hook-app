import { useEffect, useState } from "react"

function CustomHook(){
    const [todos, setTodos] = useState([]);
   
    const AddTodo = () => {
        let model = {
            userId:1,
            id: 0,
            title: "Deneme",
            completed: false
        };

        fetch("https://jsonplaceholder.typicode.com/todos",{
            method: "POST",
            body: JSON.stringify(model),
            headers: {"authentication":"Token"}
        }).then(res=> res.json())
        .then(data=> setTodos(data=> [model,"asdasd", ...data]));
    }


    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res=> res.json())
            .then(data => setTodos(data));
    },[]);

    return(
        <>
        <h1>Custom Hook</h1>
        <button onClick={AddTodo}>Add</button>
        <ul>
            {todos.map((val,i)=> <li key={i}>{val.title}</li>)}
        </ul>
        </>
    )
}

export default CustomHook