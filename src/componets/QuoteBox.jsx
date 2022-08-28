import { useState } from 'react';
import phrases from './phrases.json';
import '../App.css'

const QuoteBox = ({index, colors,colorsRandom}) => {
    return (
    <div style={{color: colors[colorsRandom] }}>
        <div  className='fix' >
        <span className='size'><i class="fa-solid fa-quote-left"></i>
        </span>
        <h3>{phrases[index].quote}</h3>
        </div>
        <h4>{phrases[index].author}</h4>
         
    </div>
    );
}
export default QuoteBox;