import { Component } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {

   products:Product[]= [];
    
   constructor(private productService:ProductService, private router:Router){}

   ngOnInit():void{
    this.loadProducts();
   }

    public loadProducts():void{
      this.productService.getProducts().subscribe((data)=>{
        this.products =data;
      });
    }

    public delete(id: number): void {
      // alert('delete product with id:' + id);
      this.productService.deleteProductById(id).subscribe({
        next: (response) => {
          console.log('Product deleted:', response);
          this.loadProducts();  // Rafraîchit la liste des produits après la suppression
        },
        error: (err) => {
          console.error('Error deleting product:', err);
        }
      });
  }
  
update(id:number):void{
  this.router.navigate(['update-product',id]);
}
 

}
