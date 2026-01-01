# @param {Character[][]} board
# @return {Integer}
def count_battleships(board)
    count = 0;
    for i in (0..board.length-1) do
        for j in (0..board[i].length-1) do
            next if board[i][j] == '.'
            if (i > 0)
                next if board[i-1][j] == 'X'
            end 
            if (j > 0)
                next if board[i][j-1] == 'X'
            end 
            count += 1
        end
    end
    count
end