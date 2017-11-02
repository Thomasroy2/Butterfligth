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

