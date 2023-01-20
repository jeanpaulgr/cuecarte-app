import React from 'react'

const Color = ({elColor, manejarClick}) => {

    return (
      <div>
        <button className='color' type='button' style={{backgroundColor: elColor}} 
                onClick={manejarClick}></button>
      </div>
    );
}

// const seleccionarColor = (color) => {
//     // cambiar el estado
//     console.log('color', color)
// }
export default Color;