import { Cl_profesor } from "./Cl_profesor.js";

export class Cl_contratado extends Cl_profesor {
    constructor (nom,ct, bono) {
        super(nom)
        this.cantidadHoras = ct
        this.bono = bono
 }
    set cantidadHoras(ct) {
        this._cantidadHoras = ct
    }
     get cantidadHoras() {
        return this._cantidadHoras
    }
    set bono(bono) {
        this._bono = bono
    }
    get bono() {
        return this._bono
    }
    pago () {
        return this.cantidadHoras * 10
    }
    ingresoTotal () {
        return this.pago() + this.bono
    }

}