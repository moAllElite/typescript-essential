class Customer{
    private    _firstName : string;
    private _lastName :  string;
    constructor(_firstName :string, _lastName : string){
        this._firstName =_firstName;
        this._lastName = _lastName;
    }

    /**
     * getters
     * @returns_firstName
     */
    get firstName() :   string  {
        return this._firstName;
    }
    
    /**
     * setters
     * @param _firstName 
     */

    set firstName(theFirstName : string){
        this._firstName=theFirstName;
    }

    /**
     * getter
     * @returns _lastName
     */
    get lastName() : string{
        return this._lastName;
    }
    
    /**
     * @param _lastName 
     * 
     */
    set lastName(theLastName : string)     {
        this._lastName=theLastName;
    }
    
}
let c1 = new Customer('modou','fall');
console.log(c1.firstName);
c1.firstName="mo";
console.log(c1.firstName);
console.log(c1.lastName);
