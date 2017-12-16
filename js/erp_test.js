"use strict";
/**Documento para realizar distintas pruebas */
console.log("--- Test de Objetos ---");

console.log("");
console.log("- Objetos Product");
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
console.log(pro3.nombre+" instance of Product: "+(pro3 instanceof Product));
console.log(pro3.nombre+" instance of Movil: "+(pro3 instanceof Movil));
console.log(pro3.nombre+" instance of Camara: "+(pro3 instanceof Camara));
console.log(pro3.nombre+" instance of Ordendor: "+(pro3 instanceof Ordenador));

var pro4 = new Movil(4,"Galaxy S8","El ultimo movil de la competencia de la manzana",24,849.99,"imagenes","Samsumg","50Mpx","120Gb");
console.log(pro4.toString());
console.log(pro4.nombre+" instanceof Product: "+(pro4 instanceof Product));
console.log(pro4.nombre+" instanceof Movil: "+(pro4 instanceof Movil));
console.log(pro4.nombre+" instanceof Camara: "+(pro4 instanceof Camara));
console.log(pro4.nombre+" instanceof Ordendor: "+(pro4 instanceof Ordenador));

console.log("");
console.log("- Objetos Category");

var cat1 = new Category("Comunicacion","Telefonos moviles, Fijos, radios de onda corta, radios de onda larga y todo tipo de equipos relacionados con la comunicacion.");
console.log(cat1.toString());
console.log(cat1.titulo+" instance of Category: "+(cat1 instanceof Category));
var cat2 = new Category("Informatica","Equipos informaticos, Sobremesa, Portatiles, todo tipo de equipos relacionados con la informatica.");
console.log(cat2.toString());
console.log(cat2.titulo+" instance of Category: "+(cat2 instanceof Category));
var cat3 = new Category("Imagen","Equipos fotograficos, grabacion de Video y todo tipo de equipos relacionados con la Imagen.");
console.log(cat3.toString());
console.log(cat3.titulo+" instance of Category: "+(cat3 instanceof Category));

console.log("");
console.log("- Objetos Shop");
var coord1 = new Coords(123456546,11654654)
var shop1 = new Shop("1136458","Electronica Agapito","PozoSeco de CampoMarchito; C/Virgen del pompete ; nº1","926241515",coord1);
console.log(shop1.toString());
console.log(shop1.nombre + " instance of Shop: " + (shop1 instanceof Shop));

console.log("Added new category at index: " + shop1.AddCategory(cat1));
console.log("Added new category at index: " + shop1.AddCategory(cat2));
console.log("Added new category at index: " + shop1.AddCategory(cat3));
console.log("Added new category at index: " + shop1.AddCategory(cat3));
console.log("Remove a category: "+shop1.RemoveCategory(cat3.IdCategory));
console.log("Remove a category: "+shop1.RemoveCategory(cat3.IdCategory));
console.log("Added new category at index: " + shop1.AddCategory(cat3));

console.log("Iterador de categorias "+shop1.nombre+" (shop1)");
var ite = shop1.categoryIte;
var cate = ite.next();
while(!cate.done){
  console.log("Id Category: "+cate.value.IdCategory+". Titulo: " + cate.value.titulo);
  cate = ite.next();
}

shop1.AddProduct(pro1,10,1);
shop1.AddProduct(pro4,10,1);
console.log("Añadidas 20 unidades al producto con ID 1... "+shop1.AddQuantityProduct(1,20));
shop1.AddProduct(pro2,10,2);
shop1.AddProduct(pro3,10,3);
console.log("Quitamos el producto con ID 3... " + shop1.RemoveProduct(3));

console.log("");
console.log("Iterador de stock "+shop1.nombre+" (shop1)");
var ite = shop1.stockIte;
var item = ite.next();
while(!item.done){
  console.log("Id Producto: "+item.value.producto.IdProduct+". Nombre: "+item.value.producto.nombre+". Marca: "+item.value.producto.marca+". Cantidad: "+item.value.cantidad+". Id Categoria: "+item.value.categoriaId);
  item = ite.next();
}
console.log("");
console.log("Iterador del stock"+shop1.nombre+" por categoria (shop1)");
var iteC = shop1.categoriesIte(1);
var itemC = iteC.next();
while(!itemC.done){
  console.log("Id Producto: "+itemC.value.producto.IdProduct+". Nombre: "+itemC.value.producto.nombre+". Id category: "+itemC.value.categoriaId);
  itemC = iteC.next();
}





console.log("");
console.log("- Pizarra - (No mires aqui Jaime!... más arriba!)");

var aux = {
  producto: pro1,
  cantidad: 100,
  categoria: cat3
};
var aux2 = {
  producto: pro3,
  cantidad: 100,
  categoria: cat1
};
var aux3 = {
  producto: pro2,
  cantidad: 100,
  categoria: cat2
};
console.log(aux.producto.IdProduct + " Id Producto");
console.log(aux.producto.nombre + " Nombre ");
console.log(aux.producto.precioConIVA + " €");
console.log(aux.cantidad+" Unidades");
console.log("Se vendireron 10 unidades, stock actual: "+ (aux.cantidad -= 10));
console.log(aux.categoria.toString());
var auxArr = [];

auxArr.push(aux);
auxArr.push(aux2);
auxArr.push(aux3);

console.log(auxArr[0].producto.toString());

var auxfilter = auxArr.filter(function(element){
  return (element.categoria.IdCategory === 1);
});
console.log(""+auxfilter[0].producto.nombre);
