package com.isikef.magasin.services;

import com.isikef.magasin.entities.Category;
import com.isikef.magasin.entities.Product;

import java.util.List;

public interface ProductService {


       public List<Product> getAllProducts();
       public Product getProductById(Long id);
        public Product createProduct(Product product);
       public Product updateProduct(Long id, Product product);
        public void deleteProduct(Long id);

    List<Product> filterProductsByCategory(Category category);


}
