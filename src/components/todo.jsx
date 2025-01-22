import styles from "./todo.module.css";
import { useState } from "react";


const Todo =()=>{
    const [todos,setTodo] = useState([]);
    const AddTodo = ()=>{
        setTodo([...todos,"New Todo"]);
    };

    return(       
        <>
        <div>
        <div className={styles.title}>
                <h1>React.useMemo</h1>
                <h2>My todos</h2>
            </div>

            <div className={styles.displayMessage}>
                {todos.map((todo,index)=>(
                    <div className={styles.output} key={index}>{todo}</div>
                ))}
            </div>

            <div>
                <button onClick={AddTodo}>Add Todo</button>
            </div>
        </div>
            
        </>
    )
}
export default Todo;
