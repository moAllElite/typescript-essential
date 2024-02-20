import { Shape } from "./Shape";
export class Rectangle extends Shape{
    calculateArea(): number {
        return this._width * this._height;
    }
    constructor(
        theX :number,
        theY: number,
        private _width : number,
        private _height : number
    ){
        super(theX,theY);
        this._width=_width;
        this._height=_height;
    }
    /**
     * getters & setters for width
     */
    public get width():number{return this._width;}
    public  set width(value){this._width =value}
    /**
     * getters & setters for heigth
     */
   public get height():number{return this._height;}
   public set height(value){this._height =value}
    
    public getInfo() : string{
        return `x = ${this.x} , y = ${this.y} ,width = ${this.width} & height =${this._height}`;
    }
}
