import { Routes } from '@angular/router';
import { CreateProductComponent } from './views/products/create-product/create-product.component';
import { ListProductComponent } from './views/products/list-product/list-product.component';
import { SearchProductComponent } from './views/products/search-product/search-product.component';

export const routes: Routes = [
    {path:"create-product",component:CreateProductComponent},
    {path:"list-products",component:ListProductComponent},
    {path:"search-products",component:SearchProductComponent}
];
