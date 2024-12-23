
import styles from "./tasks.module.css";
import { useState } from "react";

const Tasks =()=>{

    const [skill,setSkill] = useState("");
    const [skills ,setSkills] = useState([]);

const AddSkill =()=>{
    if(skill.trim() && skill.length>5){
        setSkills([...skills,skill]);
        setSkill("");
    }
};

    return(
        <div className={styles.container}>

            <div className={styles.inputSection}>
                <h1>React.memo</h1>

                <input 
                className={styles.input}
                type="text" 
                name="skill"
                value={skill}
                placeholder="Enter your Skill"
                onChange={(e)=>setSkill(e.target.value)}
                />
                
                <button className={styles.inputbtn} onClick={AddSkill}>Add Skill</button>
            </div>

            <div className={styles.outputSection}>
                <ul className={styles.outputList}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>React</li>
                    {
                        skills.map((skill,index)=>
                            <li className={styles.outputItems} key={index}>{skill}</li>
                        )
                    }
                </ul>

            </div>

        </div>
    )
}

export default Tasks;
