import React  from 'react'
// import logo from '../img/adelante-rojo.fw.png';
import './Polera.css'
import Textos from './Textos';
import Color from './Color';
import { useState } from 'react';
import { fnColoresPoleras } from '../constantes'
import { FaUndoAlt } from "react-icons/fa";

const Polera = () => {

    console.log(fnColoresPoleras());
    let coloresPoleras = fnColoresPoleras();

    const [colorPoleraActual, setColorPoleraActual] = useState("negro");
    const [colorTextoActualAdelante, setColorTextoActualAdelante] = useState("white");
    const [colorTextoActualAtras, setColorTextoActualAtras] = useState("white");
    const [textoAdelante, setTextoAdelante] = useState("SOY NORMAL HASTA QUE PONEN CUECA");
    const [textoAtras, setTextoAtras] = useState("");
    const [ladoPolera, setLadoPolera] = useState('adelante');
    

    const fnChangeTextoAdelante = () => {
      let texto = document.getElementById('txtAdelante')
      console.log('fnChangeTextoAdelante', texto.value)
      setTextoAdelante(texto.value);
      setLadoPolera('adelante')
    }
    const fnChangeTextoAtras = () => {
      let texto = document.getElementById('txtAtras')
      console.log('fnChangeTextoAtras', texto.value)
      setTextoAtras(texto.value);
      setLadoPolera('atras')
    }
    const fnClickPolera = (colorSeleccionado) => {
        console.log('manejarClick')
        setColorPoleraActual(colorSeleccionado.name);
    }        
    const fnClickColorTextoAdelante = (colorSeleccionado) => {
      console.log('fnClickColorTextoAdelante',colorSeleccionado.name)
      setColorTextoActualAdelante(colorSeleccionado.code);
      setLadoPolera('adelante')
    }      
    const fnClickColorTextoAtras = (colorSeleccionado) => {
      console.log('fnClickColorTextoAtras',colorSeleccionado.name)
      setColorTextoActualAtras(colorSeleccionado.code);
      setLadoPolera('atras')
    }   
    const fnCambiarLado = () => {
      console.log('fnCambiarLado')
      setLadoPolera(ladoPolera == 'adelante' ? 'atras' : 'adelante')
    }
    return (
      <div>
        <h1>CUECARTE</h1>
        {/* <h2>aqui ira la polera</h2> */}
       <section className='section'>
            <div className='div-polera'>
              <div className='contenedor-polera'>
{/* IMAGEN POLERA */}
                <img src={require(`../img/${ladoPolera}-${colorPoleraActual}.fw.png`)} 
                     className="img-polera" 
                     alt="logo" />
{/* TEXTO ADELANTE */}
                <div  className='texto-adelante' style={{display: ladoPolera == 'atras' ? 'none' : 'inline-block', color:colorTextoActualAdelante}} >{textoAdelante} </div>
{/* TEXTO ATRAS */}
                <div className='texto-atras' style={{display: ladoPolera == 'adelante' ? 'none' : 'inline-block' , color:colorTextoActualAtras}} >{textoAtras} </div>              
{/* CAMBIO DE LADO POLERA */}
                  <button className='btn-cambio'
                          onClick={fnCambiarLado}
                  ><FaUndoAlt></FaUndoAlt></button>  
                            
              </div>            
{/* COLORES POLERAS */}
                <div className='div-abajo'>
                    <h2>Color de Polera</h2>
                    <div className='contenedor-color'>  
                    {coloresPoleras.map((x) => 
                      <Color key={x.id}
                             elColor={x.code}
                             manejarClick={() => fnClickPolera(x)}></Color>                            
                      )
                    }
                    </div>
                </div>
          <input className='compartir' type="button" value="Compartir"/>
            </div>
{/* PANEL DERECHA */}
    <div className='div-botones'>   
      <h2>Creador de Textos</h2>   
        <Textos eventoChange={fnChangeTextoAdelante}
                eventoClickColor={fnClickColorTextoAdelante}
                textoAdelante={textoAdelante}
                texto={textoAdelante}
                tipo='Adelante'></Textos>
        <Textos eventoChange={fnChangeTextoAtras}
                eventoClickColor={fnClickColorTextoAtras}
                texto={textoAtras}
                tipo='Atras'></Textos>

    </div>
       </section>
       
      </div>
    )
}

export default Polera