# @param {String[]} words
# @return {Integer}
def unique_morse_representations(words)
    morse_code_alphabet = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    hash = {}
    ('a'..'z').each_with_index do |letter, index|
        hash[morse_code_alphabet[index]] = letter
    end
    output = []
    words.each do |word|
        word_arr = [].join
        letter = word.chars
        letter.each do |l|
        word_arr << (hash.key(l))
            end
        output.push(word_arr)
    end
      output.uniq.size  

end