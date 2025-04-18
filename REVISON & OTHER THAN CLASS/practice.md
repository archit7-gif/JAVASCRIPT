
### JavaScript Functions Questions (With Hints & Explanations)

#### **Easy Level**

1. **Basic Function Call**  
   Write a function `greet` that prints "Hello, World!" when called.  
   **Hint:** Use `console.log()` inside the function.

2. **Function with Parameters**  
   Write a function `greetUser` that takes a name as a parameter and prints "Hello, [name]!".  
   **Hint:** Use template literals (``Hello, ${name}!``).

3. **Function Returning Value**  
   Create a function `add` that takes two numbers as arguments and returns their sum.  
   **Hint:** Use `return` instead of `console.log()`.

4. **Function Expression**  
   Convert the `add` function into a function expression.  
   **Hint:** Store the function inside a variable.

5. **Arrow Function**  
   Rewrite the `add` function as an arrow function.  
   **Hint:** Use `=>` syntax.

6. **Implicit Return in Arrow Function**  
   Write an arrow function `multiply` that takes two numbers and returns their product in one line.  
   **Hint:** Remove `{}` and `return` for implicit return.

7. **Default Parameters**  
   Create a function `power` that takes a number and an exponent (default to 2) and returns the power.  
   **Hint:** Use default parameters in function definition.

8. **Function Hoisting**  
   Write a function normally and call it before declaring it to see hoisting in action.  
   **Hint:** Function declarations are hoisted, but function expressions are not.

#### **Intermediate Level**

9. **Higher-Order Function (HOF) - 1**  
   Write a function `operate` that takes two numbers and a function as parameters. The function should apply the given function to the numbers.  
   **Hint:** The third parameter should be a function like `add` or `multiply`.

10. **Higher-Order Function (HOF) - 2**  
    Write a function `applyTwice` that takes a function and a number, and applies the function to the number twice.  
    **Hint:** Call the function inside itself twice.

11. **Callback Function**  
    Modify `operate` so that it calls the provided function inside it.  
    **Hint:** Use `fn(a, b)` inside `operate`.

12. **Closure (Lexical Scope) - 1**  
    Write a function `outer` that contains another function `inner`. The `inner` function should access a variable from `outer`.  
    **Hint:** Inner function can use variables declared in `outer`.

13. **Closure (Lexical Scope) - 2**  
    Modify `outer` to return `inner` and store it in a variable before calling it.  
    **Hint:** Return the `inner` function instead of calling it immediately.

14. **Function Currying - 1**  
    Write a function `curriedSum` that takes one number first, then returns another function that takes a second number and returns their sum.  
    **Hint:** Use function nesting and return a function inside another.

15. **Function Currying - 2**  
    Modify `curriedSum` to support three parameters `(a)(b)(c)`.  
    **Hint:** Return a function at each step.

16. **Hoisting in Function Expressions**  
    Declare a function expression and try calling it before declaration. Check if it works.  
    **Hint:** Function expressions are not hoisted.

17. **Self-Invoking Function**  
    Write a self-invoking function that prints "I run immediately!".  
    **Hint:** Wrap function in parentheses and call it immediately.

18. **Function as Return Value**  
    Write a function `createMultiplier` that returns another function that multiplies a number by a given factor.  
    **Hint:** Return an inner function that uses the outer function’s parameter.

19. **Debouncing Function**  
    Write a function `debounce` that limits how often a function can execute within a given time.  
    **Hint:** Use `setTimeout` to delay execution.

20. **Throttle Function**  
    Write a function `throttle` that ensures a function executes at most once in a given time frame.  
    **Hint:** Use a flag variable to track execution.

21. **Recursion - Factorial**  
    Write a function `factorial` that calculates the factorial of a number using recursion.  
    **Hint:** Base case is `n === 1`, recursive case is `n * factorial(n - 1)`.

22. **Recursion - Fibonacci**  
    Write a function `fibonacci` that returns the nth Fibonacci number using recursion.  
    **Hint:** Base cases are `fib(0) = 0` and `fib(1) = 1`, recursive case is `fib(n-1) + fib(n-2)`.

23. **Memoization**  
    Optimize `fibonacci` using memoization to avoid redundant calculations.  
    **Hint:** Store computed results in an object and reuse them.

24. **Function Binding**  
    Write a function `bindExample` that binds a method to a specific object.  
    **Hint:** Use `.bind(this)` to create a bound function.

25. **Function Execution Context**  
    Write a function that logs `this` in different execution contexts: global, inside a function, and inside an arrow function.  
    **Hint:** Arrow functions do not have their own `this`.

---

Ye sare questions tumhare padhe hue **functions** ke topics cover kar rahe hain. Pehle **easy**, phir **intermediate** diye hain. Har question ke saath **hint ya explanation** bhi diya hai taaki samajhne me dikkat na ho.🔥

Shuru karo aur batao agar kisi question me dikkat aaye! 💪😎




















# Function Returning Another Function – Practice Questions

This document contains practice questions to help you master the concept of functions returning another function in JavaScript. Each question includes a brief description along with a hint.

---

## 1. Custom Greeting Function

**Question:**  
Write a function `greet` that accepts a name and returns another function. When the returned function is invoked, it should print `"Hello, <name>!"`.

**Hint:**  
Use a closure to capture the provided name.

---

## 2. Multiplier Function

**Question:**  
Create a function `multiplyBy` that takes a number (`factor`) and returns a new function. The returned function should accept a number and return the product of that number and the given factor.

**Hint:**  
For example, `multiplyBy(5)` should return a function that multiplies its argument by 5.

---

## 3. Power Function

**Question:**  
Build a function `powerOf` that accepts an exponent and returns a new function. When this new function is called with a base, it returns the base raised to that exponent.

**Hint:**  
For instance, `powerOf(2)(3)` should return 8 (because 2³ = 8).

---

## 4. Counter with Closure

**Question:**  
Write a function `counter` that returns a function. Each time the returned function is called, it should increment an internal counter and print its value.

**Hint:**  
Use a variable inside `counter` to store the count.

---

## 5. Full Name Builder

**Question:**  
Create a function `getFullName` that takes a first name and returns a function. The returned function should accept a last name and return the full name by concatenating the first and last names with a space.

**Hint:**  
For example, `getFullName("Rahul")("Sharma")` should return `"Rahul Sharma"`.

---

## 6. Adder Function

**Question:**  
Write a function `createAdder` that takes a number and returns a function. The returned function, when called with another number, returns the sum of the two numbers.

**Hint:**  
For example, `createAdder(10)(5)` should return 15.

---

## 7. Operation Function

**Question:**  
Build a function `operation` that accepts an operator as a string (like `"+"`, `"-"`, `"*"`, or `"/"`) and returns a new function. The returned function should take two numbers and perform the specified operation on them.

**Hint:**  
Use conditional logic inside the returned function to decide which arithmetic operation to perform. For example, `operation('+')(4,5)` should return 9.

---

## 8. Multiplication Table Generator

**Question:**  
Write a function `generateMultiplier` that accepts a number and returns a new function. When the returned function is invoked (with no arguments), it should print the multiplication table of that number (e.g., from number × 1 up to number × 10).

**Hint:**  
Use a loop inside the returned function to generate and print the table.

---

## 9. Custom Message Creator

**Question:**  
Create a function `createMessage` that takes a greeting (for example, `"Hello"` or `"Good Morning"`) and returns a new function. The returned function should accept a name and return a complete greeting message.

**Hint:**  
For example, `createMessage("Hello")("Amit")` should return `"Hello Amit"`.

---

## 10. Currency Converter

**Question:**  
Write a function `currencyConverter` that takes an exchange rate and returns a new function. The returned function should accept an amount and convert it using the given exchange rate.

**Hint:**  
For example, `currencyConverter(0.013)(1000)` should return the converted amount (i.e., 13 if the rate is from INR to USD).

---

Happy coding and practice!
