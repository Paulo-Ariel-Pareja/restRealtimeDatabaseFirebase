# AppCrudFirebase
Para que funcione hay que modificar las 2 urls de 'productos.service.ts' de la siguiente manera:
firebaseURL: string = "https://minombredeproyectoenfirebase.firebaseio.com/productos.json";
productoURL: string = "https://minombredeproyectoenfirebase.firebaseio.com/productos/";

La idea del ejercicio es utilizar el api Rest de Firebase con la base de datos Realtime Database sin modulos como AngularFire2, 100% http.

Paulo Ariel Pareja by ADN Developer Software 2019