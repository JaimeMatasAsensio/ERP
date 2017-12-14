"use strict";
/*Documento JavaScript para la implementacion de los errores */

function TemplateError()
/*Plantilla de error para crear los errores genericos*/
{
  TemplateError.prototype = new Error(); // Heredamos de error
  TemplateError.prototype.constructor = TemplateError;
  TemplateError.prototype.toString = function(){
    return this.name + " " + this.message;
  }
}

function ConstructorCalledFunction()
/*Error de llamada a constructores como funciones*/
{
  this.name = "ConstructorCalledFunction";
  this.message = "Constructor llamado como función, se necesita el operador 'new'";
}
ConstructorCalledFunction.prototype = new TemplateError();
ConstructorCalledFunction.prototype.constructor = ConstructorCalledFunction;

function ParameterInvalid(param)
/*Error para parametros no validos*/
{
  this.name = "ParameterInvalid";
  this.message = "This is a invalid parameter "+ param;
}
