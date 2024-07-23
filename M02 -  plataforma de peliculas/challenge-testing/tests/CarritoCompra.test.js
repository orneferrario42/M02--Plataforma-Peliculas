const CarritoCompra = require('../index');

// El enunciado es el siguiente:
// Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios.
//Mi código:

describe("La función CarritoCompra", ()=>{
    let carrito;
beforeEach(() =>{
        carrito = new CarritoCompra();
    });

//Consigna I
test ("Consigna I - Inicia con array vacío", () =>{
    expect(carrito.compras).toEqual([]);
});

//Consigna II
test ("Consigna II - Agrega productos al carrito", () =>{
    const producto = {nombre:'Producto A', precio: 50};
    carrito.agregarProducto(producto);
    expect(carrito.compras).toEqual([producto]);
});

//Consigna III
test ("Consigna III - Calcula el total de la compra", () =>{
    const compras= [
        {nombre:'Producto A', precio: 10},
        {nombre:'Producto B', precio: 20}
    ];

    compras.forEach((producto) => carrito.agregarProducto(producto));
    expect(carrito.calcularTotal()).toBe(30);
});

//Consigna IV
test("Consigna IV - Aplica un descuento al total de la compra", () => {
    const compras = [
    { nombre: 'Producto A', precio: 10 },
    { nombre: 'Producto B', precio: 20 }
    ];

    compras.forEach((producto) => carrito.agregarProducto(producto));
    carrito.aplicarDescuento(5);
    console.log(carrito.totalCompraDescuento);
    expect(carrito.totalCompraDescuento).toEqual(28.5);
    });
});
