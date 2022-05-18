const alphabet = [ //the index for the last item is N-1, bc the index starts from 0. So the length of an array is always the last existing index +1.
    "a", // 0
    "b", // 1 
    "c", // 2
    "d", // 3
    "e", // 4
    "f", // 5
    "g", // 6
    "h", // 7
    "i", // 8
    "j", // 9
    "k", // 10
    "l", // 11
    "m", // 12
    "n", // 13
    "o", // 14
    "p", // 15
    "q", // 16
    "r", // 17
    "s", // 18
    "t", // 19
    "u", // 20
    "v", // 21
    "w", // 22
    "x", // 23
    "y", // 24
    "z", // 25
];
    let inputText = document.getElementById("text").value;
    let key = Number(document.getElementById("cKey").value);
    /**
    * Variable to save and concatinate each ciphed letter from  Array
    */
    let ciphedText = "";

const Cipher = function () {
    /**
    * Iterate through InputText and its length
    */
   for (let i = 0; i < inputText.length; i++) {
       /**
        * Iterate for every digit from inputText through every Digit in Array
        */
       for (let j = 0; j < alphabet.length; j++) {
           ciphedText = encode(ciphedText, inputText, i, j, key); // change without ciphedtext als parameter
        }
    }
    console.log(ciphedText);
    document.getElementById("output1").innerHTML = ciphedText;
};
// logic for encoding letters
function encode (ciphedText, inputText, i, j, key) {
    if(inputText[i] == alphabet[j].toUpperCase()) {
        ciphedText = ciphedText + alphabet[(j + key) % alphabet.length].toUpperCase();  // alphabet[j + key - alphabet.length]
    }
    else if (inputText[i] == alphabet[j]) {
        ciphedText = ciphedText + alphabet[(j + key) % alphabet.length];
    }
    return ciphedText;
}

const reverseCipher = function () {
    /**
     * Iterate through InputText and its length
     */
    for (let i = 0; i < inputText.length; i++) {
        /**
         * Iterate for every digit from inputText through every Digit in Array
         */
        for (let j = 0; j < alphabet.length; j++) {
            ciphedText = decode(ciphedText, inputText, i, j, key);
        }
    }
    console.log(ciphedText);
    document.getElementById("reverseOutput").innerHTML = ciphedText;
};
// logic for decoding letters
function decode (ciphedText, inputText, i, j, key){
    if (inputText[i] == alphabet[j]) {
        ciphedText = ciphedText + alphabet[(j - key) % alphabet.length];
    }
    else if (inputText[i] == alphabet[j].toUpperCase()) {
        ciphedText = ciphedText + alphabet[(j - key) % alphabet.length].toUpperCase();
    }
    return ciphedText;
}