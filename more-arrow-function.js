//30-6 More Arrow functions and big arrow function

const add = (first, second) => first + second;
const GetFullName = (first, second) => first + '' + last;






const multiply = (a, b) => a * b;
const result = multiply(7, 8);
console.log(result)






//  when multiple paremeter
const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;
const AddAllresult = addAll(1, 2, 3, 4, 5, 6);
console.log(AddAllresult);



// no parameter arrow function 
const getpie = () => 3.1416;



// one paremeter

const doubleit = (num) => num * 2;




// one paremeter simple version 


const FiveItems = num => num * 5;





// multiline arrow function  anouther operation 


const domath = (x, y, z) => {


    const firstSum = x + y;

    const secondSum = y + z;
    const multiplyresult = firstSum * secondSum;

    const result = multiplyresult / 2;
    return result;
}


const resulttotal = domath(1, 2, 3);
console.log(resulttotal);