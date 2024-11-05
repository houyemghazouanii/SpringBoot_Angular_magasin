package com.isikef.magasin.entities;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "products")
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    Category category;
    String name;
    @Column(columnDefinition = "TEXT")
    String description;
    float price;
    int number;
    int qte;
}
