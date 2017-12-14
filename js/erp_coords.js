"use strict";
/*Documento para implementar los obectos Coords */

//Bloque errores para coords



//Bloque del constructor coords

function Coords (longitud,latitud){

  if(!(this instanceof Coords)) throw new ConstructorCalledFunction();
  if(!(Number.isFinite(longitud))) throw new InvalidLongitud();
  if(!(Number.isFinite(latitud))) throw new InvalidLatitud();
  if(!(Number.isFinite(longitud)) && !(Number.isFinite(latitud))) throw new ParametersInvalid();

  var _longitud;
  var _latitud;
}
