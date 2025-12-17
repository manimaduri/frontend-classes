import React, { useState } from 'react'

const NamesList = () => {
    const [names,setNames] = useState<string[]>([]);

    const addName = ()=>{
        const newName = prompt("Enter a name");
        if(newName){
            // setNames([...names, newName])
            setNames((x) => [...x, newName])
        }; 
    }
  return (
    <div>
        <button onClick={addName}>Add Name</button>
        <ul>
            {
                names.map((n, index) =>(
                    <li key={index}>{n}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default NamesList