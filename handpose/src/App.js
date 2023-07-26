/**
 * TODO: 
 * 1. Install dependencies = tensorflow.js, hand pose model, react webcam - DONE
 * 2. Import dependencies
 * 3. Setup webcam and canvas
 * 4. Define references to those
 * 5. Load handpose
 * 6. Detect function 
 * 7. Drawing utilities from tenserflow
 * 8. Draw functions
 */

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;