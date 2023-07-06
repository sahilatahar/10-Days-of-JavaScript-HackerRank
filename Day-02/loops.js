function vowelsAndConsonants(s) {

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    // To print vowels
    for(let char of s) {
        if(vowels.includes(char)) {
            console.log(char);
        }
    }

    // To print consonants
    for(let char of s) {
        if(!vowels.includes(char)) {
            console.log(char);
        }
    }
}