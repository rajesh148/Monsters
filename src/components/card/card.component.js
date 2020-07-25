import React from 'react';
import './card.style.css';

export const Card = (props) => (
    <div className = 'card-container'>
        <img
            src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
            alt="monster"
        />
        {/* src={`https://robohash.org/${props.monster.id}?size=180x180&set=set2`} */}
        {/* <img width="180" height="180" alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`}></img> */}
        <h2> {props.monster.name} </h2>
        <p>{props.monster.email}</p>
    </div>
)