import { useState } from 'react';
import Button from './componets/Button';
import QuoteBox from './componets/QuoteBox';
import phrases from './componets/phrases.json';
import './App.css'


const colors=["#B1F68A","#36B8E6","#00CDE3","#68EDAD","#8A6EBD","#9E5099","#A5306D","#98AFBA","#F9F871"];


function App() {

  const random = Math.floor(Math.random() * phrases.length);
  const [index, setIndex] = useState(random);
    
  const change= () =>{
    setIndex(Math.floor(Math.random() * phrases.length)) 
  }
  const colorsRandom= Math.floor(Math.random() * colors.length);
  document.body.style= `background: ${colors[colorsRandom]}`
  return (
    <div className="App card">
    <QuoteBox index={index} colors={colors} colorsRandom={colorsRandom}/>
    <Button change={change} colors={colors} colorsRandom={colorsRandom}/>
    </div>

  )
}

export default App
