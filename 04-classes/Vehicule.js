"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicule = void 0;
var Vehicule = /** @class */ (function () {
    /**
     * constructor
     */
    function Vehicule(_name, _marque) {
        this._name = _name;
        this._marque = _marque;
    }
    Object.defineProperty(Vehicule.prototype, "name", {
        /**
         * getters & setters
         */
        get: function () {
            return this._name;
        },
        set: function (theName) {
            this._name = theName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "marque", {
        /**
         * return marque
         */
        get: function () {
            return this._marque;
        },
        /***
         * @param theMarque
         */
        set: function (theMarque) {
            this._marque = theMarque;
        },
        enumerable: false,
        configurable: true
    });
    return Vehicule;
}());
exports.Vehicule = Vehicule;
var v1 = new Vehicule("car", "benz");
console.log(v1.marque);
