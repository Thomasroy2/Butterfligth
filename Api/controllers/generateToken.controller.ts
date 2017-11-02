// genere un token basé sur le moment de création de la demande 
// / ! \ attention, si deux demandes sont effectué simultanément le token risque 
// d'etre le meme, si c'est un probleme il faudra revoir cette classe 
class generateToken {

    date : number;
    token : string;
   
    constructor() {
        this.date = new Date().getTime();
        this.token = String(this.date);
    }

    getToken() {

        return this.token;
    }
}

