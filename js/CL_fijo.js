import { Cl_profesor } from "./Cl_profesor.js";

export class Cl_fijo extends Cl_profesor {
    constructor (nom, suel, bono) {
        super(nom)
        this.sueldo = suel
        this.nombre = nom
        this.bono = bono
    }
    set sueldo(suel) {
        this._sueldo = suel
    }
    get sueldo() {
        return this._sueldo
    }

    set nombre(nom) {
        this._nombre = nom
    }
    get nombre() {
        return this._nombre
    }

    set bono(bono) {
        this._bono = bono
    }
    get bono() {
        return this._bono
    }

    ingresoTotal() {
        return this.sueldo + this.bono
    }

}