# @param {String[]} operations
# @return {Integer}
def cal_points(operations)
    result = []
    total = 0
    operations.each do |operation|
        value = 0 
        if operation == 'C'
            value -= result.pop() 
        else
            value = (result[-1].to_i + result[-2].to_i) if operation == '+'
            value = (result[-1].to_i * 2)  if operation == 'D'
            value = (operation.to_i)  if operation.match(/[0-9]+/)
            result.push(value)
        end
        total += value
    end
    total
end