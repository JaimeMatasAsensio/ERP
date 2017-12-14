"use strict";
/**Documento para realizar distintas pruebas */
var coord = new Coords(123456,-78969);
console.log(coord.toString());
var shop = new Shop(1234789,"Tienda Agapito","Pozo Seco del secarral; C/Jara; nº1",902212121,coord);
console.log(shop.toString());

var coordErr;
var shopErr;
console.log("--- Test de errores de Longitud ---")
try {
  coordErr = new Coords(1235456, "una latitud");
} catch (e) {
  console.log(e.toString());
}
try {
  coordErr = new Coords("Una Longitud", 1235456);
} catch (e) {
  console.log(e.toString());
}
try {
  coordErr = new Coords("una longitud", "una latitud");
} catch (e) {
  console.log(e.toString());
}
console.log("");
console.log("--- Test de errores de shop ---");
try {
  shopErr = new Shop("uncif","un nombre","una Direccion","un telefono","unas coordenadas");
} catch (e) {
  console.log(e.toString());
}
