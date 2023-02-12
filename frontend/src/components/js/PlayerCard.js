import React ,{useState} from "react";
import "../css/PlayerCard.css"
import UpdatePlayer from "./UpdatePlayer";
import axios from "axios";

const PlayerCard = (props)=>{
    const {player} = props;
    const [updatePlayer,setUpdate] = useState(false)
    const [opt,setOpt] = useState(false)
    const [response,setResponse] = useState(null)

    const toggle =(s)=> {
        setOpt(!opt)
    }
    const toggleUpdate =()=>{
        setUpdate(!updatePlayer)
    }
    const Handledelete = ()=>{
            axios.delete(`https://fifa-backend-yh2u.onrender.com/players/deletePlayer/${player._id}`
            ).then((res)=>{
                setResponse("Player Removed Successfully")
                console.log(res)
            },[]).catch((err)=>{
                setResponse("Error Removing the Player")
                console.log(err)
            })
    }

    return(
        <div>
        <div onClick={toggle} className="card">
            <img  className="background-img" src="https://pbs.twimg.com/media/EjQO_CCWAAA6YC7.png" alt="card-img"></img>
            <div  className="position">{player.overAll}  <br/> {player.position}</div>
            <div  className="Name" >{player.commonName}</div>
            <img  className="playerImg" src={player.imageOfplayer} alt="playerimage"/>
            <div  className="stats">
            {player.position === "GK" && <div>
                                            JUM : {player.speed}
                                            <br/>
                                            DIV : {player.skills}
                                            <br/>
                                            REF  : {player.agility}
                                        </div>}
            {player.position === "CB" && <div>
                                            DEF : {player.speed}
                                            <br/>
                                            AGG : {player.skills}
                                            <br/>
                                            STR  : {player.agility}
                                        </div>}
            {player.position === "LB" && <div>
                                            DEF : {player.speed}
                                            <br/>
                                            AGG : {player.skills}
                                            <br/>
                                            STR  : {player.agility}
                                        </div>}
            {player.position === "RB" && <div>
                                            DEF : {player.speed}
                                            <br/>
                                            AGG : {player.skills}
                                            <br/>
                                            STR  : {player.agility}
                                        </div>}   
            {player.position === "CF" && <div>
                                            PAC : {player.speed}
                                            <br/>
                                            SKL : {player.skills}
                                            <br/>
                                            DRB  : {player.agility}
                                        </div>}
            {player.position === "ST" && <div>
                                            PAC : {player.speed}
                                            <br/>
                                            SKL : {player.skills}
                                            <br/>
                                            DRB  : {player.agility}
                                        </div>}
            {player.position === "RW" && <div>
                                            PAC : {player.speed}
                                            <br/>
                                            SKL : {player.skills}
                                            <br/>
                                            DRB  : {player.agility}
                                        </div>}
            {player.position === "LW" && <div>
                                            PAC : {player.speed}
                                            <br/>
                                            SKL : {player.skills}
                                            <br/>
                                            DRB  : {player.agility}
                                        </div>}                                                       
            {player.position === "CM" && <div>
                                            PAS :  {player.speed}
                                            <br/>
                                            VIS : {player.skills}
                                            <br/>
                                            AGl: {player.agility}
                                        </div>}
            {player.position === "LM" && <div>
                                            PAS :  {player.speed}
                                            <br/>
                                            VIS : {player.skills}
                                            <br/>
                                            AGl: {player.agility}
                                        </div>}
            {player.position === "RM" && <div>
                                            PAS :  {player.speed}
                                            <br/>
                                            VIS : {player.skills}
                                            <br/>
                                            AGl: {player.agility}
                                        </div>}
            {player.position === "CAM" && <div>
                                            PAS :  {player.speed}
                                            <br/>
                                            VIS : {player.skills}
                                            <br/>
                                            AGl: {player.agility}
                                        </div>}
            {player.position === "CDM" && <div>
                                            PAS :  {player.speed}
                                            <br/>
                                            VIS : {player.skills}
                                            <br/>
                                            AGl: {player.agility}
                                        </div>}
            </div>
        </div>
            {opt && <div className="optModal">
                        <div className="optOverlay">   
                          <div className="opt-modal-content">
                          
                            <button className='update-butn' onClick={toggleUpdate}>Update Player</button>
                            <button className='delete-butn' onClick={() => {
                                if(window.confirm("Are you sure you want to remove this player?")){Handledelete()};
                            }
                            }>
                                Delete Player
                            </button>
                            <button className='close-modal-opt' onClick={toggle}> Cancel</button>
                            {response !== null && <p>{response}</p>}
                          </div>
                        </div>         
                    </div>}
            {updatePlayer && <div className="updateModal">
                               <div className="updateOverlay">
                  
                                   <button className='close-modal-update' onClick={toggleUpdate}>X</button>
                                   <UpdatePlayer player={player} />
                          
                               </div>
                             </div>}                 
        </div>
    )
}

export default PlayerCard;
