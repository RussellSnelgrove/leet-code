# @param {Integer} left
# @param {Integer} right
# @return {Integer}
def count_prime_set_bits(left, right)
    prime_count = 0
    for i in (left..right)
        bit_count = i.to_s(2).count('1')
        prime = bit_count > 1 ? true : false
        for j in (2..Math.sqrt(bit_count))
            prime = false if bit_count%j == 0
        end
        prime_count += 1 if prime
    end
    prime_count
end