
import React from "react";
import {useLocation} from "react-router-dom";
import './index.css';
export function Details(){
    let params=useLocation();
    const {name,location,email,dob,picture}=params.state.user;
    return (
        <div className="details">
            <div>
                <div class="userDetails">
                    <h1>{name.first} {name.last}</h1>
                    <img src={picture.large} alt={name.first}/>
                    <h3>{dob.age} / {location.country}</h3>
                    <h3>{email}</h3>
                </div>
            </div>
        </div>
    )
}

export default Details;