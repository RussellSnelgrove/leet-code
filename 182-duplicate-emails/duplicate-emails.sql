# Write your MySQL query statement below
SELECT Distinct email 
from Person
group by email
having count(email) >= 2;