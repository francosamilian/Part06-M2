import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <h3>{props.name}</h3>
      <p>MIN <p>{props.min}</p></p>
      <p>MAX <p>{props.max}</p></p>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
    </div>
    )
};