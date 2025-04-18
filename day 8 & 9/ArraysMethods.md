


## 🔥 **1. `forEach()` – Just Loops, Doesn’t Return Anything**

### ✅ What it does:
- Loops through an array and **executes a function on each item**.
- **Does NOT return a new array or any value**.
- Just **performs an action** like printing, updating a database, etc.

### 🔹 Example:
```javascript
let numbers = [1, 2, 3];

numbers.forEach(function(num) {
    console.log(num * 2);  // Just prints, does not return
});
```

### ⚡ Key Difference from Similar Methods:
- **`forEach` vs `map`**:  
  `forEach` **does not return a new array**, but `map` does.

### ❓ When to use:
✔️ When you **just need to execute a function** on each element.  
❌ When you **need a new array** → use `map()` instead.  

**💡 Real-world example:**  
Updating product prices in a database:
```javascript
products.forEach(product => {
    product.price += 5;  // Increases price but does not return anything
});
```

---

## 🌟 **2. `map()` – Creates a New Transformed Array**

### ✅ What it does:
- Loops through an array.
- **Applies a function to each element**.
- **Returns a new array with modified values**.

### 🔹 Example:
```javascript
let numbers = [1, 2, 3];

let doubled = numbers.map(function(num) {
    return num * 2;
});

console.log(doubled);  // [2, 4, 6]
```

### ⚡ Key Difference from Similar Methods:
- **`map` vs `forEach`**:  
  - `map` **returns a new array**.  
  - `forEach` does not return anything.

### ❓ When to use:
✔️ When you **want to transform each element** into something new.  
❌ When you **don’t need a new array** → use `forEach()` instead.  

**💡 Real-world example:**  
Creating a list of product names from an array of product objects:
```javascript
let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 }
];

let productNames = products.map(product => product.name);
console.log(productNames);  // ["Laptop", "Phone"]
```

---

## 🎯 **3. `filter()` – Selects Specific Items**

### ✅ What it does:
- Loops through an array.
- **Keeps only the elements that match a condition**.
- **Returns a new filtered array**.

### 🔹 Example:
```javascript
let numbers = [1, 2, 3, 4, 5];

let evens = numbers.filter(function(num) {
    return num % 2 === 0; // Only keep even numbers
});

console.log(evens);  // [2, 4]
```

### ⚡ Key Difference from Similar Methods:
- **`filter` vs `map`**:  
  - `map` modifies **every** element.  
  - `filter` **keeps some elements and removes others**.

### ❓ When to use:
✔️ When you need **only specific items** from an array.  
❌ When you need to **modify every item** → use `map()` instead.  

**💡 Real-world example:**  
Filtering products that are in stock:
```javascript
let products = [
    { name: "Laptop", inStock: true },
    { name: "Phone", inStock: false }
];

let availableProducts = products.filter(product => product.inStock);
console.log(availableProducts);  // [{ name: "Laptop", inStock: true }]
```

---

## 💪 **4. `reduce()` – Combines Elements Into One Value**

### ✅ What it does:
- Loops through an array.
- **Reduces all elements to a single value** (sum, average, etc.).
- **Returns that single value**.

### 🔹 Example (Sum of numbers):
```javascript
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);

console.log(sum);  // 15
```

### ⚡ Key Difference from Similar Methods:
- **`reduce` vs `map`**:  
  - `reduce` **returns a single value**.  
  - `map` returns a **new array**.

### ❓ When to use:
✔️ When you **need a final result** (sum, max, average, etc.).  
❌ When you **need a new array** → use `map()` instead.  

**💡 Real-world example:**  
Calculating the total price of items in a cart:
```javascript
let cart = [
    { item: "Laptop", price: 1000 },
    { item: "Phone", price: 500 }
];

let totalPrice = cart.reduce((total, product) => total + product.price, 0);
console.log(totalPrice);  // 1500
```

---

## 🔎 **5. `find()` – Returns the First Match**

### ✅ What it does:
- Loops through an array.
- **Stops and returns the first matching element**.

### 🔹 Example:
```javascript
let numbers = [10, 20, 30, 40];

let firstBigNumber = numbers.find(function(num) {
    return num > 25;  // Finds the first number greater than 25
});

console.log(firstBigNumber);  // 30
```

---

## ✅ **When to Use Which Method?**
| Situation | Use This |
|-----------|---------|
| Just looping | `forEach()` |
| Need a new array with changed values | `map()` |
| Need a new array with only some items | `filter()` |
| Need a single result (sum, max, etc.) | `reduce()` |
| Need the first match only | `find()` |
| Need the position of the first match | `findIndex()` |

---

### 🚀 **Final Summary**
- ✅ Use `map()` when you need a **new array**.
- ✅ Use `filter()` when you need **some** elements.
- ✅ Use `reduce()` when you need **one final value**.
- ✅ Use `forEach()` when you **just want to loop**.
- ✅ Use `find()` when you **only need one match**.
- ✅ Use `findIndex()` when you **need the position of a match**.

---

## 🆕 Additional Methods:
- `some()`: Checks if **at least one** item meets a condition.
- `every()`: Checks if **all** items meet a condition.
- `includes()`: Checks if a value **exists** in an array.
- `sort()`: Sorts an array (mutates original array).
- `flat()`: Flattens nested arrays.
- `flatMap()`: Maps & flattens results in one step.
- `fill()`: Replaces all items with a specific value.

More details coming soon! 🚀

