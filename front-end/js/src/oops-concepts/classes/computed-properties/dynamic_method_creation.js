class Calculator {
    constructor(operations) {
        operations.forEach((op) => {
            this[op] = function (a, b) {
                switch (op) {
                    case 'add':
                        return a + b;
                    case 'subtract':
                        return a - b;
                    // ... other operations
                }
            }
        });
    }
}

let calc = new Calculator(['add', 'subtract']);
console.log(calc.add(1, 2));
console.log(calc.subtract(5, 1)); 
