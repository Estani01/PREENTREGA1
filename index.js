class Instrumentos{
    constructor (marca, precio, modelo){
        this.marca=marca
        this.precio=precio
        this.modelo=modelo
    }
}

const guitarra= new Instrumentos("gibson", 100.000, "sg");
const bajo= new Instrumentos("fender",200.000,"jazz-bass");
const bateria= new Instrumentos("mapex",500.000,"j-200");
const guitarra2= new Instrumentos("fender",400.000,"jaguar");


const arr = [];




arr.push(guitarra);
arr.push(bajo);
arr.push(bateria);
arr.push(guitarra2);

alert ("Buenas tardes, bienvinido a daiamMusic");
let nombre=prompt ("ingrese su nombre de usuario");
let apellido=prompt ("ingrese su apellido"); 
let edad=prompt ("ingrese su edad");


alert(`Hola ${nombre}  ${apellido},ya puede navegar con tranquilidad`);

alert("los productos que quedan disponibles son GIBSON-SG, FENDER-JAZZ-BASS, BATERIA-MAPEX y FENDER-JAGUAR")

let instrumentoElejido= prompt("ingrese el producto que desee comprar");


let instrumentoElejido1= instrumentoElejido.toUpperCase();


let productos= arr[0];

if (instrumentoElejido1==="GIBSON-SG"){
    productos=arr[0].precio
}
else if(instrumentoElejido1==="FENDER-JAZZBASS"){
    productos=arr[1].precio
}
else if(instrumentoElejido1==="BATERIA-MAPEX"){
    productos=arr[2].precio
}
else if(instrumentoElejido1==="FENDER-JAGUAR"){
    productos=arr[3].precio
}
else{alert ("PRODUCTO NO DISPONIBLE");} 


alert("las cuotas a las que usted puede optar son 3,4,6,12,18  ¡recorda que pagando con 12 y 18 cuotas hay un interes del 20% del producto total");
let cuotas= prompt ("Ingrese el numero de cuotas con las que usted quiera pagar")

let suma=(a,b) => a+b;
let interes=x => x*0.20;
function calculadora (productos,cuotas){
    if (cuotas=="3"){
    return    productos/3;
    }
    else if (cuotas=="4"){
        return productos/4;
    }
    else if (cuotas=="6"){
        return productos/6;
    }
    else if (cuotas=="12"){
        return suma(productos/18,(interes(productos))); 
    }
    else if (cuotas=="18"){
        return suma(productos/18,(interes(productos)));
        
    }
    else {alert("no puede abonar dicho numero de cuotas")
    }
}




  let resultado= calculadora(productos, cuotas);


               

                                                    

        




 alert("en " + cuotas +" cuotas el monto a pagar sera " + resultado + " $");
