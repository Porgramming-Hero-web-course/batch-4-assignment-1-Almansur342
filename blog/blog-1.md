#Understanding Union and Intersection Types in     TypeScript.

TypeScript has become a go-to tool for developers because it adds clarity, safety, and flexibility to JavaScript. Among its many features, Union and Intersection types stand out as powerful tools to write expressive and reusable code.

In this post, we’ll break down what Union and Intersection types are, why they’re important, and how you can use them in your TypeScript projects. Along the way, we’ll look at simple examples to keep things relatable and easy to follow.



What Are Union Types?
Union Types in TypeScript allows a variable to hold more than one type of value. Instead of being locked into just one type, it can hold different types of values. This is done using the | (pipe) symbol, which acts like a bridge between types. Essentially, it’s saying, “This variable can be either this type or that type.”


Why Are Union Types Important?
Union types add flexibility to your code without sacrificing safety. Imagine working with APIs, user input, or external data—these often return different kinds of values based on the situation. For example, an API might return a string on success and an error object on failure. Instead of using a vague type like any, union types allow you to clearly define the possible options.


By using union types, you can:
.Make your code more adaptable to real-world scenarios.
.Reduce bugs by catching type mismatches early during development.
.Write cleaner, more expressive code.


Lets see an example of union type:
type PaymentMethod = "cash" | "credit" | "paypal";

function processPayment(amount: number, method: PaymentMethod): void {
  if (method === "cash") {
    console.log(`Processing a cash payment of $${amount}`);
  } else if (method === "credit") {
    console.log(`Processing a credit card payment of $${amount}`);
  } else if (method === "paypal") {
    console.log(`Processing a PayPal payment of $${amount}`);
  } else {
    console.log("Invalid payment method!");
  }
}

processPayment(100, "cash"); 
processPayment(200, "credit"); 
processPayment(50, "paypal"); 
processPayment(100, "bitcoin"); 


Explanation:
The Union Type: The PaymentMethod type specifies that a payment method can only be "cash", "credit", or "paypal". Any other value will throw an error.
Flexibility with Safety: The processPayment function allows different payment methods while ensuring you can’t accidentally pass an invalid method like "bitcoin".





What Are Intersection Types?
In TypeScript, an Intersection Type combines two or more types into one. Unlike union types, which let a variable be one type or another, an intersection type means the variable must include all the features of the combined types.


Why Are Intersection Types Useful?
Intersection types are handy when you need a type that combines properties from different types or interfaces. They make sure the final object includes everything required by all the combined types. This is helpful for creating flexible but strict type definitions that ensure your code works correctly.


By using intersection types, you can:
.Combine multiple types into one for stricter type definitions.
.Ensure your objects meet all requirements from combined types.
.Reuse and extend existing types for cleaner, more maintainable code.
.Create flexible type combinations without duplicating code.
.Improve type safety by enforcing all properties and methods are present.



Lets see an example of union type:
type Vehicle = {
  wheels: number;
  fuel: string;
};

type Boat = {
  hasSails: boolean;
  capacity: number;
};
type AmphibiousVehicle = Vehicle & Boat;
const amphibiousCar: AmphibiousVehicle = {
  wheels: 4,
  fuel: "diesel",
  hasSails: false,
  capacity: 6
};

console.log(amphibiousCar);

Explanation:
The AmphibiousVehicle type is an intersection of Vehicle and Boat.
The amphibiousCar object includes properties from both Vehicle (wheels and fuel) and Boat (hasSails and capacity).
This demonstrates how you can use intersection types to define a type that combines features from two distinct categories, ensuring the object adheres to both.




In conclusion, mastering union and intersection types in TypeScript isn't just about writing flexible code—it's about crafting solutions that adapt to real-world needs. These tools empower you to handle diverse scenarios, ensuring your applications are both robust and maintainable.