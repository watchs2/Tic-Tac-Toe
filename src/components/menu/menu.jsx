import React, { useState } from 'react';

import './menu.css';

function Menu(props){
    const { selectedMode, menageMode } = props;
    const {setGame,gameStart}=props;

    return(
<div className='Menu'>
    <section>
        <h2>Menu</h2>
    </section>
    <section>
         <button className='MenuButton' onClick={menageMode} value="Multyplayer" >Multiplayer</button>
        <button className='MenuButton' onClick={menageMode} value="Singlerplayer">Singleplayer</button>

        
        
    </section>
   
    

</div>
    );

}
export default Menu;