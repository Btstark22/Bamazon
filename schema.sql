DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
    item_id INT(5) NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price FLOAT(10, 4),
    stock_quantity INT(30) NOT NULL
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Axis&Allies", "Board Games", 80.00, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "Settlers", "Board Games", 40.00, 12);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Guitar", "Music", 300.00, 6);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Keyboard", "Music", 200.00, 3);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "T-shirt", "Clothing", 5.00, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "Water Bottle", "Recreation", 8.00, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "PHB", "Books", 30.00, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "Backpack", "Clothing", 70.00, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Desk", "Furniture", 250.00, 7);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Lamp", "Furniture", 12.00, 30);
