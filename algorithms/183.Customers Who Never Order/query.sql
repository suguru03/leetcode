-- Write your MySQL query statement below
SELECT c.Name Customers FROM Customers c LEFT JOIN Orders o ON c.Id=o.CustomerId WHERE o.Id IS NULL;
SELECT Name Customers FROM Customers c WHERE Id NOT IN (SELECT CustomerId FROM Orders);
