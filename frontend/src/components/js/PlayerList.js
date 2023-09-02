// import axios from 'axios';
import React, { useState } from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';
import '@mui/material';
import { Grid } from '@mui/material';
import Loader from './Loader';

const PlayerList = ()=>{
    const [Players,setPlayers] = useState([])
    const [loader,setLoader] = useState(true);

    let PlayersCall = ()=>{
        axios.get("https://fifa-backend-yh2u.onrender.com/players"
        ).then((res)=>{
            setPlayers(res.data);
            setLoader(false);
            console.log(res)
        },[]).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <div className='pageBG'>
            {loader && 
                  <Loader/>
            }
            {PlayersCall()}
            {!loader &&  
            <Grid container spacing={12}>
                {Players.map(player =>
                    <Grid className='playerItem' item xs={3}>
                        <PlayerCard player={player}/>
                    </Grid>
                )}
            </Grid>
        }
        </div>
    )
}


export default PlayerList;
