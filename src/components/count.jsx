
import styles from "./count.module.css";
import { useState } from "react";

const Count = ()=>{
    const [count, setCount] = useState(0)
    const IncrementCount =()=>{
        setCount(count + 1);
    }
    
    return(
        <div className={styles.container}>
            <p className={styles.paraCount}>Count: {count} <button onClick={IncrementCount}>+</button></p>
            <div className={styles.staticData}>
                <h1 className={styles.heading}>Expensive Calculation</h1>
                <span className={styles.figure}>100000000</span>
            </div>
        </div>
    )
}

export default Count;
