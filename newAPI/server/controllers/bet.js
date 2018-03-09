const bet = require('../models/bet');

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
                let data=newBet.toJSON();
                return data;
            })
    }
}
