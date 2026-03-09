# @param {Integer[]} group_sizes
# @return {Integer[][]}
def group_the_people(group_sizes)
      people = Hash.new() { |h, k| h[k] = Array.new }
  groups = []
  group_sizes.each.with_index { |size, idx| people[size] << idx }
  people.each { |size, ids| groups << ids.pop(size) until ids.empty? }
  groups
end