let PlayerRouter = require('express').Router();
const playerController = require('../Controller/PlayerController');

PlayerRouter.get('/',playerController.getAllPlayers);
PlayerRouter.post('/addPlayer',playerController.addNewPlayer);
PlayerRouter.put('/updatePlayer/:id',playerController.updatePlayer);
PlayerRouter.delete('/deletePlayer/:id',playerController.deletePlayer);
module.exports=PlayerRouter;