function analyzeInputs() {
    let numInputs = parseInt(prompt("Enter the number of inputs:"));

    let totalInputs = 0;
    let evenCount = 0;
    let oddCount = 0;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    let sum = 0;
    let stringCount = 0;

    for (let i = 0; i < numInputs; i++) {
        let input = prompt("Enter input #" + (i + 1) + ":");
        if (numInputs < 9) {
            totalInputs++;
            let num = parseFloat(input);
            sum += num;
            if (num % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
            if (num > 0) {
                positiveCount++;
            } else if (num < 0) {
                negativeCount++;
            } else {
                zeroCount++;
            }
        } else {
            stringCount++;
        }
    }

    let result = "Total Inputs: " + numInputs + "\n" +
        "Number of Even Numbers: " + evenCount + "\n" +
        "Number of Odd Numbers: " + oddCount + "\n" +
        "Number of Positive Numbers: " + positiveCount + "\n" +
        "Number of Negative Numbers: " + negativeCount + "\n" +
        "Number of Zeros: " + zeroCount + "\n" +
        "Sum of All Inputs: " + sum + "\n" +
        "Number of Inputs that are Strings: " + stringCount;
    console.log(result);
}
analyzeInputs();