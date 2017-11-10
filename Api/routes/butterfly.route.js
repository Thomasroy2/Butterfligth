/**
 * Created by Aimeric on 02/11/2017.
 */
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
app.get('/butterflys', function (req, res) {
    res.send('All the butterflys: ' + req);
});
app.get('/butterfly/:butterflyId', function (req, res) {
    res.send('User to load is: ' + req.params.butterflyId);
});
app.use(function (req, res) {
    res.send(404, 'Not Found');
});
app.listen(PORT, function () {
    console.log('Serveur sur port : ', PORT);
});
//# sourceMappingURL=butterfly.route.js.map