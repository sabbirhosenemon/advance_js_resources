/*
========================================== FP vs OOP ===================================================
NOTE:
### Functional Programing Major principle:
1 task
return statement
pure
no shared state
immutable state
composable
predictable

### Object Oriented Programming vs Functional Programming
inheritance: Inherit from a big (general) class and modify that class extending a new small* class
composition: composing small functions and making big functionalities.

Humans are bad at predicting the future. So at the time of designing our class, we can't predict everything before. 
So our parent class may change in future. This causes problems sometimes. Sometimes at the time of inheriting, 
we just need small functionalities from a parent class. But we had to inherit the whole class. classes are tightly coupled. 
creates problems when parent-child hierarchy changes for some reason. and we had to repeat ourselves sometimes to solve the issue.

On the other hand, functions are more flexible. we can build small simple functions easily. And it has almost no effect on 
future changes.

### Goal to write good code:
1. Clear + Understandable
2. Easy to extend
3. Easy to maintain
4. Memory efficient
5. DRY

### FP vs OOP
1. many operations on fixed data vs few operations on common data
2. stateless: don't change the state. just operate on data. states are immutable vs stateful: change the state of the program 
like when extending object we change the state of the parent class.
3. pure: no side effects, so more predictable code. no effect on data outside of the function. vs impure: has side effects. 
methods manipulate the internal state.

for the purity on FP, we can run our functions on multiple processors as it has no side effects. we can't do that in OOP cause 
it has side effects. FP is very effective for working with big data, ML, and AI. OOP is good for designing large applications 
like the game characters. In OOP we put data and functions in the same place. it helps us to understand our program. 
In FP functions say data and operations are different things and they should be kept separate.
*/

// Asynchronous JavaScript ==========================================================
const prom = new Promise((resolve, reject) => {
  if (true) {
    resolve("Success prom");
  } else {
    reject("Failure");
  }
});

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success 2");
  }, 2000);
});

const prom3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success 3");
  }, 5000);
});

// for resolving array of promises all at once
Promise.all([prom, prom2, prom3]).then((result) => {
  console.log(result);
});

prom
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

// this returns an array of promises
console.log(urls.map((url) => fetch(url).then((resp) => resp.json())));

// for resolving array of promises all at once
Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json())))
.then(
  (resp) => {
    resp.map((data) => console.log(data));
  } 
);

console.log("After Promise.all");