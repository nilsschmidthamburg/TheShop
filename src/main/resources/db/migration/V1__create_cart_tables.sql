-- Create `shopping_cart` table
CREATE TABLE shopping_cart
(
    id SERIAL PRIMARY KEY
);

-- Create `cart_item` table
CREATE TABLE cart_item
(
    id                       SERIAL PRIMARY KEY,
    product_name             TEXT   NOT NULL,
    quantity                 INT    NOT NULL,
    item_price_in_euro_cents BIGINT NOT NULL,
    cart_id                  BIGINT NOT NULL,
    FOREIGN KEY (cart_id) REFERENCES shopping_cart (id)
);
