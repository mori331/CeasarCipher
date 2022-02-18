/** The index for the last item is N-1, bc the index starts from 0. So the length of an array is always the last existing index +1. */
/** Array to iterate through every Letter in Alphabet */
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

/** Declare Global Variables that can be accessed from every Function in the Code */
let ciphedText = "";
let inputText;
let key;

/** Also declare Values for global Variables that can be accessed everywhere in the JS Code */
function storedVariables() {
    /** setback encodet/decodet text every time a Button gets clicked, to fill it as empty String again (avoid concatination of ciphed words) */
    ciphedText = "";
    inputText = document.getElementById("encodeText").value;
    key = Number(document.getElementById("Key").value);
}

/** Function linked with onclick Event from Encode Button in Frontend to start after pressing Button */
const encodeCipher = function () {
    /** calls the Variables declared Globally */
    storedVariables();
    /** if the CeasarKey form user Input is greater than 0, call function to iterate through input Text and Array */
    if (key > 0) {
        iterateThroughEncode();
    }
};

/** Iterate through InputText and Array */
function iterateThroughEncode() {
    for (let i = 0; i < inputText.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            /** 
             * Set the Value for CiphedText from encode function return value(ciphed Letter), located below the Iterate function
             * @param {string} ciphedText "" string
             * @param {string} inputText User input Text
             * @param {number} i iteration i num
             * @param {number} j iteration j num
             * @param {number} key key to move the letters
             */
            ciphedText = encode(ciphedText, inputText, i, j, key);
        }
    }
    /** Output for fully ciphed Word after loop finished */
    console.log(ciphedText);
    /** assigns output from decodet("Klartext") Text to inputfield encodet("Verschlüsselter Text") in Frontend */ 
    document.getElementById("decodeText").value = ciphedText;
    /** set the ciphed Word as Value for the Outputfield wich gets used as Log, and add a newline for each new value in the Log */
    document.getElementById("output1").innerHTML = document.getElementById("output1").innerHTML + "\n" + ciphedText;
}

/** function to ciphe each Letter in lower and UpperCase (depends on user input Text) */
function encode(ciphedText, inputText, i, j, key) {
    /** check if Letter from inputText[index] is the same as Letter from Array[Index]*/
    if (inputText[i] == alphabet[j].toUpperCase()) {
        /** add the letterIndex the Keyvalue and save the new Index as Letter (toUppeCase Method for UpperCase Letters)*/
        ciphedText = ciphedText + alphabet[(j + key) % alphabet.length].toUpperCase();
    }
    /** same Logic for lowercase - just without the toUpperCase Method */
    else if (inputText[i] == alphabet[j]) {
        ciphedText = ciphedText + alphabet[(j + key) % alphabet.length];
    }
    /** return ciphed letter */
    return ciphedText;
}

/**
 * DECODE FUNCTION
 */
/** Function linked with onclick Event from Encode Button in Frontend to start after pressing Button */
const decodeCipher = function () {
    /** calls the Variables declared Globally */
    storedVariables();
    /** Get Inputfield for decode Text by ID */
    inputText = document.getElementById("decodeText").value;
    /** if the CeasarKey form user Input is greater than 0, call function to iterate through input Text and Array */
    if (key > 0) {
        iterateThroughDecode();
    }
};

/** Iterate through InputText and Array */
function iterateThroughDecode() {
    for (let i = 0; i < inputText.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            /** 
             * Set the Value for CiphedText from encode function return value(ciphed Letter), located below the Iterate function
             * @param {string} ciphedText
             * @param {string} inputText
             * @param {number} i
             * @param {number} j
             * @param {number} key 
             */
            ciphedText = decode(ciphedText, inputText, i, j, key);
        }
    }
    /** Output for fully ciphed Word after loop finished */
    console.log(ciphedText);
    /** assigns output from encodet("Verschlüsselter Text") to inputfield decodet("Klartext") in Frontend */
    document.getElementById("encodeText").value = ciphedText;
    /** set the ciphed Word as Value for the Outputfield wich gets used as Log, and add a newline for each new value in the Log */
    document.getElementById("reverseOutput").innerHTML = document.getElementById("reverseOutput").innerHTML + "\n" + ciphedText;
    //document.getElementById("output-log") // Hänge ein div-Elemnent an;
}

/** function to deciphe each Letter in lower and UpperCase (depends on user input Text) */
function decode(ciphedText, inputText, i, j, key) {
     /** check if Letter from inputText[index] is the same as Letter from Array[Index]*/
    if (inputText[i] == alphabet[j]) {
        // if j - key would bel less than 0, prevent it by adding 26, to stay in array range and at corret letter
        if (j - key < 0) {
            /** subtrahte the Keyvalue from the letterIndex and add Index of 26 to stay in Index Range */
            ciphedText = ciphedText + alphabet[(j - key) + alphabet.length];
        } else {
            /** subtrahte the Keyvalue from the letterIndex and calculate the Remainder as Index  */
            ciphedText = ciphedText + alphabet[(j - key) % alphabet.length];
        }
    } 
    /** Same Logic is used for UpperCase Letter detection */
    if (inputText[i] == alphabet[j].toUpperCase()) {
        if (j - key < 0) {
            ciphedText = ciphedText + alphabet[(j - key) + alphabet.length].toUpperCase();
        } else {
            ciphedText = ciphedText + alphabet[(j - key) % alphabet.length].toUpperCase();
        }
    }
    return ciphedText;
}