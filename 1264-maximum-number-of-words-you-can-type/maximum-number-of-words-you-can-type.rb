# @param {String} text
# @param {String} broken_letters
# @return {Integer}
def can_be_typed_words(text, broken_letters)
    # O(n*26)
    text_array = text.split(' ')
    broken_letter_array = broken_letters.split('')
    eligible_words = 0
    text_array.each do |word|
        eligible_word = true
        broken_letter_array.each do |letter|
            if (word.include?(letter))
                eligible_word = false
                break
            end
        end
        eligible_words += 1 if eligible_word
    end
    eligible_words
end