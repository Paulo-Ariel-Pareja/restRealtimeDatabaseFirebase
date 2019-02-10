import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../interfaces/producto';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  firebaseURL: string = "https://xxxxxxxxxxxxx.firebaseio.com/productos.json";
  productoURL: string = "https://xxxxxxxxxxxxx.firebaseio.com/productos/";
  headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) { }

nuevoProducto(producto: Producto){
  let body = JSON.stringify(producto);
  let headers = new HttpHeaders({
    'Content-Type':'application/json'
  });
 
  return this.http.post(this.firebaseURL, body, {headers: this.headers})
          .pipe(map( res =>{
            return res;
          } ))
}

actualizarProducto(producto: Producto, key$: string ){
  let body = JSON.stringify(producto);
  let headers = new HttpHeaders({
    'Content-Type':'application/json'
  });
  let url = `${ this.productoURL }${ key$}.json` 
  return this.http.put(url, body, {headers: this.headers})
          .pipe(map( res =>{
            return res;
          } ))
}

getProducto( key$: string){
  let url = `${this.productoURL}${key$}.json`;
  return this.http.get( url )
    .pipe(map( res => {
      return res;
    }));
}

getProductos(){
  return this.http.get( this.firebaseURL )
    .pipe(map( res => {
      return res;
    }));
}

borrarProducto(key$: string){
  let url = `${ this.productoURL }${ key$}.json`;
  return this.http.delete(url).pipe(map( res =>{
    return res;
  }));
}

}
