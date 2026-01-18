# @param {String} s
# @return {String}
def freq_alphabets(s)
    result = ''
    s_map = {
    '1' => 'a',
    '2' => 'b',
    '3' => 'c',
    '4' => 'd',
    '5' => 'e',
    '6' => 'f',
    '7' => 'g',
    '8' => 'h',
    '9' => 'i',
    '10#' => 'j',
    '11#' => 'k',
    '12#' => 'l',
    '13#' => 'm',
    '14#' => 'n',
    '15#' => 'o',
    '16#' => 'p',
    '17#' => 'q',
    '18#' => 'r',
    '19#' => 's',
    '20#' => 't',
    '21#' => 'u',
    '22#' => 'v',
    '23#' => 'w',
    '24#' => 'x',
    '25#' => 'y',
    '26#' => 'z'
    }
    while s.length > 0 do
        character = s[-1, 1] == '#' ? s.slice!(-3, 3) : s.slice!(-1,1)
        result = s_map[character] + result
    end
    result
end