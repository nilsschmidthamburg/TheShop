package com.example.theshop.cart

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/carts")
class ShoppingCartController(private val shoppingCartRepository: ShoppingCartRepository) {

    @PostMapping
    fun createCart(): ResponseEntity<ShoppingCart> {
        val newCart = ShoppingCart()
        shoppingCartRepository.save(newCart)
        return ResponseEntity.ok(newCart)
    }

    @PostMapping("/{cartId}/items")
    fun addItemToCart(@PathVariable cartId: Long, @RequestBody item: CartItem): ResponseEntity<ShoppingCart> {
        val cart = shoppingCartRepository.findById(cartId).orElseThrow { RuntimeException("Cart not found!") }
        cart.items.add(item)
        shoppingCartRepository.save(cart)
        return ResponseEntity.ok(cart)
    }

    @GetMapping("/{cartId}")
    fun getCart(@PathVariable cartId: Long): ResponseEntity<ShoppingCart> {
        val cart = shoppingCartRepository.findById(cartId).orElseThrow { RuntimeException("Cart not found!") }
        return ResponseEntity.ok(cart)
    }
}