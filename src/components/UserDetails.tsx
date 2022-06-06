import { userInfo } from 'os';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { IUser } from '../models/IUser';
import { UserService } from '../services/UserService';

interface URLParams {
    id: string
}

interface IState {
    loading: boolean,
    user: IUser;
    errorMessage: string
}
interface IProps { }

let UserDetails: React.FC<IProps> = () => {

    let { id } = useParams<URLParams | any>()

    let [state, setState] = useState<IState>({
        loading: false,
        user: {} as IUser,
        errorMessage: ''

    })

    useEffect(() => {
        if (id) {
            setState({ ...state, loading: true })
            UserService.getUser(id).then((response) => {
                setState({
                    ...state,
                    loading: false,
                    user: response.data
                })
            }).catch((error) => {
                setState({
                    ...state,
                    loading: false,
                    errorMessage: error.message
                })
            });
        }

    }, [id])

    let {loading, user, errorMessage} = state

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success fw-bold">User Details</p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet,con</p>
                    </div>
                </div>
                {

                    Object.keys(user).length > 0 &&
                    <div className="row">
                        <div className="col">
                            <ul>
                                <li className="list-group-item">
                                    Name : <span className="fw-bold">{user.name}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
                
                <div className="row">
                    <div className="col">
                        <Link to={'/'} className="tn btn-success mt-3">Back</Link>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default UserDetails