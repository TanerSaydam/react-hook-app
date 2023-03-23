const { useState, createContext, useContext } = require("react");

const UserContext = createContext();

function UseContext(){
    const [user, setUser] = useState("Taner Saydam");   

    return(
        <>
        <h1>Merhaba {user}</h1>
        <UserContext.Provider value={user}>
            <Component1 user={user}/>
        </UserContext.Provider>
        </>
    )
}

function Component1(){
    return(
        <>
        <h1>Merhaba Component 1</h1>
        <Component2/>
        </>
    )
}

function Component2(){
    return(
        <>
        <h1>Merhaba Component 2</h1>
        <Component3/>
        </>
    )
}

function Component3(){
    return(
        <>
        <h1>Merhaba Component 3</h1>
        <Component4/>
        </>
    )
}

function Component4(){
    const user = useContext(UserContext);
    return(
        <>
        <h1>Merhaba Component 4</h1>
        <h2>Sana da Merhaba {user}!</h2>
        </>
    )
}

export default UseContext;