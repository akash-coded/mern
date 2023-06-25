import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import FirstChildComponent from './FirstChildComponent';
import SecondChildComponentWithProp from './SecondChildComponentWithProp';
import ThirdChildComponentWithState from './ThirdChildComponentWithState';
import FourthChildComponentWithStateAndSideEffect from './FourthChildComponentWithStateAndSideEffect';
import FifthChildComponentWithUseEffect from './FifthChildComponentWithUseEffect';


function App() {
  const [name, setName] = useState("Akash Das");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome {name}!</h1>
        <p>
          Our first edit in React
        </p>
      </header>

      <FirstChildComponent />
      <hr></hr>
      <SecondChildComponentWithProp myProp="This is my prop data" />
      <hr></hr>
      <ThirdChildComponentWithState name={name} />
      <hr></hr>
      <FourthChildComponentWithStateAndSideEffect name={name} setName={setName} />
      <hr></hr>
      <FifthChildComponentWithUseEffect name={name} />

      <footer>
        Created by Akash
      </footer>
    </div>
  );
}

export default App;
