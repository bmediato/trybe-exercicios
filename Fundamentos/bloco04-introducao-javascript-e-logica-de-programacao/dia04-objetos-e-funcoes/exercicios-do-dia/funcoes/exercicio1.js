function palindromo(string) {
    let reverseWord = '';
    reverseWord = string.split('').reverse().join(''); // inverte a palavra
    if (reverseWord == string) {
        return true;
    }
    return false;
}
console.log(palindromo('desenvolvimento'))