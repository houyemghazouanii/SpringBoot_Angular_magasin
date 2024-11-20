import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../models/product';
import { Observable } from 'rxjs';
import { ProductService } from '../../../services/product.service';
import { response} from 'express';
import { error } from 'console';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  product:Product  = new Product();

  constructor(private productService:ProductService, private router:Router){}

  public onSubmit(): void {
    //console.log(this.product); // Affiche l'objet produit dans la console
    
    this.productService.createProduct(this.product).subscribe({
      next: (response) => {
        console.log('Product added'); 
        this.router.navigate(['/list-products']);
      },
      error: (error) => {
        console.error('Error adding product'); 
      }
    });
  }
  

  ngOnInit(){
    //this.product = new Product();
    this.product.description="default test description";
  }



}
