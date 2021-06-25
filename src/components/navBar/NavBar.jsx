import React, {useState} from "react";
import './NavBar.css';

function NavBar({handleCombo, handleSubmit}) {
  const [codigo, setCodigo] = useState()


  return (
    <div class="navBarContainer">
      <form onSubmit={e => handleSubmit(e, codigo)}>
        <label htmlFor=""></label> Codigo pais
        <input type="number" onChange={e => setCodigo(e.target.value)}/>
        <button type="submit" >Buscar</button>
      </form>
      <label htmlFor="">Regiones</label>
      <select name="" id="" onChange={handleCombo}>
          <option value="" disabled>SELECCIONE UNA REGION</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europa</option>
          <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}


export default NavBar;
