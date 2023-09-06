import React, { useState } from 'react';
import axios from 'axios';
import '../css/UpdatePlayer.css'
import { CircularProgress } from '@mui/material';

const UpdatePlayer = ({player ,setUpdate ,setOpt, setFlag })=>{
    const[firstName,setFirstName] = useState(player.firstName);
    const[lastName,setLastName] = useState(player.lastName);
    const[commonName,setCommonName] = useState(player.commonName);
    const[age,setAge] = useState(player.age)
    const[speed,setSpeed] = useState(player.speed);
    const[skills,setSkills]=useState(player.skills);
    const[agility,setAgility]=useState(player.agility);
    const[position,setPosition]=useState(player.position);
    const[imageOfplayer,setImageOfplayer]=useState(player.imageOfplayer);
    const[message,setMessage]=useState(null);
    const[errMessage,setErrMessage]=useState(null);
    const [state,setState]=useState(true);
    const [load,setLoad] = useState(false);

    let handleSubmit = (element)=>{
        element.preventDefault("");
        setLoad(true)
        axios.put(`https://fifa-backend-yh2u.onrender.com/players/updatePlayer/${player._id}`,{
            firstName : firstName,
            lastName : lastName,
            age : age,
            commonName : commonName,
            speed : speed,
            skills : skills,
            agility : agility,
            position : position,
            imageOfplayer : imageOfplayer
        }).then(()=>{
            setFirstName(player.firstName)
            setLastName(player.lastName)
            setCommonName(player.commonName)
            setAge(player.age)
            setSpeed(player.speed)
            setSkills(player.skills)
            setAgility(player.agility)
            setImageOfplayer(player.imageOfplayer)
            setPosition(player.position)
            setMessage("Player Updated Succesfully 😀")
            setLoad(false)
            setFlag(true)
            setUpdate(false)
            setOpt(false)
            }
        ).catch(err =>{
            setFirstName("")
            setLastName("")
            setCommonName("")
            setAge("")
            setSpeed("")
            setSkills("")
            setAgility("")
            setImageOfplayer("")
            setPosition("")
            setErrMessage("Error Updating the Player enter proper values😢"+ err.message)
            setLoad(false)
            setUpdate(false)
            setOpt(false)
        })
    }

    const handleChange1 =  (element)=>{
        setFirstName(element.target.value);
        setState(false);
    }
    const handleChange2 =  (element)=>{
        setLastName(element.target.value);
        setState(false);
    }

    const handleChange3 =  (element)=>{
        setCommonName(element.target.value);
        setState(false);
    }

    const handleChange4 =  (element)=>{
        setAge(element.target.value);
        setState(false);
    }

    const handleChange5 =  (element)=>{
        setSpeed(element.target.value);
        setState(false);
    }

    const handleChange6 =  (element)=>{
        setSkills(element.target.value);
        setState(false);
    }

    const handleChange7 =  (element)=>{
        setAgility(element.target.value);
        setState(false);
    }

    const handleChange8 =  (element)=>{
        setPosition(element.target.value);
        setState(false);
    }

    const handleChange9 =  (element)=>{
        setImageOfplayer(element.target.value);
        setState(false);
    }


    
    return(
        <form onSubmit={handleSubmit} className="form-update">
            <h2>Update Player</h2>
            {load ? <CircularProgress color='success'/> : message ? <p className='pos' >{message}</p>: errMessage ? <p className='neg' >{errMessage}</p> : null}
            <input placeholder={player.firstName} name='firstName' value={firstName} onChange={handleChange1} type="text" />
            <input placeholder={player.lastName} name='lastName'  value={lastName} onChange={handleChange2} type="text" />
            <input placeholder={player.commonName} name='commonName'  value={commonName} onChange={handleChange3} type="text" />
            <input placeholder={player.age} name='age'  value={age} onChange={handleChange4} type="number" />
            <input placeholder={player.speed}name='speed' value={speed} onChange={handleChange5}  type="number" />
            <input placeholder={player.skills} name='skills'  value={skills} onChange={handleChange6} type="number" />
            <input placeholder={player.agility} name='agility' value={agility} onChange={handleChange7}  type="number" />
            <select value={position} onChange={handleChange8} name='position'>
                <option>{player.position}</option>
                <option>LW</option>
                <option>ST</option>
                <option>CF</option>
                <option>RW</option>
                <option>CM</option>
                <option>CAM</option>
                <option>CDM</option>
                <option>LM</option>
                <option>RM</option>
                <option>LB</option>
                <option>RB</option>
                <option>CB</option>
                <option>GK</option>
            </select>
            <input placeholder={player.imageOfplayer}  name='imageOfplayer' value={imageOfplayer} onChange={handleChange9} type="text" />
            <input disabled={state} className='submit-button' type="submit" onClick={handleSubmit} placeholder="Add Player"/>
        </form>
    )
}


export default UpdatePlayer;
