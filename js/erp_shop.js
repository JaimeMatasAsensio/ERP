"use strict";
/*Documento para implementar los objetos shop*/

//Bloque de errores para shop

function InvalidCifValue(cif){
  this.name = "InvalidCifValue";
  this.message = "This '" + cif + "' isn`t a valid value for cif parameter";
}
InvalidCifValue.prototype = new TemaplateError();
InvalidCifValue.prototype.constructor = InvalidCifValue;

function InvalidPhoneValue(phone){
  this.name = "InvalidPhoneValue";
  this.message = "This '" + phone + "' isn`t avalid value for phone parameter"
}
InvalidPhoneValue.prototype = new TemaplateError();
InvalidPhoneValue.prototype.constructor = InvalidPhoneValue;

function NoNameShopValue(){
  this.name = "NoNameShopValue";
  this.message = "Shop parameter 'name' must have a name";
}
NoNameShopValue.prototype = new TemaplateError();
NoNameShopValue.prototype.constructor = NoNameShopValue;

function NotAnObjectCoords(){
  this.name = "NoAnObjectCorrds";
  this.message = "The parameter 'coord' need an object Coords";
}
NotAnObjectCoords.prototype = new TemaplateError();
NotAnObjectCoords.prototype.constructor = NotAnObjectCoords;


//Bloque del constructor para shop

function Shop(cif,name,direccion,telefono,coords){
  //validadores de parametros
  if(!(/^\d*$/).test(cif)) throw new InvalidCifValue(cif);
  if(!(/^\d{9}$/).test(telefono)) throw new InvalidPhoneValue(telefono);
  if(!name) throw new NoNameShopValue();
  if(!(coords instanceof Coords)) throw new NotAnObjectCoords();

  var _idShop;
  var _cif = cif;
  var _name = name;
  var _direccion = direccion || "Unknown Direction";
  var _telefono = telefono || "Unknown Phone";
  var _coords = coords;

  //getters & setters
  Object.defineProperty(this, "cif",{
    get: function (){ return _cif },
    set: function (newCif){
      if(!(/^\d*$/).test(cif)) throw new InvalidCifValue(cif);
      console.log("Cif value changed. Old value: "+ _cif +"; New value: " + newCif);
      _cif = newCif;
    }
  });

  Object.defineProperty(this, "name", {
    get: function () { return _name },
    set: function (newName){
      if(!newName) throw new NoNameShopValue();
      console.log("Name value changed. Old value: " + _name + "; New value: " + newName);
      _name = newName;
    }
  });

  Object.defineProperty(this, "direction",{
    get: function () { return _direccion },
    set: function (newDirection) {
      if(!newDirection) newDirection = "Unknown Direction"
      console.log("Direction value Changed. Old value " + _direction + "; New value: " + newDirection);
      _direction = newDirection;
    }
  });

  Object.defineProperty(this, "telefono", {
    get: function(){ return _telefono},
    set: function(newPhone){
      if(!newPhone) newPhone = "Unknown Phone";
      console.log("Phone value changed. Old value: " + _telefono + "; New value: " + newPhone);
      _telefono = newPhone;
    }
  });

  Object.defineProperty(this, "coords", {
    get: function () {return _coords},
    set: function (newCoords) {
      if(!(newCoords instanceof Coords)) throw new NotAnObjectCoords();
      console.log("Coords value changed. Old value: " + _coords.id + "; New value: " + newCoords.id );
    }
  });
}