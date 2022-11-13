import React, {useState} from 'react'
import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';
import Test from './components/Test';

function App() {
  // const [boxen, setBoxen] = useState([])
  // const paintNewColor = (newColor) => {
  //   setBoxen ([...boxen, newColor])
  // }

  return (
    <div className="App">
      <BoxForm />
      {/* <BoxForm onNewColor = {paintNewColor}/> */}
      {/* <BoxDisplay backgroundColor = {boxen}/> */}
      {/* <Test /> */}
    </div>
  );
}

export default App;
