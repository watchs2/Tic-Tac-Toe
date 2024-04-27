import React, { useState, useEffect } from 'react';
import './board.css';
import Square from '../square/square.component';



function Board({ squares, onSquareClick, boardIndex, boardWinners }) {
  const handleClick = (i) => {
    if (squares[i] || boardWinners[boardIndex]) {
      return;
    }

    onSquareClick(i);
  };
  

  return (
    <div className='board'>
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => handleClick(index)}
          winner={boardWinners[boardIndex]}
        />
      ))}
    </div>
  );
}
export default Board;
