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
    const [flag ,setFlag] = useState(true);

    let PlayersCall = ()=>{
        axios.get("https://fifa-backend-yh2u.onrender.com/players"
        ).then((res)=>{
            setLoader(true);
            setPlayers(res.data);
            setLoader(false);
            setFlag(false);
        },[]).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <div className='pageBG'>
            {loader && 
                  <Loader/>
            }
            {flag && PlayersCall()}
            {!loader &&  
            <Grid container spacing={12}>
                {Players.map(player =>
                    <Grid className='playerItem' item xs={3}>
                        <PlayerCard player={player} setFlag={setFlag}/>
                    </Grid>
                )}
            </Grid>
        }
        </div>
    )
}


export default PlayerList;
