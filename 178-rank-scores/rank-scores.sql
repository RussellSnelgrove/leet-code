# Write your MySQL query statement below
select Scores.score, COUNT(S2.score) AS 'Rank'
from Scores, (SELECT distinct score from Scores) S2
where Scores.score <= S2.score
group by Scores.id
order by Scores.score desc