# @param {String[]} bank
# @return {Integer}
def number_of_beams(bank)
    last = 0
    total = 0
    current = 0
    bank.each do |beam|
        current = beam.count('1')
        total += current * last
        last = current if current != 0
    end
    total
end