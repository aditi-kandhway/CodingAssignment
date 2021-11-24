
import React from "react";
import {useLocation} from "react-router-dom";
import './index.css';
export function Details(){
    let params=useLocation();
    console.log(params.state);
    console.log(params);
    // const {name,location,email,dob,picture}=params.state.user;
    // return (
    //     <div className="details">
    //         <div>
    //             <div>
    //                 <h1>{name.first} {name.last}</h1>
    //                 <img src={picture.large} alt={name.first}/>
    //                 <h3>{dob.age} / {location.country}</h3>
    //                 <h3>{email}</h3>
    //             </div>
    //         </div>
    //     </div>
    // )
    return <h1>details page</h1>
}

export default Details;