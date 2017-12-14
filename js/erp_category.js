"use strict";
/*Documento para implementar los objetos Category */

//Bloque de Errores Para los objectos Category

function InvalidTitleValue(param)
/*Error lanzado cuando el valor de titulo no es valido*/
{
  this.name = "InvalidTitleValue.";
  this.message = "This '"+param+"' is a invalid title value.";
}
InvalidTitleValue.prototype = new TemplateError();
InvalidTitleValue.prototype.constructor = InvalidTitleValue;
InvalidTitleValue.prototype.toString = function(){
  return TemplateError.prototype.toString.call(this);
}


function InvalidDescriptionValue(param)
/*Error lanzado cuando el valor de la descripcion no es valido */
{
  this.name = "InvalidDescriptionValue.";
  this.message = "This '"+param+"' is a invalid description value.";
}
InvalidDescriptionValue.prototype = new TemplateError();
InvalidDescriptionValue.prototype.constructor = InvalidDescriptionValue;
InvalidDescriptionValue.prototype.toString = function(){
  return TemplateError.prototype.toString.call(this);
}

//Bloque del Constructor Category

function Category(titulo, descripcion){
  //Comprobacion de creacion de instancia
  if(!(this instanceof Category)) throw new ConstructorCalledFunction();
  
  //Validacion de inputs
  if(!titulo) throw new InvalidTitleValue(titulo);
  if(!descripcion) throw new InvalidDescriptionValue(descripcion);
  
  //Parmetros privados
  var _titulo = titulo;
  var _descripcion = descripcion;

  //getters & setters

  Object.defineProperty(this,"titulo",{
    get: function(){return _titulo},
    set: function(NewTitulo){
      if(!NewTitulo) throw new InvalidTitleValue(NewTitulo);
      _titulo = NewTitulo;
    }
  });

  Object.defineProperty(this,"descripcion",{
    get: function(){return _descripcion},
    set: function(NewDescripcion){
      if(!NewDescripcion) throw new InvalidTitleValue(NewDescripcion);
      _descripcion = NewDescripcion;
    }
  });

  //Metodos publicos - No tiene... por ahora
}
//Herencia
Category.prototype = {};
Category.prototype.constructor = Category;
Category.prototype.toString = function(){
  return "Titulo: "+this.titulo+". Descripcion: "+this.descripcion;
}