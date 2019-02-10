import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  private producto: Producto = {
    sku: "sku-12345",
    nombre: "mesa",
    moneda: "ARS",
    precio: 12345
  }

  nuevo: boolean = false;
  id: string;

  constructor(
    private productoService: ProductosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.params.subscribe( parametros =>{
      this.id = parametros['id'];
      if(this.id !== "nuevo"){
        this.productoService.getProducto(this.id)
                          .subscribe( producto => {
                            this.producto = producto;
                          })
      }
    });
  }

  ngOnInit() {
  }

  guardar(){
    if(this.id == "nuevo"){
      this.productoService.nuevoProducto(this.producto)
      .subscribe( data => {
        this.router.navigate(['/productos']);
      },
      error =>{

      });
    }else{
      this.productoService.actualizarProducto(this.producto, this.id)
            .subscribe( data => {
              //console.log(data)
              this.router.navigate(['/productos']);
            },
            error =>{

            });
    }
    
  }

  agregarNuevo(forma :NgForm){
    this.router.navigate(['/producto', 'nuevo']);

    forma.reset({
      moneda: "ARS"
    });
  }
}
