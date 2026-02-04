# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def three_sum_closest(nums, target)
  diff = nil
  n = nums.sort
  (0...n.size-2).each do |i|
    j,k = i+1, n.size-1
    while j < k
      sum = n[i] + n[j] + n[k]
      if diff.nil? || (target-sum).abs < diff.abs
        diff = target-sum
      elsif sum < target
        j += 1
      else
        k -= 1
      end
    end
      break if 0 == diff
  end
  target - diff
end