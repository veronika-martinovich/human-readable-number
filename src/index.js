module.exports = function toReadable(number) {
    let basicNumbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];
    let tenthNumbers = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    if (number <= 19) return basicNumbers[number];
    if (number >= 20 && number < 100) {
        if (number % 10 == 0) {
            return `${tenthNumbers[number / 10 - 2]}`;
        } else {
            return `${tenthNumbers[Math.floor(number / 10) - 2]} ${
                basicNumbers[number % 10]
            }`;
        }
    }
    if (number >= 100) {
        if (number % 100 == 0) {
            return `${basicNumbers[Math.floor(number / 100)]} hundred`;
        } else if (number % 100 <= 19) {
            return `${basicNumbers[Math.floor(number / 100)]} hundred ${
                basicNumbers[number % 100]
            }`;
        } else if (number % 10 == 0) {
            return `${basicNumbers[Math.floor(number / 100)]} hundred ${
                tenthNumbers[(number % 100) / 10 - 2]
            }`;
        } else if (number % 100 > 19) {
            return `${basicNumbers[Math.floor(number / 100)]} hundred ${
                tenthNumbers[Math.floor((number % 100) / 10) - 2]
            } ${basicNumbers[(number % 100) % 10]}`;
        }
    }
};
