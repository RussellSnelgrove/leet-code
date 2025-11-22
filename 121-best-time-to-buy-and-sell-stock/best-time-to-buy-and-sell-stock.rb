# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
    currentMin = 0
    leftNumber = prices[0]
    prices.drop(1).each do |price|
        puts "#{price}, #{currentMin}, #{leftNumber}"
        if price - leftNumber > currentMin
            currentMin = price-leftNumber
        else
            leftNumber = price if (price < leftNumber)
        end
    end

    return currentMin
end