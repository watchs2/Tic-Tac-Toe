import React, { useState } from 'react';
import './assets/styles/App.css';

import Menu from './components/menu/menu';
import Multiplayer from './components/multiplayer/multiplayer';
import Singlerplayer from './components/Singleplayer/Singleplayer';



function App() {
  const [menuVisible, setMenuVisible] = useState(true);
  const [gameStart,setGame] =useState(false);
  const menageGame = () => {
    if(gameStart){
      setGame(false);
      //winGame()
    }else{

      setGame(true);
    }
  }
  const [selectedMode, setSelectedMode] = useState("");
  const menageMode = (event) => {
    const { value } = event.currentTarget;
    setSelectedMode(value);
    setMenuVisible(false);
    menageGame();
  };
 
  return (
    <div className="App">
      <div id="container">
        <main className='main'>
          {menuVisible &&(<Menu
            menageMode={menageMode}
            menageGame={menageGame}

          />)}
          {selectedMode === "Multyplayer" ? (
  <Multiplayer />
) : selectedMode === "Singlerplayer" ? (
  <Singlerplayer />
) : (
  null
)}

               

          
        </main>
      </div>
    

      
    </div>
  );
}

export default App;