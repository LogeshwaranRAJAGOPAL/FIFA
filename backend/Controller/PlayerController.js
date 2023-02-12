const Player = require('../Models/PlayerModel')

//To Fetch All Players
exports.getAllPlayers = (req,res)=>
{
    require('log-timestamp');console.info(`...Requset for Get All...`);
    require('log-timestamp');console.info("Fetching All Players.....")
    Player.find((err,player)=>{
        if(err){res.status(500).json("Error fetching the Players");require('log-timestamp');console.error("Error fetching the Players :"+err)};
        if(player.length == 0){res.status(400).json("No player found");require('log-timestamp');console.warn("Found 0 players check your DB details or Create a player")}
        else{
            res.status(200).json(player);
            require('log-timestamp');console.info(`Fetched ${player.length} players`)
        }
    })    
}

//To Add a New Player
exports.addNewPlayer = (req,res)=>{
    require('log-timestamp');console.info(`...Requset for Insert...`);
    if(req.body === null)
    {
        res.status(400).json("!!!Player Body should not be empty!!!");
        require('log-timestamp');
        console.info("Player Body Null");
    }
    else{
        let player = new Player(req.body);
        require('log-timestamp');
        console.info("Creating a new player....")
        player.overAll = ((player.speed+player.skills+player.agility)/3).toPrecision(2);
        player.save().then(player =>{
            require('log-timestamp');
            console.info(`Added ${player.commonName}`);
            res.status(200).json(`Added ${player.commonName} Successfully`);
        }).catch(err =>{
            require('log-timestamp');
            console.error(`Error Adding Player: \n`+ err);
            res.status(500).json("Error Creating a New Player");     
        })
    }
}

//To Update A Player by given Id
exports.updatePlayer = async (req,res)=>{
    require('log-timestamp');console.info(`...Requset for Update...`);
    if(req.params.id == null)
    {
        res.status(400).json("!!!Id required to update!!!")
    }
    Player.findById(req.params.id,(err,player)=>{
        if(err)
        {
            require('log-timestamp');console.error(`Error finding a Player by ID: ${req.params.id} to update :\n`+ err); 
            res.status(500).json("Error Updating the Player :"+ err.message);
        }
        if(!player){require('log-timestamp');console.warn(`No Player found for ID: ${req.params.id} to update`); res.status(400).json("Player not found for the given ID")}
        else{
            require('log-timestamp');console.info(`Player found for ID: ${req.params.id} starting to update`);
            player.firstName = req.body.firstName;
            player.lastName = req.body.lastName;
            player.commonName = req.body.commonName;
            player.age = req.body.age;
            player.speed = req.body.speed;
            player.skills = req.body.skills;
            player.agility = req.body.agility;
            player.position = req.body.position;
            player.imageOfplayer = req.body.imageOfplayer;
            player.overAll = ((player.speed+player.skills+player.agility)/3).toPrecision(2);
            player.save().then(player =>{
            require('log-timestamp');
            console.info(`Updated ${player.commonName}`);
            res.status(200).json(`Updated ${player.commonName} Successfully`);
            }).catch(err =>{
                require('log-timestamp');
                console.error(`Error Updating the Player`+ err);
                res.status(500).json("Error Updating the Player :" + err.message);     
            })
        }
    })
}

//To delete player by ID 
exports.deletePlayer = async (req,res) =>{
    require('log-timestamp');console.info(`...Requset for Delete...`);
    if(req.params.id == null)
    {
        require('log-timestamp');
        console.warn("No id Provided")
        return res.status(400).json("!!!Id required to delete!!!")
    }
    else{
        Player.findById(req.params.id,(err,player)=>{
        if(err){
            require('log-timestamp');console.error(`Error finding a Player by ID: ${req.params.id} to delete: ` + err); 
            return res.status(500).json("Error Deleting the Player :"+err.message)}
        if(!player){
            require('log-timestamp');
            console.log(`No Player found for ID: ${req.params.id} to delete`); 
            return res.status(400).json("Player not found for the given ID")}
        else{
            require('log-timestamp');console.info(`Player found for ID: ${req.params.id} starting to delete`);
            player.delete().then(player =>{
            require('log-timestamp');
            console.info(`Deleted ${player.commonName}`);
            return res.status(200).json(`Deleted ${player.commonName} Successfully`);
            }).catch(err =>{
                require('log-timestamp');
                console.error(`Error Deleting the Player`+ err);
                return res.status(500).json("Error Deleting the Player");     
            })
        }
    })
    }
    
}