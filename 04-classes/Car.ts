import { Vehicule } from "./Vehicule";
class Car extends Vehicule {

    constructor(
        _name : string,
        _marque:string, 
        private      _kilometers:number )
    {
        super(_name,_marque);
        this._kilometers=_kilometers;
    }
    /**
     * return _kilometers
     */
    get kilometers(): number{
        return this._kilometers;
    }
    /**
     * @param theKilos
     */
    set kilometers(theKilos){
        if (typeof theKilos === 'number' || theKilos < 0){
            this._kilometers = theKilos;
        }else{
            throw new Error("Invalid value provided");
        }
    }
    get theGreyCard():string{
       return` The car ${this.name} is ${this.marque.toUpperCase()} model
       with ${this._kilometers}`;
    }
}
let a=new Car('mercedez','classe a',18000);
console.log(a.kilometers);
console.log(a.theGreyCard);