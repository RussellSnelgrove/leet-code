# Write your MySQL query statement below
SELECT 
    Users.name, SUM(Transactions.amount) AS balance
FROM 
    Users
JOIN 
    Transactions
ON 
    Users.account = Transactions.account
GROUP BY Users.account
HAVING 
    balance > 10000