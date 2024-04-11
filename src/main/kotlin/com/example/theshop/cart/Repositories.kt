package com.example.theshop.cart

import org.springframework.data.repository.CrudRepository

interface ShoppingCartRepository : CrudRepository<ShoppingCart, Long>