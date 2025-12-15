# @param {Integer[]} order
# @param {Integer[]} friends
# @return {Integer[]}
def recover_order(order, friends)
    final_array = []
    order.each do |friend|
        final_array.push(friend) if friends.include?(friend)
    end
    return final_array
end