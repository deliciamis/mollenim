let currentId = 0;

function generateId() {
    return ++currentId;
}

// Example usage:
let newId1 = generateId(); // 1
let newId2 = generateId(); // 2
console.log(newId1, newId2); // Output: 1 2
