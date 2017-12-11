"use strict";
/*Documento para implementar los objetos shop*/

//Bloque de errores para shop
function InvalidCifValue(cif){
  this.name = "InvalidCifValue";
  this.message = "This '" + cif + "' isn`t a valid value for cif parameter";
}
InvalidCifValue.prototype = new TemaplateError();
InvalidCifValue.prototype.constructor = InvalidCifValue;

function NoNameShopValue(){
  this.name = "NoNameShopValue";
  this.message = "Shop must have a name";
}
NoNameShopValue.prototype = new TemaplateError();
NoNameShopValue.prototype.constructor = NoNameShopValue;

function NotAnObjectCoords(){
  this.name
}
//Bloque del constructor para shop

function Shop(cif,name,direccion,telefono,Cords){
  if(!(/^\d*$/).test(cif)) throw new InvalidCifValue(cif);
  if(!name) throw new NoNameShopValue();
  if(!(Cords instanceof Coords)) throw new NotAnObjectCoords();
  var _cif = cif;
  var _name = name;
  var _direccion = direccion;
  var _telefono = telefono;
  var _Cords = Cords;
  
}