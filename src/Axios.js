import axios from 'axios';
import {useEffect, useState} from 'react';
import toastr from './path/toastr.min'

class TodoModel{
    userId = 1;
    id = 0;
    title = "";
    completed = false;
}

function Axios(){
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        let model = new TodoModel();
        model.title = todo;

        axios.post("https://jsonplaceholder.typicode.com/todos",model).then(res=> {
            setTodos(data => [model,...data]);
            setTodo("");
            toastr.success('Başarılı');
            // alert("Kayıt işlemi başarılı!");
            // toastr.success("Kayıt işlemi başarılı!");
        });
    }

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res=> setTodos(res.data));
    }, [])

    return(
        <>
        <h1>Axios Npm Package</h1>
        <form onSubmit={handleSubmit}>
            Todo
            <input 
            name="todo" 
            id="todo" 
            required 
            minLength="3"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            />

            <hr/>
            <button type='submit'>Kaydet</button>
        </form>
        <ul>
            {todos.slice(0,10).map((val, i) => <li key={i}>{val.title}</li>)}
        </ul>
        </>
    )
}

export default Axios;