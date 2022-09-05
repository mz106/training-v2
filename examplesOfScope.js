
// Example A: variable with global scope
const globalVar = `I'm in the global scope; I can be accessed anywhere in this file.`;

console.log("In the global scope: ", globalVar);

{
    const firstInternalVar = `I'm the first internal var`;
    console.log("Inside the first block scope: ", globalVar);
    console.log("Inside the first block scope: ", firstInternalVar);
    {
        const secondInternalVar = `I'm the second internal var`;
        console.log("Inside the second block scope: ", globalVar);
        console.log("Inside the second block scope: ", firstInternalVar);
        console.log("Inside the second block scope: ", secondInternalVar);
    }
}