import { getDatabase, ref, push, onValue, set, update } from 'firebase/database';

export class tarjetaLibro {
    constructor(libro) {
        this.libro = libro;
    }

    render () {
        
        let card = document.createElement("div");
        card.className = "tarjeta";

        let tituloLibro = document.createElement("h2");
        tituloLibro.className = "tituloDelLibro";
        tituloLibro.innerHTML = this.libro.titulito;

        
        


        return tarjeta;

    }
}