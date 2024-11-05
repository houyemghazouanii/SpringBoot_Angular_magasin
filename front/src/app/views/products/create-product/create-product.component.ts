import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  product:Product  = new Product();

  public onSubmit(){
    console.log(this.product);
    window.alert("Submit http post request to add product");
  }

  ngOnInit(){
    //this.product = new Product();
    this.product.description="default test description";
  }



}
