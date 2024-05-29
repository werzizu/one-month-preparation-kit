function invertBits(numbers) {
    return numbers.map(num => ~num >>> 0); // Invert bits and convert to unsigned 32-bit integer
}

// Sample Input
const input = [2147483647, 1, 0];
const output = invertBits(input);

// Print each element of the resulting list on a new line
output.forEach(element => console.log(element));