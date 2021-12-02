import { getDatabase, ref, push, onValue, set, update } from 'firebase/database';

export class tarjetaLibro {
    constructor(libros) {
        this.libros = libros;
    }

    render () {
        
        let tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";

        let tituloLibro = document.createElement("h2");
        tituloLibro.className = "tituloDelLibro";
        tituloLibro.innerHTML = this.libros.titulito;

        let puntuacion = document.createElement("h4");
        puntuacion.className = "puntuacionLibro";
        puntuacion.innerHTML = this.libros.puntuacion;


        let boton1 = document.createElement("button");
        boton1.className="boton1Class";

        let boton2 = document.createElement("button");
        boton2.className="boton2Class";
        
        let boton3 = document.createElement("button");
        boton3.className="boton3Class";
        
        let boton4 = document.createElement("button");
        boton4.className="boton4Class";
        
        let boton5 = document.createElement("button");
        boton5.className="boton5Class";
        
        boton1.innerHTML="1";
        boton2.innerHTML="2";
        boton3.innerHTML="3";
        boton4.innerHTML="4";
        boton5.innerHTML="5";
        
        
        tarjeta.appendChild(tituloLibro);
        tarjeta.appendChild(puntuacion);

        tarjeta.appendChild(boton1);
        tarjeta.appendChild(boton2);
        tarjeta.appendChild(boton3);
        tarjeta.appendChild(boton4);
        tarjeta.appendChild(boton5);

        
        //let puntajito=0;
        boton1.addEventListener( "click",(e, eve)=>{
            //puntajito+=1;
            const db=getDatabase();
            const refref= ref(db,"libro/" + this.libros.id);

            const puntajito = ref(db, "libro/" + this.libros.id + "/" + "puntuacion");
            const valorVoto = ref (db, "libro/" + this.libros.id + "/" + "valorVoto" );

            update(refref,{"puntuacion": puntajito});

           
            
       

        });

        
        boton2.addEventListener( "click",(e, eve)=>{
            
            puntajito+=2;
            const db=getDatabase();
            const refref= ref(db,"libro/" + this.libros.id);
            update(refref,{"puntuacion": puntajito});
            
            
            
        });

        
        boton3.addEventListener( "click",(e, eve)=>{
            puntajito+=3;
            const db=getDatabase();
            const refref= ref(db,"libro/" + this.libros.id);
            update(refref,{"puntuacion": puntajito});
            //let puntajito=0;
          
            
        });

        boton4.addEventListener( "click",(e, eve)=>{
            puntajito+=4;
            const db=getDatabase();
            const refref= ref(db,"libro/" + this.libros.id);
            update(refref,{"puntuacion": puntajito});

           // let puntajito=0;
            
            
        });

        boton5.addEventListener( "click",(e, eve)=>{
            puntajito+=5;
            const db=getDatabase();
            const refref= ref(db,"libro/" + this.libros.id);
            update(refref,{"puntuacion": puntajito});
            
        });
        
        
        return tarjeta;

    }
}