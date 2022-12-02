function translatePigLatin(str) {
let vowels = ['a', 'e', 'i', 'o', 'u'];
let input = "";

if (vowels.indexOf(str[0]) > -1) {
input = str + "way";
return input.toLowerCase();
} else {
    let word = str.match(/[aeiou]/g) || 0
    let vowel = str.indexOf(word[0])
    input = str.substring(vowel) + str.substring(0, vowel) + "ay"
    return input.toLowerCase()
}
}
module.exports = { translatePigLatin }