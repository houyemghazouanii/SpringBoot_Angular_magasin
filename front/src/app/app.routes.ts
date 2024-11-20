import { Routes } from '@angular/router';
import { CreateProductComponent } from './views/products/create-product/create-product.component';
import { ListProductComponent } from './views/products/list-product/list-product.component';
import { SearchProductComponent } from './views/products/search-product/search-product.component';
import { UpdateProductComponent } from './views/products/update-product/update-product.component';
import { FilterProductsComponent } from './views/products/filter-products/filter-products.component';

export const routes: Routes = [
    {path:"create-product",component:CreateProductComponent},
    {path:"list-products",component:ListProductComponent},
    {path:"search-products",component:SearchProductComponent},
    {path:"update-product/:id",component:UpdateProductComponent},
    {path:"filter-products",component:FilterProductsComponent},
];
