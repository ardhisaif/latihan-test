SELECT s.name AS shop_name, p.name AS product_name, SUM(iv.quantity) AS sold_quantity, REPLACE(FORMAT(SUM(iv.quantity * iv.price), 0),',','') AS total_omzet
FROM shop s
JOIN product p ON s.uuid = p.shop_id
JOIN product_variant pv ON p.uuid = pv.product_id
JOIN invoice_detail iv ON pv.uuid = iv.product_variant_id
JOIN invoice i ON iv.invoice_id = i.uuid
WHERE i.status = 'Paid'
GROUP BY p.name, s.name
ORDER BY total_omzet DESC, p.name ASC
LIMIT 3;

-- Top Product with Highest Omzet
-- Given the following database schema



-- Write a SQL query to find the top 3 product with the highest total sale in terms of price. Your query should return the name of the product and its total sale in the format:

-- shop_name	product_name	sold_quantity	omzet
-- The Bookstore	The Lord of the Rings	2	675000
-- The Bookstore	Harry Potter	2	448000
-- The Coffee Shop	Manual Brew Latte	6	95000
-- Constraint
-- If there are ties, return all products with the same highest total sale by Omzet, sorted alphabetically by product_name.
-- All product variants should be group as a single parent product. For example, Product A has red sold 10 & blue variant sold 5, then it will sum as Product A sold 15.
-- Only sum from invoice with status Paid. Expired and Unpaid doesn't count as omzet.
-- Status of product should not affect the calculation.