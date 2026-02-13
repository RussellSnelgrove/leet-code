# @param {Integer} n
# @return {String[]}
def valid_strings(n)
  res = []
  q = Queue.new
  q << '0'
  q << '1'

  while !q.empty? do 
    s = q.pop
    if s.length == n
      res << s
    else
      if s[-1] == '0'
        q << s + '1'
      else
        q << s + '0'
        q << s + '1'
      end    
    end
  end

  res
end