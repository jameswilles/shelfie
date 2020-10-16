update product
set item_name = $1,
price = $2,
image = $3
where product_id = $4;