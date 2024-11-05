package com.isikef.magasin.controller;

import com.isikef.magasin.entities.Product;
import com.isikef.magasin.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    @PostMapping
    public Product addProduct(@RequestBody  Product product) {
        return productRepository.save(product);
    }

    @GetMapping("/{id}")
    public Product getProduct(@PathVariable Long id) {
        return productRepository.findById(id).get();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteProduct(@PathVariable Long id) {
        productRepository.deleteById(id);

        return ResponseEntity.ok().
                body("Product with id " + id + " has been deleted.");

    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
        Product current = productRepository.findById(id).get();
        current.setCategory(product.getCategory());
        current.setName(product.getName());
        current.setDescription(product.getDescription());
        current.setPrice(product.getPrice());
        current.setNumber(product.getNumber());
        current.setQte(product.getQte());

        return productRepository.save(current);
    }
}
