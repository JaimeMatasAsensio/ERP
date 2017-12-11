"use strict";
/*Documento para implemetar el objecto storehose */

//Bloque de errores para storeHouse

function emptyNameStoreHouse(){
  this.name = "EmptyNameStoreHouse";
  this.message = "The storehouse needs a name";
}

//Bloque del constructor storeHouse

var StoreHouse = (function(){
  var instancia;
  function init(){
    //Parte Privada
    var _items = [];
    var _quantities = [];
    var _shops = [];
    var _categories = [];
    
    
    //Parte Publica
    return{
      /*Iterador para el array de _items */
      itemIterator: function(){
        return{
          get:function () {
            var nextIndex = 0;
            return {
              next: function (){
                return nextIndex < _items.length ? {value:_items[nextIndex++], done:false}:{done: true};
              }
            }
          }
        }
      }
      ,
      /*Itearador para el array _quantities */
      quantitiesIterator: function(){
        return{
          get:function () {
            var nextIndex = 0;
            return {
              next: function (){
                return nextIndex < _items.length ? {value:_cuantities[nextIndex++], done:false}:{done: true};
              }
            }
          }
        }
      }
      ,
      /*Itearador para el array _shops */
      shopsIterator: function(){
        return{
          get:function () {
            var nextIndex = 0;
            return {
              next: function (){
                return nextIndex < _items.length ? {value:_shops[nextIndex++], done:false}:{done: true};
              }
            }
          }
        }
      }
      





    };
  }
  return {
    getInstancia: function(){
      if(!instancia){
        instancia = init();
      }
      return instancia;
    }
  }
})();