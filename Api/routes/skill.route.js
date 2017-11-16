var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
app.get('/skills', function (req, res) {
    res.send('All the skills: ' + req);
});
app.get('/skill/:skillId', function (req, res) {
    res.send('User to load is: ' + req.params.skillId);
});
app.use(function (req, res) {
    res.send(404, 'Not Found');
});
app.listen(PORT, function () {
    console.log('Serveur sur port : ', PORT);
});
//# sourceMappingURL=skill.route.js.map