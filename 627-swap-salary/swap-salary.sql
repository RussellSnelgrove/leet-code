# Write your MySQL query statement below
Update Salary
Set sex = case sex
when 'm' then 'f'
else 'm'
end