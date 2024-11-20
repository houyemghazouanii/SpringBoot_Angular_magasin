package com.isikef.magasin.services;

import com.isikef.magasin.entities.Category;
import com.isikef.magasin.entities.Product;
import com.isikef.magasin.repository.ProductRepository;
import jdk.javadoc.internal.doclets.toolkit.util.IndexItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceProductImpl implements ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ServiceProductImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);  // retourne null si le produit n'est pas trouvé
    }

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product updateProduct(Long id, Product product) {
        Optional<Product> existingProduct = productRepository.findById(id);

        if (existingProduct.isPresent()) {
            Product current = existingProduct.get();
            current.setCategory(product.getCategory());
            current.setName(product.getName());
            current.setDescription(product.getDescription());
            current.setPrice(product.getPrice());
            current.setNumber(product.getNumber());
            current.setQte(product.getQte());
            return productRepository.save(current);
        } else {
            return null;  // ou lever une exception si le produit n'existe pas
        }
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    @Override
    public List<Product> filterProductsByCategory(Category category){
        return productRepository.findByCategory(category);
    }
}
