import React, { useState } from 'react'

interface IProps {}
interface ISTate{
    name:string;
    age:number;
    title:string;
}

let Employee:React.FC<IProps> = () => {
    let [state, setState]=useState<ISTate>({
        name:'Rajan',
        age:25,
        title:'alo'
    });


    return (
        <React.Fragment>
            <h3>Employee Component</h3>
            <ul>
                <li>{state.name}</li>
                <li>{state.age}</li>
                <li>{state.title}</li>
            </ul>
        </React.Fragment>
    )
}

export default Employee