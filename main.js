module.exports = { translate }

function translate(string) {
let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U',];
let input = "";

if (vowels.indexOf(string[0]) > -1) {
input = string + "way";
return input.toLowerCase();
} else {
    let word = string.match(/[aeiouAEIOU]/g) || 0
    let vowel = string.indexOf(word[0])
    input = string.substring(vowel) + string.substring(0, vowel) + "ay"
    return input.toLowerCase();
}
}