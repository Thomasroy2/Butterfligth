import  { checkDataBase }  from "./checkDataBase.controller"
/*
 coder le check des id max
 */
class generateButterfly {
    
        idButterfly : number 
        skill1      : number
        skill2      : number
        skill3      : number
        idmin       : number 
        db          : checkDataBase
        
       
        constructor() {
            this.db = new checkDataBase()
            this.idButterfly = null
            this.skill1 = null
            this.skill2 = null
            this.skill3 = null
            this.idmin = 1      
        }
        
        // renvois un id aléatoire existant en base 
        private SelectButterFly(idmax : number, ) {
            //rendom nombre
            this.idButterfly = Math.floor(Math.random()*(idmax-this.idmin)+this.idmin)
            //si id existe pas retry random id
            while (this.db.checkIdDB(this.idButterfly, "Butterfly") == false){
            this.idButterfly = Math.floor(Math.random()*(idmax-this.idmin)+this.idmin)
            }
            return this.idButterfly                          
        }

        // renvois un id aléatoire existant en base
        private SelectSkill(idmax :number) : number {
            let skill : number
            skill =  Math.floor(Math.random()*(idmax-this.idmin)+this.idmin)
            while (this.db.checkIdDB(skill, "Attack") == false){
                skill = Math.floor(Math.random()*(idmax-this.idmin)+this.idmin)
                }
                return skill 
        }

       // affect les trois skills
        private Select3Skills(idmax :number){

            this.skill1 = this.SelectSkill(idmax)
            this.skill2 = this.SelectSkill(idmax)
            this.skill3 = this.SelectSkill(idmax)
           

            return null
        }

        //vérifie que les 3 skills sont différents
        private CheckSkills(idmax : number){
            while(this.skill1 == this.skill2){
                this.skill2 = Math.floor(Math.random()*(idmax-this.idmin)+this.idmin)
                }
            while((this.skill1 == this.skill3)&&(this.skill2 == this.skill3)){
                    this.skill3 = Math.floor(Math.random()*(idmax-this.idmin)+this.idmin)
                }
        }


        public getButterflyJson(){
            let dataButterfly: number[] = [this.idButterfly,this.skill1,this.skill2,this.skill3];
            return JSON.stringify(dataButterfly)

        }
        /*
        // check le nombre d'id max d'une table
        private checkIdMaxDB (id : number, table : string): boolean{

            //temp
            return true

        }


        //verifie que la donnée existe
        private checkIdDB(id : number, table : string): boolean{

            //temp
            return true

        }*/
    }