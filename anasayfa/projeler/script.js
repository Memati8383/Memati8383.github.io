document.addEventListener("DOMContentLoaded", function() {
    const inputText = document.getElementById("inputText");
    const convertButton = document.getElementById("convertButton");
    const outputText = document.getElementById("outputText");

    convertButton.addEventListener("click", function() {
        const text = inputText.value.trim();
        if (text === "") {
            alert("Lütfen bir metin girin.");
            return;
        }

        const morseCode = textToMorse(text);
        outputText.textContent = morseCode;
    });

    function textToMorse(text) {
        const morseCodeMap = {
            "A": ".-",
            "B": "-...",
            "C": "-.-.",
            "D": "-..",
            "E": ".",
            "F": "..-.",
            "G": "--.",
            "H": "....",
            "I": "..",
            "J": ".---",
            "K": "-.-",
            "L": ".-..",
            "M": "--",
            "N": "-.",
            "O": "---",
            "P": ".--.",
            "Q": "--.-",
            "R": ".-.",
            "S": "...",
            "T": "-",
            "U": "..-",
            "V": "...-",
            "W": ".--",
            "X": "-..-",
            "Y": "-.--",
            "Z": "--..",
            "1": ".----",
            "2": "..---",
            "3": "...--",
            "4": "....-",
            "5": ".....",
            "6": "-....",
            "7": "--...",
            "8": "---..",
            "9": "----.",
            "0": "-----",
            ".": ".-.-.-",
            ",": "--..--",
            "?": "..--..",
            "'": ".----.",
            "!": "-.-.--",
            "/": "-..-.",
            "(": "-.--.",
            ")": "-.--.-",
            "&": ".-...",
            ":": "---...",
            ";": "-.-.-.",
            "=": "-...-",
            "+": ".-.-.",
            "-": "-....-",
            "_": "..--.-",
            '"': ".-..-.",
            "$": "...-..-",
            "@": ".--.-."
        };

        text = text.toUpperCase();
        let morseCode = "";

        if (/^[.\- ]+$/.test(text)) { // Eğer gelen girdi sadece nokta, çizgi ve boşluk içeriyorsa Morse koddur.
            return text.split(" ").map(symbol => {
                return Object.keys(morseCodeMap).find(key => morseCodeMap[key] === symbol) || " ";
            }).join("");
        } else { // Eğer gelen girdi harf ve rakamlardan oluşuyorsa metindir.
            return text.toUpperCase().split("").map(char => {
                return morseCodeMap[char] || " ";
            }).join(" ");
        }
    }
});