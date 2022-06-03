import React, { useState } from 'react'

interface IState {
    message:string;

}
interface IProps { }

let Greetings: React.FC<IProps> = () => {
    let [state, setState]=useState<IState>({
        message:'Hello'
    })

    let changeM = (greet:string ):void => {
        setState({
            message:greet
        })
    }
 
    return (
        <React.Fragment>
            <h3>Greetings</h3>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <p>{state.message}</p>
                                <button onClick={()=> changeM('Good Morning')}>Good Morning</button>
                                <button onClick={()=> changeM('Good Afternoon')}>Good Afternoon</button>
                                <button onClick={()=> changeM('Good Evening')}>Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Greetings