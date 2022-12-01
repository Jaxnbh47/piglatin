let vowels = ['a', 'e', 'i', 'o', 'u'];
let newstr = "";

if (vowels.indexOf(newstr[0]) > -1) {
    newstr = str + "way";
    return newstr;
} else {
    let firstMatch = str.match(/[aeiou]/g) || 0;
    let vowel = str.indexOf(firstMatch[0]);
    newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
    return newStr;
}

function translatePigLatin() {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    if (vowels.indexOf(newstr[0]) > -1) {
        newStr = newstr + "way";
        return newstr;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
        return newstr;
    }
    console.log('jackson')
}
module.exports = {translatePigLatin};