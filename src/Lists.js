
import React, {useEffect,useState} from "react";
import axios from 'axios';
import './index.css';
import {Link} from 'react-router-dom';
export function Lists(){
    const [eachUser, setNewUser] = useState([]);
    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers=async()=>{

        const res=await axios.get(`https://randomuser.me/api/?results=10`);
        console.log(res);
        setNewUser(res.data.results);
    }
    console.log(eachUser);
    return (
        <div className="lists">
            <div>
                <h2>Lists of users</h2>
                {
                    eachUser && 
                    eachUser.map(user=>(
                        <div>
                            <ul>
                                <li style={{textDecoration:"none"}} key={user.login.uuid}>
                                    <Link to={{
                                        pathname:`/details/${user.login.uuid}`,
                                        state:{user:user},
                                    }}>
                                        {user.name.first} {user.name.last}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Lists;