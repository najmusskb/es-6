// function add(first, second) {

//     if (second === undefined) {
//         second = 0;
//     }

//     const Total = first + second;
//     return Total;
// }

// const result = add(600);
// console.log(result);



// es-6 er part wow second =0 dileo seitay second parameter er kag kora jacche 
/* function add(first, second = 0) {
    const Total = first + second;
    return Total;
}
const result = add(600, 30);
console.log(result);
 */




// wow just amazing !!!!!sadharonoto default value gula right size hoy...jemon eikhan e second 
function add(first = 0, second = 0) {
    const Total = first + second;
    return Total;
}
const result = add();
console.log(result);
