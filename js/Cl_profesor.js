export class Cl_profesor {
    constructor(nom) {
        this.nombre = nom
    }
    set nombre(nom) {
        this._nombre = nom
    }
    get nombre() {
        return this._nombre
    }
}