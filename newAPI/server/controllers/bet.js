const bet = require('../models/bet');
const room = require('../models/room');

module.exports = {
    newBet(bet){
        return bet
            .create({
                gambler:bet.gambler,
                fighter1:bet.fighter1,
                fighter2:!bet.fighter1,
                amount:bet.amount,
                room:bet.room
            })
            .then(newBet=>{
                if(!newBet){
                    return res.status(404).send({
                        message:'Error while creating'
                    });
                }
                room
                    .findById(bet.room)
                    .then(foundRoom => {
                        if(newBet.fighter1)
                        {
                            foundRoom.update({
                                cashpoolfighter1:cashpoolfighter1+bet.amount
                            })
                        }
                        else{
                            foundRoom.update({
                                cashpoolfighter2:cashpoolfighter2+bet.amount
                            })
                        }
                    })
                let data=newBet.toJSON();
                return data;
            })
            .then(data=>{
                return data;
            })
    }
}
