-- Write your MySQL query statement below
SELECT MAX(Salary) SecondHighestSalary FROM Employee WHERE Salary != (SELECT MAX(Salary) FROM Employee) ORDER BY Salary DESC;
-- SELECT DISTINCT Salary SecondHighestSalary FROM Employee ORDER BY Salary DESC LIMIT 1 OFFSET 1
