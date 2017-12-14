"use strict";
/**Documento para realizar distintas pruebas */
console.log("--- Test de Objetos ---");
console.log("");
console.log("-Objetos Product");
var pro1 = new Movil(1,"Iphone X","La ultima version de movil de la conocida marca de la manzana...",24,849.99,"imagenes","Apple","50Mpx","120Gb");
console.log(pro1.toString());
console.log(pro1.nombre+" instanceof Product: "+(pro1 instanceof Product));
console.log(pro1.nombre+" instanceof Movil: "+(pro1 instanceof Movil));
console.log(pro1.nombre+" instanceof Camara: "+(pro1 instanceof Camara));
console.log(pro1.nombre+" instanceof Ordendor: "+(pro1 instanceof Ordenador));

var pro2 = new Ordenador(2,"GTS-1704-T3","Ordenador Portatil de ultima generacion",21,789.50,"imagenes","MSI","Intel i7","6Tb");
console.log(pro2.toString());
console.log(pro2.nombre+" instanceof Product: "+(pro2 instanceof Product));
console.log(pro2.nombre+" instanceof Movil: "+(pro2 instanceof Movil));
console.log(pro2.nombre+" instanceof Camara: "+(pro2 instanceof Camara));
console.log(pro2.nombre+" instanceof Ordendor: "+(pro2 instanceof Ordenador));

var pro3 = new Camara(3,"Fuji Reflex","Una camara para profesionales de la fotografia",18,1045,"imagenes","FujiFilm","Digital","36Gb");
console.log(pro3.toString());
console.log(pro3.nombre+" instanceof Product: "+(pro3 instanceof Product));
console.log(pro3.nombre+" instanceof Movil: "+(pro3 instanceof Movil));
console.log(pro3.nombre+" instanceof Camara: "+(pro3 instanceof Camara));
console.log(pro3.nombre+" instanceof Ordendor: "+(pro3 instanceof Ordenador));
console.log("");
console.log("-Objetos ...");
