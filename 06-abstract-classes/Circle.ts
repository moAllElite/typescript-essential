import { Shape } from "./Shape";
export  class Circle extends Shape{
    calculateArea(): number {
        return Math.PI * Math.pow(this.radius,2);
    }
    constructor(
        theX : number,
        theY : number,
        private _radius :number
    ){
        super(theX,theY);
        this._radius= _radius;
    }
    
    /**
     * getters & setters
     */
    get radius() : number {return this._radius;}
    set radius (value) {this._radius=value;}

    public getInfo() : string{
        return `x = ${this.x} , y = ${this.y} et radius = ${this._radius}`;
    }
}
