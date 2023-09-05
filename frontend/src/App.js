import './App.css';
import React, { useState } from "react";
import PlayerList from './components/js/PlayerList';
import NewPlayer from './components/js/NewPlayer';




function App() {
  const [eleState,setEleState] = useState(false);
  const [trigger,setTrigger] = useState(false);
  const [modal,setModal] = useState(false);
  const [players,setPlayers] = useState(false);
  const Toggle = ()=>{
    setEleState(!eleState);
  }
  const toggleForm = ()=>{
    setTrigger(!trigger);
  }
  const popUpForm = ()=>{
    setModal(!modal);
  }
  const popPlayers = ()=>{
    setPlayers(!players);
  }
  return (
    <div className='main'>
          <button className='players-btn' onMouseEnter={Toggle} onMouseLeave={Toggle} onClick={popPlayers}>
          <img className='AddPlayerButton' src='https://cdn2.downdetector.com/static/uploads/logo/EA-Logo.png' alt='Button-Bg'/>
          </button>
          <button className='add-player-btn' onMouseEnter={toggleForm} onMouseLeave={toggleForm} onClick={popUpForm}>
          <img className='AddPlayerButton' src='https://cdn2.downdetector.com/static/uploads/logo/EA-Logo.png' alt='Button-Bg'/>
          </button>
          {eleState && <div className='ButtonMessage-players'>
                      <h1>PLAYERS</h1>
                   </div>}
          {trigger && <div className='ButtonMessage-player' >
                        <h1>CREATE PLAYER</h1>
                      </div>}
          {modal && 
            <div className='modal'>
              <div className='overlay'>
                <div className='model-content'>
                <NewPlayer setModal={setModal}/>
                <button className='close-modal' onClick={popUpForm}>X</button>
                </div>
              </div>
            </div>
          }
        
          {players && 
              <div className='player-modal'>
                <div className='overlay-players'>
                 {
                  PlayerList == null &&
                        <div>Loading....</div>
                  }
                  <button className='close-modal-players' onClick={popPlayers}>Close X</button>
                  <PlayerList/>
                </div> 
              </div>
          }
    </div>
  )
}

export default App;
