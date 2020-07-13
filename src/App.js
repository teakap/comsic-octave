// import React from 'react';
// import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from "react";
import "./App.css";
import { AudioPlayerProvider } from "react-use-audio-player";
import AudioPlayer from './AudioPlayer'

const App = () => {
  return (
    <AudioPlayerProvider>
      <AudioPlayer file="asdf.mp3" />
    </AudioPlayerProvider>
  );
};
export default App;
