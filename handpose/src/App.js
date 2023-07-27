/**
 * TODO: 
 * 1. Install dependencies = tensorflow.js, hand pose model, react webcam - DONE
 * 2. Import dependencies - DONE
 * 3. Setup webcam and canvas - DONE
 * 4. Define references to those - DONE
 * 5. Load handpose - DONE
 * 6. Detect function - DONE
 * 7. Drawing utilities from tenserflow
 * 8. Draw functions
 */

import React, {useRef} from 'react';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam'; //to use desktop webcam
import './App.css';
import { drawHand } from './utilities';

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runHandpose = async () => {
    const net = await handpose.load()
    // console.log('Handpose model loaded');
    
    //Loop and detect hands 
    setInterval(()=>{
      detect(net)
    }, 100)

  };

  const detect = async (net) => {
    // Check if data is available
    if(typeof webcamRef.current !== 'undefined' &&
    webcamRef.current !== null &&
    webcamRef.current.video.readyState === 4) //To make sure data is received
    {
      //Get video properties
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      //Set video height + width
      video.width = videoWidth;
      video.height = videoHeight;

      //Set canvas height + width 
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      //Make detections
      const hand = await net.estimateHands(video);
      console.log(hand);

      //Draw mesh
      const ctx = canvasRef.current.getContext('2d');
      drawHand(hand, ctx);
    }
  };

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
 * net = neural network (ie. handpose model) 
 * 
 */