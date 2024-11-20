package com.isikef.magasin.services;

import com.isikef.magasin.entities.Comment;
import com.isikef.magasin.entities.Product;
import com.isikef.magasin.repository.CommentRepository;
import com.isikef.magasin.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceCommentImpl implements CommentServices{

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    ProductRepository productRepository;

    @Override
    public Comment addComment(Long productId, String content) {
        Product product= productRepository.getById(productId);
        Comment comment= new Comment();
        comment.setProduct(product);
        comment.setContent(content);
        return commentRepository.save(comment);
    }
    @Override
    public List<Comment> getProductComments(Long productId) {
        Product product= productRepository.getById(productId);
        return commentRepository.findByProduct(product);
    }
}
