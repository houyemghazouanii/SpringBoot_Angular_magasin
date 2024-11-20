package com.isikef.magasin.repository;

import com.isikef.magasin.entities.Category;
import com.isikef.magasin.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {

    List<Product> findByCategory(Category category);
}
