import React, { useState } from 'react'
import { IUserSOld } from '../models/IUserSOld'
import { UserServices } from '../services/UserServices'

interface IState {
    users: IUserSOld[]
}
interface IProps { }

let UserListOld: React.FC<IProps> = () => {
    let [state, setState] = useState<IState>({
        users: UserServices.getAllUsers()
    })



    return (
        <React.Fragment>
            <h3>UserList</h3>
            <pre>{JSON.stringify(state.users)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3">User List</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-striped text-center table-hover shadow-hg">
                            <thead className='bg-dark text-white'>
                                <th>SNO</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Designation</th>
                                <th>Company</th>
                            </thead>
                            <tbody>
                                {
                                    state.users.length > 0 && 
                                    state.users.map(user => {
                                        return (
                                            <tr key={user.sno}>
                                                <td>{user.sno}</td>
                                                <td>{user.name}</td>
                                                <td>{user.age}</td>
                                                <td>{user.designation}</td>
                                                <td>{user.company}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>

            </div >
        </React.Fragment >
    )
}

export default UserListOld