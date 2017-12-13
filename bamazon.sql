CREATE DATABASE Bamazon;

USE bamazon;

CREATE TABLE Products (
ItemID int NOT NULL,
ProductName varchar(50) NOT NULL,
DepartmentName varchar(50) NOT NULL,
Price DECIMAL(4,2) NOT NULL,
StockQuantity int NOT NULL);


INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
9876,
'Teeth Whitening Powder',
'Home',
14.99,
20);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
53432,
'Bluetooth Speaker',
'Electronics',
21.99,
25);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
19282,
'Printer',
'Office',
2300.99,
15);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
99999,
'LED TV',
'Electronics',
1400.00,
9);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
38506,
'Walkie Talkie',
'Electronics',
22.99,
38);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
03956,
'Three Tier Shelf',
'Home',
35.99,
5);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
12309,
'Polo Red Perfume',
'Cosmetic',
18.99,
10);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
09967,
'Sports Nutrition',
'Fitness',
20.99,
17);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
08965,
'Nike Shoes',
'Cosmetic',
84.00,
10);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
13436,
'Sun Glasses',
'Cosmetic',
9.99,
50);