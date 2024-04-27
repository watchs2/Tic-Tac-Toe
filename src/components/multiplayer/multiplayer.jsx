import React, { useState } from 'react';
import BigBoard from '../bigboard/bigboard.component';
import './multiplayer.css';


function Multiplayer(){
    const [namesGenerated, setNamesGenerated] = useState(false);

    const [player1Name, setPlayer1Name] = useState('');
    const [player2Name, setPlayer2Name] = useState('');
    const handlePlayer1NameChange = (event) => {
        setPlayer1Name(event.target.value);
      };
      const handlePlayer2NameChange = (event) => {
        setPlayer2Name(event.target.value);
      };  

      const randomizerNames = () => {
        if (player1Name.trim() === '' || player2Name.trim() === '' || player1Name.trim() === player2Name.trim()) {
          // Se algum dos nomes estiver vazio, não gere os nomes aleatórios
          setNamesGenerated(false);
        } else {
          const numeroAleatorio = Math.floor(Math.random() * 2) + 1;
          if (numeroAleatorio === 1) {
            setNamesGenerated(true);
          } else {
            const temp = player1Name;
            setPlayer1Name(player2Name);
            setPlayer2Name(temp);
            setNamesGenerated(true);
          }
        }
      };

     
    return(
        <div >
             {namesGenerated ? (
           <BigBoard playerNames={{ player1Name, player2Name }} />
        ) : (
            <div className='MultiplayerMenu'>
            <section className='SectionMulti'>
                <h2>Nome do Jogador 1:</h2>
                <input className='input' type="text" value={player1Name} onChange={handlePlayer1NameChange} />
                <h2>Nome do Jogador 2:</h2>
                <input className='input' type="text" value={player2Name} onChange={handlePlayer2NameChange} />
                
  
            </section>
            <section>
                <button className='jogar' onClick={randomizerNames}>Jogar</button>
                </section>
            </div>
                )}
       
        </div>
          
    );

}
export default Multiplayer;