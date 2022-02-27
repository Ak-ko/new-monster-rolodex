import React from 'react';
import './card.styles.scss';

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id * 100}?set=set2&size=200x200`} alt="monster" />
        <h2 style={{color : "yellow"}}>{props.monster.name}</h2>
        <p style={{color : "lightgreen"}}>{props.monster.email}</p>
    </div>
);