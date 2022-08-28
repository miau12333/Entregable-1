import { useState } from 'react';
import phrases from './phrases.json';
import '../App.css'

const Button = ({change, colors, colorsRandom}) => {

    return (
      <div className='button'>
        <button  className='btn' onClick={change}><i class="fa-solid fa-shuffle" style={{color: colors[colorsRandom]}}></i></button>
      </div> 
    );
};

export default Button;
