import React, { useState } from 'react';
import './Style.css';

function App() {

  const [counter, setCounter] = useState(0);

  const add = () => {

    setCounter(counter + 1);
    console.log("Counter Value :",counter);
  };

  const minus = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log("Counter Value :", counter);
    } else {
      
      alert('Counter is already at zero!');
    }
  };

 

  return (
    <>
      <h1>Welcome Jod</h1>
      <h2>Counter Value = {counter}</h2>
      <br />
      <button  onClick={add}>Add {counter}</button>
      <br />
      <br />
      <button  onClick={minus}>Remove {counter}</button>
    </>
  );
}

export default App;
