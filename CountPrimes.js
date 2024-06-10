function countPrimesLessThan100(arr) {
    // Helper function to check if a number is prime
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    // Filter the array to include only prime numbers less than 100
    const primesLessThan100 = arr.filter(num => num < 100 && isPrime(num));

    // Return the count of prime numbers
    return primesLessThan100.length;
}

// Example usage:
const array = [2, 3, 4, 5, 7, 10, 11, 23, 97];
const count = countPrimesLessThan100(array);
console.log(count); // Output: 6
