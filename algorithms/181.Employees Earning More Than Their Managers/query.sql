-- Write your MySQL query statement below
SELECT e1.Name Employee FROM Employee e1 INNER JOIN Employee e2 ON e2.Id = e1.ManagerId AND e1.Salary > e2.Salary;
