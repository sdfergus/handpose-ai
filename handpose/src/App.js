/**
 * TODO: 
 * 1. Install dependencies = tensorflow.js, hand pose model, react webcam - DONE
 * 2. Import dependencies - DONE
 * 3. Setup webcam and canvas - DONE
 * 4. Define references to those - DONE
 * 5. Load handpose - DONE
 * 6. Detect function 
 * 7. Drawing utilities from tenserflow
 * 8. Draw functions
 */

import React, {useRef} from 'react';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam'; //to use desktop webcam
import './App.css';

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runHandpose = async () => {
    const net = await handpose.load()
    console.log('Handpose model loaded');
  }

  runHandpose();

  return (
    <div className="App">
      <header className="App-header">
        <Webcam 
          ref={webcamRef}
          style={{
            position:'absolute', 
            marginLeft: 'auto',
            marginRight: 'auto', 
            left: 0, 
            right: 0, 
            textAlign:'center',
            zindex:9,
            width:640,
            height:480
          }}
        />
        <canvas 
          ref={canvasRef}
          style={{
            position:'absolute', 
            marginLeft: 'auto',
            marginRight: 'auto', 
            left: 0, 
            right: 0, 
            textAlign:'center',
            zindex:9,
            width:640,
            height:480
          }}
        />
      </header>
    </div>
  );
}

export default App;

/**
 * Notes: 
 * 
 * useRef = allows to have references to the elements within the webpage or DOM 
 * 
 */