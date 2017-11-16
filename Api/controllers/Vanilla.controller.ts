class Vannilla {
    
        param1 : number
        param2 : string
       
        constructor() {
            this.param1 = new Date().getTime()
            this.param2 = String(this.param1)
        }
    
        getparam2() {
    
            return this.param2
        }
    }