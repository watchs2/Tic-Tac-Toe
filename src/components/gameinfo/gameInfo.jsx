import React from 'react';
import '../bigboard/bigboard.css';

function GameInfo({ currentPlayer, playerNames, player1Time, player2Time }) {
  return (
    <section className="game-info">
      <h2 className="info-title">Informações do Jogo</h2>
      <div className="player-info">
        <div className="player-turn">
          <span className="turn-label">Próximo Jogador: {currentPlayer}</span>
        </div>
        <div className="player-turn">
          <span>
            {playerNames.player1Name} - <span className="red-x">X</span> - Tempo Restante: {player1Time} segundos
          </span>
        </div>
        <div className="player-turn">
          <span>
            {playerNames.player2Name} - <span className="blue-o">O</span> - Tempo Restante: {player2Time} segundos
          </span>
        </div>
      </div>
    </section>
  );
}

export default GameInfo;
