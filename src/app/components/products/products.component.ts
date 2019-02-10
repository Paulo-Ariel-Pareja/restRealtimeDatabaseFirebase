import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  productos: any[]=[];
  loading: boolean = true;

  constructor(
    private productosService: ProductosService
  ) {
    this.productosService.getProductos()
                         .subscribe( data =>{
                          this.productos = data;
                          this.loading = false; 
                         })
   }

  ngOnInit() {
  }

  borrarProducto(key$: string){
    this.productosService.borrarProducto(key$).subscribe( data => {
      if(data){
        console.log(data); //hubo un error y no se borro
      }else{
        delete this.productos[key$]; //firebase devuelve null cuando elimina
      }
      
    });
  }
}
