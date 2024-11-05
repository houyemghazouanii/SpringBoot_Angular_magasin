import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8082/magasin/products'; // Adjust the API URL as needed

  constructor(private http:HttpClient) { }

  public getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}`);
  }

  public getProductById(id:number):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/${id}`);
  }

  public deleteProductById(id:number):Observable<String>{
    return this.http.delete<String>(`${this.baseUrl}/${id}`);
  }

  public createProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(`${this.baseUrl}`,product);
  }

  public updateProduct(id:number,product:Product):Observable<Product>{
    return this.http.post<Product>(`${this.baseUrl}/${id}`,product);
  }


}
