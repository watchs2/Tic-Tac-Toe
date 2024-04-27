import React, { useState, useEffect } from 'react';
import Board from '../board/board.component.jsx';
import GameInfo from '../gameinfo/gameInfo.jsx';
import './bigboard.css';
import EndGame from '../endGame/endGame.jsx';



function BigBoard({ playerNames }) {
  const [boards, setBoards] = useState(Array(9).fill(Array(9).fill(null)));
  const [player1next, setPlayer1next] = useState(true);
  const [boardWinners, setBoardWinners] = useState(Array(9).fill(null));
  const [endGame, setEnd] = useState(false);
  const currentPlayer = player1next ? playerNames.player1Name : playerNames.player2Name;
  const [player1Time, setPlayer1Time] = useState(200);
  const [player2Time, setPlayer2Time] = useState(200);
  const [winner, setWinner] = useState(null);
 
  

  
  function handleSquareClick(boardIndex, squareIndex) {
    if (boardWinners[boardIndex] || boards[boardIndex][squareIndex] ||majorWinner(boardWinners)!==null  ) {
      return;
    }
 
    const nextBoards = [...boards];
    const nextBoard = [...nextBoards[boardIndex]];
    const currentPlayerSymbol = player1next ? 'X' : 'O';
    nextBoard[squareIndex] = currentPlayerSymbol;
    nextBoards[boardIndex] = nextBoard;
  
    setBoards(nextBoards);
    setPlayer1next(!player1next);
  
    const boardWinner = calculateWinner(nextBoard);
    if (boardWinner) {
      const nextBoardWinners = [...boardWinners];
      nextBoardWinners[boardIndex] = boardWinner;
      setBoardWinners(nextBoardWinners);
      majorWinner(nextBoardWinners);
      
    }
  }

  function calculateWinner(squares) {
    // Linhas, colunas e diagonais que podem resultar em uma vitória
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      
        return squares[a];
        
      }
    }
    if (DrawTest(squares)) {
   
      return '-';
    }

   

    return null;
  }

  function DrawTest(squares) {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        return false;
      }
    }
    return true;
  }
  function DrawTest2(boardWinners) {
    for (let i = 0; i < boardWinners.length; i++) {
      if (boardWinners[i] === null) {
        return false;
      }
    }
    return true;
  }
  

  function majorWinner(boardWinners) {
    
    if(player1Time===0){
      setEnd(true);
      setWinner(playerNames.player2Name);
        return 'O';
        
    }else if(player2Time===0){
      setEnd(true);
      setWinner(playerNames.player1Name);
        return 'X';
    }
    
    
    if (DrawTest2(boardWinners)) {//EMPATE
   
      let count1 = 0; 
  let count2 = 0; 
      for(let i=0;i<boardWinners.length;i++){
        if(boardWinners[i]=='X'){
          count1++;
        }else if(boardWinners[i]=='O'){
          count2++;
        }
      }
   
      if(count1>count2){
       
        setEnd(true);
        setWinner(playerNames.player1Name);
        return 'X';
      }else if(count2>count1){

        setEnd(true);
        setWinner(playerNames.player2Name);
        return 'O';
      }else if(count1===count2){

        if(player1Time>=player2Time){
  
          setEnd(true);
          setWinner(playerNames.player1Name);
          return 'X';
        }else
       
        setWinner(playerNames.player2Name);
        setEnd(true);
        return 'O';

      }
       
    };
   
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (boardWinners[a] && boardWinners[a] === boardWinners[b] && boardWinners[a] === boardWinners[c] && boardWinners[a] !== '-') {
        
        if(boardWinners[a]==='X'){
          setWinner(playerNames.player1Name);
        }else{
          setWinner(playerNames.player2Name);
        }
        setEnd(true);
     
        return boardWinners[a];
      }
    }

    return null;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (player1next) {
        setPlayer1Time((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval); 
            setPlayer1Time(0);
            
            return 0;
          }
          return prevTime - 1;
        });
      } else {
        setPlayer2Time((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval); // Para o timer quando o tempo chegar a 0
            setPlayer2Time(0);
            return 0;
          }
          return prevTime - 1;
        });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [player1next]);


  return (
    <div className="Game">
   


      
        
    <div className='big-board'>
  {endGame ? (
    <EndGame winner={winner} />
  ) : (
    <>
      <GameInfo
        currentPlayer={currentPlayer}
        playerNames={playerNames}
        player1Time={player1Time}
        player2Time={player2Time}
       
      />
      {boards.map((board, index) => (
        <Board
          key={index}
          squares={board}
          onSquareClick={(squareIndex) => handleSquareClick(index, squareIndex)}
          boardIndex={index}
          boardWinners={boardWinners}
          currentPlayerSymbol={player1next ? 'X' : 'O'}
        />
      ))}
    </>
  )}
</div>
    </div>
  );
}

export default BigBoard;