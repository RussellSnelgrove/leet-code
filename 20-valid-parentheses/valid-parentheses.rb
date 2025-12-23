# @param {String} s
# @return {Boolean}
def is_valid(s)
    s_stack = []
    opening_brackets = '({['
    closing_brackets = ')}]'
    s.split('').each do | char |
        if opening_brackets.include?(char)
            s_stack.push(char)
        else
            bracket = s_stack.pop()
            case bracket
                when '('
                    return false if char != ')'
                when '{'
                    return false if char != '}'
                when '['
                    return false if char != ']'
                else
                    return false
            end
        end
    end
    return true if s_stack.empty?
    return false
end