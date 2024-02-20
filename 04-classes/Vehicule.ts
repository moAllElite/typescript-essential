export  class Vehicule{
   
    private _name : string;
    private _marque :string;

    /**
     * constructor
     */
    constructor(_name:string,_marque:string){
        this._name =_name ;
        this._marque=_marque;
    }
    /**
     * getters & setters
     */
    
    public  get name() {
        return  this._name;
    }

    set name(theName) {
        this._name=theName;
    }
    /**
     * return marque
     */
    public  get marque(){
        return   this._marque;
    }
    /***
     * @param theMarque
     */
    set marque(theMarque){
        this._marque=theMarque;
    }
}
let v1=new Vehicule("car","benz");
console.log(v1.marque);
