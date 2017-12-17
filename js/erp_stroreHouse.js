"use strict";
/*Documento para implemetar el objecto storehose */

//Bloque de errores para storeHouse

function EmptyNameStoreHouse(){
  this.name = "EmptyNameStoreHouse";
  this.message = "The storehouse needs a name";
}
EmptyNameStoreHouse.prototype = new TemplateError();
EmptyNameStoreHouse.prototype.constructor = EmptyNameStoreHouse;
EmptyNameStoreHouse.prototype.toString = function(){
  return TemplateError.prototype.toString.call(this);
}

function NotAnObjectProduct()
/*Error lanzado cuando no se añade un objeto de la instancia Product */
{
  this.name = "NoAnObjectProduct.";
  this.message = "Object added to stock storeHose isn`t a Product Object";
}
NotAnObjectProduct.prototype = new TemplateError();
NotAnObjectProduct.prototype.constructor = NotAnObjectProduct;
NotAnObjectProduct.prototype.toString = function(){
  return TemplateError.prototype.toString.call(this);
}

// Implementacion del StoreHouse como Singleton
var StoreHouse = (function(){
  var instanciado;
  
  function init(name){

    function StoreHouse (nombre){
      
      //parametros privados
      if(!name) throw new EmptyNameStoreHouse();
      var _nombreStore = nombre;
      var _category = []; // _category[0] = {CategoryObj}
      var _stock = []; //_stock[0] = {producto: ProductObj, cantidad: integer > 0, categoriaId: IdCategory}
      var _shops = []; // _shops[0] = {ShopObj}

      // Getters  & Setters
      Object.defineProperty(this,"nombre",{
        get: function(){ return _nombreStore },
        set: function(NewNombreStore){
          if(!NewNombreStore) throw new EmptyNameStoreHouse();
        }
      });
      //Metodos publicos

      
      //Metodos para controlar _category = []
      /*
      Ejemplo de un valor en _category
      _category[0] = {objCategory}
      */
      this.AddCategory = function (obj)
      /*Metodo para añadir una categoria al array de categorias de la tienda*/
      {
        if(!(obj instanceof Category)) throw new NotAnObjectCategory();
        var i = 0;
        var exist = 0;
        while(i < _category.length && !exist){
          if(_category[i].IdCategory === obj.IdCategory){
            exist = true;
          }
          if(!exist) i++;
        }
        if(!exist){
          _category.push(obj);
        }else{
          return -1;
        }
        return i;
        console.log(_category);
      }

      this.RemoveCategory = function(IdCat)
      /*Metodo para eleminar uan categoria del array de categorias de la tienda, requiere el id de la categoria */
      {
        var i = _category.findIndex(function(element){
          return (element.IdCategory == IdCat)
        });

        if(i != -1) _category.splice(i,1);

        return i;

      }

      //Iterador del array de categorias
      Object.defineProperty(this,"categoryIte",{
        get: function(){
          var nextIndex = 0;
          return{
            next: function(){
              return nextIndex < _category.length ? {value: _category[nextIndex++],done:false} : {done: true};
            }
          }
        }
      });



    }
    StoreHouse.prototype = {};
    StoreHouse.prototype.constructor = StoreHouse;

    var instancia = new StoreHouse(name);
    Object.freeze(instancia);
    return instancia;
  }

  return {
    getInstance: function(name){
      if(!instanciado){
        var storeName = name;
        instanciado = init(storeName);
      }
      return instanciado;
    }
  }
})();
