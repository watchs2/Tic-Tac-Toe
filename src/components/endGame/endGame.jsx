import React, { useState } from 'react';
import './endGame.css'; 

function EndGame({ winner }) {
  return (
    <div className="end-game">
      <h2>Parabéns!</h2>
      <p className="winner-text">
        {winner} venceste o jogo!
      </p>
    </div>
  );
}

export default EndGame;