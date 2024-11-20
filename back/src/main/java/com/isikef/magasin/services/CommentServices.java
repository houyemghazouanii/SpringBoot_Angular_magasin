package com.isikef.magasin.services;

import com.isikef.magasin.entities.Comment;

import java.util.List;

public interface CommentServices {

    public Comment addComment(Long productId, String content);

    public List<Comment> getProductComments(Long productId);
}
