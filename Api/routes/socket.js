var express = require('express');
var router = express.Router();

router.get('/test', function(req, res) {
    req.app.io.emit('an event sent to all connected clients');


    res.json({result: "update sent over IO"});
});

router.get('/room/:id', function(req, res){
    console.log(req.params.id);

    res.json({result: "update sent over IO"});
});

module.exports = router;
