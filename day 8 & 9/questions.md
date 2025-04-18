<!--  

 # 📜 JavaScript Practice Questions & Solutions

This document contains **JavaScript questions with detailed solutions and explanations.** Click on any question to reveal the answer. 🚀  

---

## **1️⃣ Basic Operations & Loops**

<details>
  <summary><strong>1. Calculate the sum of all numbers in an array. (Hint: Use `reduce()` method)</strong></summary>
  
  ```js
  var arr = [1,2,3,4,5];
  var sum = arr.reduce((acc, num) => acc + num, 0);
  console.log(sum);
  ```
  
  **Explanation:**
  - The `reduce()` method iterates over the array, taking two parameters: an accumulator (`acc`) and the current number (`num`).
  - The accumulator starts at `0` (as specified after the comma).
  - Each number is added to `acc`, and the final sum is returned.
</details>

<details>
  <summary><strong>2. Print numbers from 20 to 1 using a `while` loop and a `for` loop. (Hint: Use decrementing loops)</strong></summary>
  
  ```js
  var i = 20;
  while (i > 0) {
      console.log(i);
      i--;
  }

  for (i = 20; i > 0; i--) {
      console.log(i);
  }
  ```
  
  **Explanation:**
  - The `while` loop checks if `i` is greater than `0` and decrements it after each iteration.
  - The `for` loop initializes `i = 20`, decrements it, and prints until `i` becomes `0`.
</details>

<details>
  <summary><strong>3. Print multiples of 12 up to 120 using a loop. (Hint: Increment by 12 in each iteration)</strong></summary>
  
  ```js
  var i = 12;
  while (i < 121) {
      console.log(i);
      i += 12;
  }
  ```
  
  **Explanation:**
  - The loop starts from `12` and increments `i` by `12` in each iteration.
  - It stops when `i` reaches `120`.
</details>

---

## **2️⃣ Working with Strings**

<details>
  <summary><strong>4. Iterate over a string "JavaScript" using `for...of`. (Hint: Use a loop to print each character)</strong></summary>
  
  ```js
  var s = "JavaScript";
  for (var char of s) {
      console.log(char);
  }
  ```
  
  **Explanation:**
  - The `for...of` loop iterates over each character in the string `s`.
  - Each character is printed on a new line.
</details>

---

## **3️⃣ Arrays & Manipulations**

<details>
  <summary><strong>5. Remove duplicate values from an array. (Hint: Use `Set` to filter unique values)</strong></summary>
  
  ```js
  var arr = [1,2,3,2,4,5,3,4,5,6,7];
  var uniqueArr = [...new Set(arr)];
  console.log(uniqueArr);
  ```
  
  **Explanation:**
  - The `Set` object stores only unique values.
  - Spreading `new Set(arr)` into an array removes duplicates.
</details>

<details>
  <summary><strong>6. Find the second largest number in an array. (Hint: Sort the array in descending order and pick the second element)</strong></summary>
  
  ```js
  var arr = [1,4,2,6,5,7,8,3,23,99,2,5,3];
  console.log([...new Set(arr)].sort((a, b) => b - a)[1]);
  ```
  
  **Explanation:**
  - `Set` removes duplicates.
  - The array is sorted in descending order (`b - a`).
  - The second element `[1]` is the second largest number.
</details>

---

## **4️⃣ Advanced Array Manipulations**

<details>
  <summary><strong>7. Find the most frequent element in an array. (Hint: Use an object to count occurrences)</strong></summary>
  
  ```js
  var arr = [3,4,1,3,4,6,7];
  let frequency = {};

  arr.forEach(num => {
      frequency[num] = (frequency[num] || 0) + 1;
  });
  
  let mostFrequent = Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
  console.log(mostFrequent);
  ```
  
  **Explanation:**
  - An empty object `frequency` keeps track of how many times each number appears.
  - The `forEach` loop increments counts for each number.
  - `reduce()` finds the most frequent key.
</details>

<details>
  <summary><strong>8. Demonstrate the use of `reduce`. (Hint: `reduce` accumulates values to return a single result)</strong></summary>
  
  ```js
  var arr = [1,2,3,4,5];
  var reducedSum = arr.reduce(function(accumulator, key) { return accumulator + key; }, 0);
  var reducedProduct = arr.reduce(function(accumulator, key) { return accumulator * key; }, 1);
  console.log(reducedSum, reducedProduct);
  ```
  
  **Explanation:**
  - `reduce()` starts with an initial value (`0` for sum, `1` for product).
  - It iterates through each number and accumulates the result.
</details>

---

This document provides **clear explanations** and **collapsible answers** for easy reference. Happy coding! 🚀 -
  -->



# 🌟 JavaScript Practice Questions & Solutions

This document contains **JavaScript questions with detailed solutions and explanations.** Click on any question to reveal the answer. 🚀  

---

## **1 Loops & Iterations**

<details>
  <summary><strong>1. Print numbers from 50 to 1 using a `for` loop and a `while` loop. (Hint: Use decrementing loops)</strong></summary>
  
  ```js
  var i = 50;
  while (i > 0) {
      console.log(i);
      i--;
  }

  for (i = 50; i > 0; i--) {
      console.log(i);
  }
  ```
  
  **Explanation:**
  - The `while` loop runs as long as `i` is greater than `0` and decrements `i` each time.
  - The `for` loop initializes `i = 50`, decrements it in each iteration, and prints the values.
</details>

<details>
  <summary><strong>2. Print multiples of 8 up to 80 using a loop. (Hint: Increment by 8 in each iteration)</strong></summary>
  
  ```js
  var i = 8;
  while (i <= 80) {
      console.log(i);
      i += 8;
  }
  ```
  
  **Explanation:**
  - The loop starts at `8` and increments by `8` each time until it reaches `80`.
</details>

---

## **2 Arrays & Methods**

<details>
  <summary><strong>3. Iterate over an array using `forEach` and print each value. (Hint: Use `forEach` method)</strong></summary>
  
  ```js
  var arr = [10, 20, 30, 40, 50];
  arr.forEach(function(value) {
      console.log(value);
  });
  ```
  
  **Explanation:**
  - `forEach()` iterates over each element in the array and executes the provided function.
</details>

<details>
  <summary><strong>4. Create a new array where each element is doubled using `map`. (Hint: `map` returns a new array)</strong></summary>
  
  ```js
  var arr = [1, 2, 3, 4, 5];
  var doubledArr = arr.map(function(value) {
      return value * 2;
  });
  console.log(doubledArr);
  ```
  
  **Explanation:**
  - The `map()` method applies the function to each element and returns a new array with modified values.
</details>

<details>
  <summary><strong>5. Filter numbers greater than 10 from an array. (Hint: Use `filter` method)</strong></summary>
  
  ```js
  var arr = [5, 10, 15, 20, 25];
  var filteredArr = arr.filter(function(value) {
      return value > 10;
  });
  console.log(filteredArr);
  ```
  
  **Explanation:**
  - The `filter()` method returns a new array with elements that satisfy the given condition.
</details>

---

## **3 Reduce Method**

<details>
  <summary><strong>6. Calculate the sum of an array using `reduce`. (Hint: Accumulate values using `reduce`)</strong></summary>
  
  ```js
  var arr = [1, 2, 3, 4, 5];
  var sum = arr.reduce(function(acc, key) {
      return acc + key;
  }, 0);
  console.log(sum);
  ```
  
  **Explanation:**
  - `reduce()` takes an accumulator and a current value, adding each number to the accumulator.
</details>

<details>
  <summary><strong>7. Find the product of all numbers in an array using `reduce`. (Hint: Multiply instead of adding)</strong></summary>
  
  ```js
  var arr = [1, 2, 3, 4, 5];
  var product = arr.reduce(function(acc, key) {
      return acc * key;
  }, 1);
  console.log(product);
  ```
  
  **Explanation:**
  - Similar to summing, but instead multiplies each number to accumulate the total product.
</details>

---

## **4 String Manipulation**

<details>
  <summary><strong>8. Iterate over a string "JavaScript" using `for...of`. (Hint: Use a loop to print each character)</strong></summary>
  
  ```js
  var str = "JavaScript";
  for (var char of str) {
      console.log(char);
  }
  ```
  
  **Explanation:**
  - The `for...of` loop iterates over each character in the string and prints it.
</details>

<details>
  <summary><strong>9. Reverse a string without using `.reverse()`. (Hint: Use a loop to construct the reversed string)</strong></summary>
  
  ```js
  var str = "JavaScript";
  var reversedStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
  }
  console.log(reversedStr);
  ```
  
  **Explanation:**
  - Starts from the last character and appends it to a new string until all characters are reversed.
</details>

---

## **5 Advanced Array Manipulations**

<details>
  <summary><strong>10. Find the second largest number in an array. (Hint: Sort the array and pick the second element)</strong></summary>
  
  ```js
  var arr = [10, 4, 2, 6, 8, 99, 23];
  console.log([...new Set(arr)].sort((a, b) => b - a)[1]);
  ```
  
  **Explanation:**
  - `Set` removes duplicates.
  - The array is sorted in descending order.
  - The second element `[1]` is the second largest number.
</details>

<details>
  <summary><strong>11. Find the most frequent element in an array. (Hint: Use an object to count occurrences)</strong></summary>
  
  ```js
  var arr = [3, 4, 1, 3, 4, 6, 7];
  let frequency = {};
  arr.forEach(num => {
      frequency[num] = (frequency[num] || 0) + 1;
  });
  let mostFrequent = Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
  console.log(mostFrequent);
  ```
  
  **Explanation:**
  - An object keeps track of how many times each number appears.
  - The `reduce()` function determines the most frequent number.
</details>

---

This document provides **clear explanations** and **collapsible answers** for easy reference. Happy coding! 🚀

