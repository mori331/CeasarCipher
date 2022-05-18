// function to encrypt text from inputield after pressing button!
const caeserCipher = function () {
    // Get Key Value from user Input in frontend
    let input = (document.getElementById("cKey")).value;
    let caesarKey = Number(input);
    // Get Text to encrypt from User in frontend
    let testWord = document.getElementById("cipherText").value;
    // Declare Variable to output enrcypted Word
    let convertedWord = "";
    // Variable to save ASCII number from convertet Digits
    let ascii = 0;
    // iterate through every digit from testWord
    for (let i = 0; i < testWord.length; i++) {
        // charCodeAt converts digit to ascii-number
        ascii = testWord.charCodeAt(i);
        // 1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26 ====> ALPHABET
        // A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z ====> LETTERS
        // 65  66  67  68  69  70  71  72  73  74  75  76  77  78  79  80  81  82  83  84  85  86  87  88  89  90 ===> ASCII UPPERCASE           

        // Checks if converted digit is ASCII num between certain range (100% true always matches)
        if (ascii >= 65 && ascii <= 90) {
            // add to ASCII num converted digit Key Value to ciphe
            ascii += caesarKey;
            // Check if Value is above 90 
            if (ascii > 90) {
                // When Value is above 90 than subtract 26 to stay in ASCII num Range for UpperCase Letters
                ascii -= 26;
            }
            // Checks if converted digit is ASCII num between certain range (100% true always matches)
        } else if (ascii >= 97 && ascii <= 122) {
            // add to ASCII num converted digit Key Value to ciphe
            ascii += caesarKey;
            // Check if Value is above 122 ( end of LowerCase Letters "z") 
            if (ascii > 122) {
                // When Value is above 122 than subtract 26 to stay in ASCII num Range for UpperCase Letters
                ascii -= 26;
            }
        }
        // Add for each iteration the converted and ciphed ASCII number to Variable and comvert ASCII number to Digit again
        convertedWord = convertedWord + String.fromCharCode(ascii); //fromCharCode converts ascii-number to digit
    }
    // Move ciphed Word into outputfield in Frontend
    document.getElementById("output1").innerHTML = convertedWord;
    console.log("Das Verschlüsselte Wort ist: " + convertedWord); // FunctionOutput ==> Ciphed word
}
// reverse ciphing implementieren
const reverseCipher = function () {
    let ciphedWord = document.getElementById("reverseCiphedText").value;
    let input = (document.getElementById("cKey")).value;
    let caesarKey = Number(input);
    let convertedWord = "";

    for (let i = 0; i < ciphedWord.length; i++) {
        // charCodeAt converts digit to ascii-number
        ascii = ciphedWord.charCodeAt(i);

        if (ascii >= 65 && ascii <= 90) {
            // add to ASCII num converted digit Key Value to ciphe
            ascii -= caesarKey;
            // Check if Value is above 90 
            if (ascii > 90) {
                // When Value is above 90 than subtract 26 to stay in ASCII num Range for UpperCase Letters
                ascii = ascii - 26;
            }
            // Checks if converted digit is ASCII num between certain range (100% true always matches)
        } else if (ascii >= 97 && ascii <= 122) {
            // add to ASCII num converted digit Key Value to ciphe
            ascii -= caesarKey;
            // Check if Value is above 122 ( end of LowerCase Letters "z") 
            if (ascii > 122) {
                // When Value is above 122 than subtract 26 to stay in ASCII num Range for UpperCase Letters
                ascii = ascii - 26;
            }
        }
    }
    // Add for each iteration the converted and ciphed ASCII number to Variable and comvert ASCII number to Digit again
    convertedWord = convertedWord - String.fromCharCode(ascii); //fromCharCode converts ascii-number to digit
    document.getElementById("reverseOutput").innerHTML = convertedWord;
    console.log("Das Entschlüsselte Wort ist: " + convertedWord);
}