# @param {Integer[][]} mat
# @return {Integer}
def num_special(mat)
  result = 0

  # Arrays to store the sums of elements in each row and column
  row_sums = Array.new(mat.length, 0)
  col_sums = Array.new(mat[0].length, 0)

  # Calculate the sums of elements in each row and column
  mat.each_with_index do |row, i|
    row.each_with_index do |value, j|
      row_sums[i] += value
      col_sums[j] += value
    end
  end

  # Check if each 1 is special using the precalculated sums
  mat.each_with_index do |row, i|
    row.each_with_index do |value, j|
      if value == 1 && row_sums[i] == 1 && col_sums[j] == 1
        result += 1
      end
    end
  end

  result
end