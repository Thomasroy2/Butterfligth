// genere un token basé sur le moment de création de la demande 
// / ! \ attention, si deux demandes sont effectué simultanément le token risque 
// d'etre le meme, si c'est un probleme il faudra revoir cette classe 
var generateToken = (function () {
    function generateToken() {
        this.date = new Date().getTime();
        this.token = String(this.date);
    }
    generateToken.prototype.getToken = function () {
        return this.token;
    };
    return generateToken;
}());
//# sourceMappingURL=generateToken.controller.js.map