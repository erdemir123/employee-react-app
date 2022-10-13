import { useState } from 'react';
import './App.css';
import Buttons from './conponents/Buttons';
import Cards from './conponents/Cards';
import Header from './conponents/Header';


function App() {
  const [count,SetCount]=useState(0)
  const click =(e)=>{
    if(e.target.value==="next"){
      if(count>=0 && count<11){
        SetCount(count+5)
      }
      else if(count>=15){
        SetCount(0)
      }
    }
    else{
      if(count>=0){
        SetCount(count-5)
      }
      if(count<=0){
        SetCount(15)
      }
      console.log(count)
    }
  }
  return (
    <div className="App">
      <p>EMPLOYEE LİST</p>
      <Header count={count}/>
      <div className="card-container">
      <Cards  count={count}/> 
      </div>
      
      <Buttons func={click}/>
    </div>
  );
}

export default App;
