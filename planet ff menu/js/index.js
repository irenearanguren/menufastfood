
function ma(){
    alert('foodtruck para tus eventos');
}
function hc(){
    document.getElementsByClassName('planet')[0].onclick=ma;

}
window.onload=hc;

function hamburguesa(nombre, precio) {
    this.nom = nombre;
    this.price = precio;

    this.pedir = function () {
        document.write("han pedido una hamburguesa " + nombre);
    }
};

var pedido = new hamburguesa("clasica", 3);
pedido.pedir();

class Choripan{
    constructor(nombre, ingrediente, precio) {
        this.nombre = nombre;
        this.ingrediente = ingrediente;
        this.precio = precio; 
    }

    orden(){
        document.write("su orden ha sido " , nombre , " con " , ingrediente , " y su precio es " , precio);
    }
};                                     

var chori = new Choripan("choripan", "pan, chorizo, queso amarillo, salsas y vegetales", 5);
chori.orden();