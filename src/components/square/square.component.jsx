import React from 'react';
import './square.css';

/*function Square({ value, onClick }) { teste1
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
*/
/*
function Square({ value, onClick,winner }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
*/
function Square({ value, onClick, winner }) {
  let classNames = 'square';

  // Adiciona a classe CSS correspondente com base no valor da prop 'value'
  if (value === 'X') {
    classNames += ' x';
  } else if (value === 'O') {
    classNames += ' o';
  }

  if (winner) {
    classNames += ` winner${winner.toLowerCase()}`;
  }

  return (
    <button className={classNames} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;







/*


function Square({ value, onClick, winner }) {
  if(value='X'){
    classNames += ' x';
  }else if (value === 'O') {
    classNames += ' o';
  }

  return (
    <button className={`square ${winner ? `winner${winner.toLowerCase()}` : ''}`} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;






*/