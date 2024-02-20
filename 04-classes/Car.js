"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicule_1 = require("./Vehicule");
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(_name, _marque, _kilometers) {
        var _this = _super.call(this, _name, _marque) || this;
        _this._kilometers = _kilometers;
        _this._kilometers = _kilometers;
        return _this;
    }
    Object.defineProperty(Car.prototype, "kilometers", {
        /**
         * return _kilometers
         */
        get: function () {
            return this._kilometers;
        },
        /**
         * @param theKilos
         */
        set: function (theKilos) {
            if (typeof theKilos === 'number' || theKilos < 0) {
                this._kilometers = theKilos;
            }
            else {
                throw new Error("Invalid value provided");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "theGreyCard", {
        get: function () {
            return " The car ".concat(this.name, " is ").concat(this.marque.toUpperCase(), " model\n       with ").concat(this._kilometers);
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}(Vehicule_1.Vehicule));
var a = new Car('mercedez', 'classe a', 18000);
console.log(a.kilometers);
console.log(a.theGreyCard);
