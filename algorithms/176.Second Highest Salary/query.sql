-- Write your MySQL query statement below
SELECT MAX(Salary) SecondHighestSalary FROM Employee WHERE Salary != (SELECT MAX(Salary) FROM Employee) ORDER BY Salary DESC;
