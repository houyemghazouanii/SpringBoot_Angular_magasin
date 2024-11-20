package com.isikef.magasin.repository;

import com.isikef.magasin.entities.Comment;
import com.isikef.magasin.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment,Long> {

    public List<Comment> findByProduct(Product product);

    public List<Comment> findByProductId(Long productid);
}
