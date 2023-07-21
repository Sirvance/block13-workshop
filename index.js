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