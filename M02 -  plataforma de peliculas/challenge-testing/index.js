                                                      //ACTIVIDAD 04
// El enunciado es el siguiente:
// Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. La clase debe tener los siguientes métodos:
    // constructor(): Inicializa el carrito como un array vacío.

    // agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

    // calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

    // aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
// Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios.
//Mi código:

//Consigna I
class CarritoCompra{
    constructor(){
        this.compras = [];
        this.TotalCompraDescuento = 0;
    }


//Consigna II
agregarProducto(producto){
    this.compras.push(producto)
    }

//Consigna III
calcularTotal(){
    const precio = this.compras.reduce((total,producto) => total + producto.precio, 0);
    return precio;
    }

//Consigna IV
aplicarDescuento(porcentaje){
    const descuentoAplicado = porcentaje / 100;
    const totalConDescuento = this.calcularTotal() * (1 - descuentoAplicado);
    this.TotalCompraDescuento =totalConDescuento;
    }

};
module.exports = CarritoCompra;