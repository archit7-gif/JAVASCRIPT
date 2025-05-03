

1. Creating Objects Using Constructor Functions
Write a constructor function called Car that creates an object with make, model, and year properties. Instantiate a Car object and log its properties.

2. Using this Inside a Constructor Function
Write a constructor function called Person that takes name and age as parameters. Inside the constructor, use this to assign values to the object's properties. Create an instance and log the object.

3. Methods Inside Constructor Functions
Create a Book constructor function that accepts title, author, and price as parameters. Add a method to Book that logs a message like "The book 'title' by author costs price." for any instance of Book.

4. Using Prototypes to Add Methods
Create a constructor function Animal that accepts name and species. Add a method to the prototype of Animal that logs a sentence like "The animal is a [species] named [name]." Test this with a few instances.

5. Defining Methods Using Classes
Convert the Animal constructor function (from the previous example) into a class. Ensure that the class has a method that logs the species and name of the animal.

6. Object Prototypes and Shared Properties
Define a constructor function Car with make, model, and year properties. Add a method to the prototype of Car that prints the full description of the car (e.g., make model year). Then, create multiple instances of Car and test the method.

7. Prototype Chain and Property Lookup
Define a constructor function Person with a name property. Add a method to the prototype that logs "Hello, my name is [name].". Then, add a property age directly on an instance of Person. Log the age property and the method.

8. Encapsulation with Constructor Functions
Create a BankAccount constructor function with properties for balance and ownerName. Add getter and setter methods to manipulate and view the balance (ensure that negative balances aren't allowed).

9. Inheritance Using Prototypes
Create a Vehicle constructor function with properties like make and model. Then, create a Car constructor function that inherits from Vehicle and adds a doors property. Use Object.create() to inherit properties and methods. Log the properties of a Car instance.

10. Using Classes with Inheritance
Convert the previous Vehicle and Car constructors to ES6 class syntax. Implement inheritance using the extends keyword. Create an instance of Car and test its inherited properties and methods.

11. Adding Methods to Prototype
Add a greet method to the prototype of a Person constructor. The method should log "Hello, my name is [name]." Create a few instances of Person and call greet on them.

12. Using the new Keyword and Constructor Functions
Define a Person constructor with firstName and lastName. Use the new keyword to create instances of the Person and log their full names (firstName + lastName).

13. Factory Method for Creating Instances
Create a Circle constructor function with radius. Add a method to calculate and return the area of the circle. Write a factory function called createCircle that returns a new Circle object when called.

14. Overriding Prototype Methods
Add a method to the prototype of a Person constructor called introduce that logs "Hello, I am [name]." Override this method for one specific instance by setting its own introduce method that logs "Hi, I'm [name], pleased to meet you!". Test this behavior.

15. Prototype Property Sharing
Create a constructor function Book with a property price. Use the prototype to set the price to 20. Create multiple instances of Book and modify the price for each instance. Log the price for all instances and explain the behavior.