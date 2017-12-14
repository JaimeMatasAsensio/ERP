"use strict";
/*Documento para implemetar el objecto product y los objectos que heredaran de el*/

//--- Bloque de Errores para Product

function UninstantiatedProductObject(){
 this.name = "UninstantiatedProductObject.";
 this.message = "Can not instantiate a Product Object.";
}
UninstantiatedProductObject.prototype = new TemplateError();
UninstantiatedProductObject.prototype.constructor = UninstantiatedProductObject;
UninstantiatedProductObject.prototype.toString = function(){
  return TemplateError.prototype.toString.call(this);
};

function UndefinedParameter(param){
 this.name = "UndefinedPameter.";
 this.message = "Undefined value for param '" + param + "' ";
}
UndefinedParameter.prototype = new TemplateError();
UndefinedParameter.prototype.constructor = UndefinedParameter;
UndefinedParameter.prototype.toString = function(){
  return TemplateError.prototype.toString.call(this);
};

function InvalidValueForPrecio(param){
 this.name = "InvalidValueForPrecio.";
 this.message = "Invalid value for Precio '" + param + "' ";
}
InvalidValueForPrecio.prototype = new TemplateError();
InvalidValueForPrecio.prototype.constructor = InvalidValueForPrecio;
InvalidValueForPrecio.prototype.toString = function(){
  return TemplateError.prototype.toString.call(this);
};

function InvalidValueForIVA(param){
 this.name = "InvalidValueForIVA.";
 this.message = "Invalid value for IVA '" + param + "' ";
}
InvalidValueForIVA.prototype = new TemplateError();
InvalidValueForIVA.prototype.constructor = InvalidValueForIVA;
InvalidValueForIVA.prototype.toString = function(){
  return TemplateError.prototype.toString.call(this);
};

//--- Bloque del constructor product y los objetos que herdan de el

//Objecto Abstracto Product
(function (){
  var asbrtcLock = false;
  function Product(SN,nombre,descripcion,IVA,precio,imagenes)
  /*Constructor de objetos product*/
  {
    //Comprobacion del seguro
    if(asbtrcLock) throw new UninstantiatedProductObject();

    //validacion de parametros
    if(SN) throw new UndefinedParameter("SN");
    if(nombre) throw new UndefinedParameter("nombre");
    if(descripcion) throw new UndefinedParameter("descripcion");
    if(!(Number.isFinite(IVA)) && (IVA > 0) && (IVA < 0)) throw new InvalidValueForIVA(IVA);
    if(!(Number.isFinite(precio)) && (precio > 0)) throw new InvalidValueForPrecio(precio);

    //Asignacion de valores
    var _idProduct;
    var _SN = SN;
    var _nombre = nombre;
    var _descripcion = descripcion;
    var _IVA = IVA;
    var _precio = precio;
    var _imagenes = [];

    //Metodos de product
    Object.defineProperty(this,"SN",{
      get: function(){ return _SN },
      set: function(newSN){
        if(SN) throw new UndefinedParameter("SN");
        _SN = newSN;
      }
    });

    Object.defineProperty(this,"nombre",{
      get: function(){ return _nombre },
      set: function(newNombre){
        if(nombre) throw new UndefinedParameter("nombre");
        _nombre = newNombre;
      }
    });

    Object.defineProperty(this,"descripcion",{
      get: function(){return _descripcion},
      set: function(newDescripcion){
        if(descripcion) throw new UndefinedParameter("descripcion");
        _descripcion = newDescripcion;
      }
    });

    Object.defineProperty(this,"IVA",{
      get:
    });

    Object.defineProperty(this,"",{});
  }
  Product.prototype = {};
  Product.prototype.constructor = Product;
  Product.prototype.toString = function(){
    return "SN: "
  }
  asbrtcLock = true;

  //Devolver los constructores
  window.Product = Product;
})();
