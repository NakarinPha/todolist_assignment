import React from 'react';
import '../App.css';

function Card(props){
    const {name} = props;
    return(
        <div className="card">
            <p>{name}</p>
        </div>
    )    
}
 export default Card;
