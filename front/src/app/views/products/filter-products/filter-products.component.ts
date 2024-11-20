import { Component } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-filter-products',
  standalone: true,
  imports: [FormsModule,CommonModule], //commonmodule pour utiliser ngfor ngif...
  templateUrl: './filter-products.component.html',
  styleUrl: './filter-products.component.css'
})
export class FilterProductsComponent {


  category!:String;
  products: Product[]= [];

  constructor(private productService:ProductService, private router:Router){}

  ngOnInit(){
   
  }

  onSubmit(){
    this.productService.filterProductsByCategory(this.category).subscribe(
     data => this.products=data,
     error =>console.log(error)
    );
  }

  public delete(id: number): void {
    // alert('delete product with id:' + id);
    this.productService.deleteProductById(id).subscribe({
      next: (response) => {
        console.log('Product deleted:', response);
        this.onSubmit(); 
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
