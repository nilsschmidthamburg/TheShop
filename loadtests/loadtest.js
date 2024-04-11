import http from "k6/http";
import {check, sleep} from "k6";

const baseUrl = "http://localhost:8080/api/v1";
const params = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
};

export let options = {
    stages: [
        {duration: "60s", target: 1000},
        {duration: "30s", target: 1000},
        {duration: "10s", target: 0},
    ],
    thresholds: {
        http_req_duration: ["avg<200", "p(95)<500", "p(99)<1000"],
    },
};
export default function () {
    const cartId = createCart();
    sleep(2);

    addItemToCart(cartId, randomCartItem());
    sleep(1);
    addItemToCart(cartId, randomCartItem());
    sleep(1);
    addItemToCart(cartId, randomCartItem());

    sleep(2);
    getCart(cartId)
}

function createCart() {
    let createCartResponse = http.post(`${baseUrl}/carts`, params);
    check(createCartResponse, {
        "createCartResponse is status 200": (r) => r.status === 200,
    });

    return JSON.parse(createCartResponse.body).id;
}

function addItemToCart(cartId, item) {
    let addItemToCartResponse = http.post(`${baseUrl}/carts/${cartId}/items`, JSON.stringify(item), params);
    check(addItemToCartResponse, {
        "addItemToCartResponse is status 200": (r) => r.status === 200,
    });
}

function getCart(cartId) {
    let getCartResponse = http.get(`${baseUrl}/carts/${cartId}`, params);
    check(getCartResponse, {
        "getCart is status 200": (r) => r.status === 200,
    });
}

// eslint-disable-next-line max-len
const products = [
    "Bananas", "Apples", "Tomatos", "Potatoes", "Carrots", "Cucumbers", "Peppers", "Onions", "Garlic", "Ginger"
];

function randomCartItem() {
    return {
        productName: products[Math.floor(Math.random() * products.length)],
        quantity: Math.floor(Math.random() * 10) + 1,
        itemPriceInEuroCents: Math.floor(Math.random() * 10) * 100 + 95,
    };
}