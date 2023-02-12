import React, { useState } from 'react';
import axios from 'axios';
import '../css/NewPlayer.css'

const NewPlayer = ()=>{
    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const[commonName,setCommonName] = useState("");
    const[age,setAge] = useState("");
    const[speed,setSpeed] = useState("");
    const[skills,setSkills]=useState("");
    const[agility,setAgility]=useState("");
    const[position,setPosition]=useState("");
    const[imageOfplayer,setImageOfplayer]=useState("");
    const[message,setMessage]=useState(null);
    const[errMessage,setErrMessage]=useState(null);
    
    let handleSubmit = (element)=>{
        element.preventDefault("");
        axios.post("https://fifa-backend-yh2u.onrender.com/players/addPlayer",{
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
            setFirstName("")
            setLastName("")
            setCommonName("")
            setAge("")
            setSpeed("")
            setSkills("")
            setAgility("")
            setImageOfplayer("")
            setPosition("")
            setMessage("Player Created Succesfully 😀")
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
            setErrMessage("Error Creating the Player 😢")
        })
    }

    const handleChange1 =  (element)=>{
        setFirstName(element.target.value);
    }
    const handleChange2 =  (element)=>{
        setLastName(element.target.value);
    }

    const handleChange3 =  (element)=>{
        setCommonName(element.target.value);
    }

    const handleChange4 =  (element)=>{
        setAge(element.target.value);
    }

    const handleChange5 =  (element)=>{
        setSpeed(element.target.value);
    }

    const handleChange6 =  (element)=>{
        setSkills(element.target.value);
    }

    const handleChange7 =  (element)=>{
        setAgility(element.target.value);
    }

    const handleChange8 =  (element)=>{
        setPosition(element.target.value);
    }

    const handleChange9 =  (element)=>{
        setImageOfplayer(element.target.value);
    }


    
    return(
        <form onSubmit={handleSubmit} >
            {message ? <p className='pos' >{message}</p>: errMessage ? <p className='neg' >{errMessage}</p> : null}
            <input placeholder='Player First Name' name='firstName' value={firstName} onChange={handleChange1} type="text" />
            <input placeholder='Player Last Name' name='lastName'  value={lastName} onChange={handleChange2} type="text" />
            <input placeholder='Player Common Name' name='commonName'  value={commonName} onChange={handleChange3} type="text" />
            <input placeholder='Player Age' name='age'  value={age} onChange={handleChange4} type="number" />
            <input placeholder='Player Attribute1/100' name='speed' value={speed} onChange={handleChange5}  type="number" />
            <input placeholder='Player Attribute2/100' name='skills'  value={skills} onChange={handleChange6} type="number" />
            <input placeholder='Player Attribut3/100' name='agility' value={agility} onChange={handleChange7}  type="number" />
            <select value={position} onChange={handleChange8} name='position'>
                <option>Player Position</option>
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
            <input placeholder='Player Image'  name='imageOfplayer' value={imageOfplayer} onChange={handleChange9} type="text" />
            <input className='submit-button' type="submit" onClick={handleSubmit} placeholder="Add Player"/>
        </form>
    )
}


export default NewPlayer;
