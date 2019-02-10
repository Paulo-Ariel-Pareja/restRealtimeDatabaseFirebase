import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/products/product.component';

const routes: Routes = [
  { path: 'productos', component: ProductsComponent},
  { path: 'producto/:id', component: ProductComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'productos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
