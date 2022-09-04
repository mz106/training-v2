"use strict";

//scope

// Types: global
//        block

// On the creation phase, the JS interpreter will read the code line my line
// and then assign variable declarations to memory based on the scope within
// the program. 
//
// Scope is created using the curly braces ({}). The curly braces create a 'block'
// in which can be variables are declared and assigned a value. The scope here is
// refered to as 'block scope'.
//
// In each block scope, variable declarations are assigned a reference in memory, 
// and the values declared are assigned to memory with an attachment to this reference. 
// As each scope exists as a seperate block, a variable name can be declared as a 'const' 
// type it multiple blocks. 
// 
// This is not a re-assignment of a different value to the same variable; rather this
// is the declaration and assignment of different variables which happen to have the same
// name. This can be done because block scopes exist in different temporal spaces (e.g. they
// exist at different times and places).


// Example 1
// ===========================

// Uncomment the four lines of code below and run the file with the command 'node examples.js'
// in the terminal;

// const myVar = `I'm in the global scope.`;
// console.log(myVar);
// const myVar = `I'm in the global scope too!!!;
// console.log(myVar);

// This small program fails in the creation phase of the interpreter's run. Each line is read by
// the interpreter and then the variable declarations (i.e. 'const myVar') are assigned a reference 
// in memory. But, both variables are declared with the same name ("myVar") and both exist in the 
// global scope. This means that they exist in the same time and place. 
// 
// So, the first declaration will be assigned a reference in memory. But when the second declaration 
// is reached by the interpreter the folowing error will be thrown;
// 
//              SyntaxError: Identifier 'myVar' has already been declared
// 
// This program will not be executed, as the interpreter cannot assign the same variable declaration
// in the same scope (in this case global);

// Example 2
// ===========================
//
// Now, uncomment the below lines of code and run it with the command "node example.js" in the 
// terminal;

// const myVar = `I'm in the global scope`;

// console.log(myVar);

// {
//     //Block 1
//     const myVar = `I'm in block 1`;
//     console.log(myVar);

//     {
//         //Block 2 Nested in Block 1
//         const myVar = `I'm in block 2 nested in block 1`;
//         console.log(myVar);
//         {
//             //Block 3 Nested in Block 2
//             const myVar = `I'm in block 3 nested in block 2`;
//             console.log(myVar);
//         }
//     }
// }

// console.log(myVar);
        
// The variable "myVar" is declared and assigned a different value within each block, or set of 
// curly braces. Each block represents a different scope, that is a different time and place or
// different temporal spaces, and as such the "myVar" declarations do not raise an error.   