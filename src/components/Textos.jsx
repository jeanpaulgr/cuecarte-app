import React, { Component } from 'react'
import Color from './Color'
import { fnColoresTextos } from '../constantes';

const Textos = ({eventoChange, eventoClickColor, texto, tipo}) => {
  
    // console.log(fnColoresPoleras());
    let coloresTextos = fnColoresTextos();

    return (
 
        <div className='div'>
{/* TEXTO ADELANTE */}
          <label>Texto {tipo}</label>
          <textarea id={'txt'+tipo}
                    className='textarea' 
                    rows="3" 
                    cols="30"
                    value={texto}
                    onChange={() => eventoChange()}
                    ></textarea>
          <label>Color de Texto {tipo}</label>
          <div className='contenedor-color'>  
          {coloresTextos.map((x) => 
            <Color  key={x.id}
                    elColor={x.code}
                    manejarClick={() => eventoClickColor(x)}
                    ></Color>
            )
          }
          </div>
      
        </div>
    )
}

export default Textos