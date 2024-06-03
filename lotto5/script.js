function otoslotto() {
    let numbers = new Set();
    while (numbers.size < 5) {
        numbers.add(Math.floor(Math.random() * 90) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}
console.log(otoslotto());
