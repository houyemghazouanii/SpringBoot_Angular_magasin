package com.isikef.magasin.controller;

import com.isikef.magasin.entities.Comment;
import com.isikef.magasin.entities.Product;
import com.isikef.magasin.services.CommentServices;
import com.isikef.magasin.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    CommentServices commentService;

    @PostMapping
    public ResponseEntity<Comment> creatComment(
            @RequestParam(name="id") Long productId,
            @RequestParam(name="text") String text
    ) {
       Comment comment= commentService.addComment(productId, text);
       return ResponseEntity.ok().body(comment);
    }

    @GetMapping
    public ResponseEntity<List<Comment>> getProductComments(
            @RequestParam(name="id") Long productId){
        List<Comment> comments = commentService.getProductComments(productId);
        return ResponseEntity.ok().body(comments);

    }
}
