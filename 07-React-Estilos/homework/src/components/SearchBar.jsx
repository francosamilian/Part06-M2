import React from 'react';
import bar from "./SearchBar.module.css";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={bar.container}>
      <input className={bar.input} type="text" placeholder='Ingrese ciudad...'/>
      <button className={bar.btnAgregar} onClick={() => props.onSearch("Agregando ciudad...")}>Agregar</button>
    </div>)
};