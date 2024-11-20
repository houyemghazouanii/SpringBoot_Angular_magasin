import { Component } from '@angular/core';
import { Product } from '../../../models/product';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { error } from 'console';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {

  id!:number;
  product!:Product;

  constructor(private sniper:ActivatedRoute,
     private productService:ProductService,private route:Router ){}

  ngOnInit():void{
    this.id = this.sniper.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(
      data => this.product = data
      ,
      error=> console.log(error)
    );
  }

  onSubmit(){
     this.productService.updateProduct(this.id,this.product).subscribe(
      data=> this.route.navigate(['/list-products']),
     error => console.log(error)
     );

  }

}
