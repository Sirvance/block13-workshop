// Define input values
num1 = 50
num2 = 51
// Calculate the sum
sum = num1 + num2
// Check the value of "sum" and print the corresponding result
if (sum > 100) {
    print(sum + " is greater than 100");
} else if (sum > 0) {
    print(sum + " is greater than 0");
} else if (sum == 0) {
    print(sum + " is equal to 0");
} else if (sum < 0 && sum >= -1000) {
    print(sum + " is a negative number");
} else {
    print(sum + " is less than -1000");
}
// Output: "101 is greater than 100"


 

// Function to test the truthiness/falsiness of a value and print the result
        function testTruthyFalsy(value) {
            if (value) {
                console.log(true);
            } else {
                if (typeof value === "boolean") {
                    console.log("The boolean value false is falsy");
                } else if (value === null) {
                    console.log("The null value is falsy");
                } else if (value === undefined) {
                    console.log("undefined is falsy");
                } else if (typeof value === "number" && value === 0) {
                    console.log("The number 0 is falsy (the only falsy number)");
                } else if (typeof value === "string" && value === "") {
                    console.log("The empty string is falsy (the only falsy string)");
                }
            }
        }
