import React from 'react';
import s from "./Card.module.css";

export default function Card(props) {
  // acá va tu código
  return (
    <div className={s.container}>
      <button className={s.btnClose} onClick={props.onClose}>X</button>
      <h3 className={s.nomCiudad}>{props.name}</h3>
      <div className={s.grid}>
        <div>
          <p>Min</p>
          <p>{props.min}</p>
        </div>
        <div>
          <p>Max</p>
          <p>{props.max}</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
      </div>
    </div>
    )
};