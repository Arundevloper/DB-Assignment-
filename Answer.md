## 1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.
The relationship between the "Product" and "Product_Category" entities is a one-to-many relationship, where one category can have multiple products associated with it, but each product belongs to only one category.
### Here's the explaination
In the "Product" table, the CategoryID field serves as a foreign key referencing the CategoryID field in the "Product_Category" table.
Each product record in the "Product" table contains a CategoryID, which specifies the category to which the product belongs.
The "Product_Category" table contains unique categories, each identified by a CategoryID.
Therefore, each product is associated with one category through the CategoryID foreign key relationship.

## 2 .How could you ensure that each product in the "Product" table has a valid category assigned to it?
To guarantee that each product in the "Product" table is associated with a valid category, you can establish a foreign key constraint linking the "Product" table to the "Category" table. This constraint maintains referential integrity, ensuring that any category assigned to a product must be present in the "Category" table

