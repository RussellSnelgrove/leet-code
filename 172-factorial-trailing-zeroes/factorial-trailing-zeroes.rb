def trailing_zeroes(n)
  count = 0
  while n > 0
    n /= 5
    count += n
  end
  count
end
