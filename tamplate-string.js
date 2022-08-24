
//  tin vabe string declared kora jay 

const person = "Najmus Sakib";
const person2 = 'Mark Jakarbag';
const person3 = `donald trump`;



// not a perfect solution 
const multiLine = 'my name is sakib \n' + 'my name is bakib \n' +
    'im a poor man ';
console.log(multiLine);



//  but es6 gives a nice solution 


const multiplelineWithES6 = `
my name is sakib
my name is bakib 
my love is baba
i lost my mome
`;
console.log(multiplelineWithES6);

//   this is not a perfect solution 
const a = 20;
const b = 10;
const summary = 'total value is  : ' + a + ' ' + b + ' ' + ' ' + '=' + (a + b);
console.log(summary);

// Now daynamic ES6 Power ...this is perfect solution 

const summarryDaynamic = `

the two number sumation is : ${a + b};
`
console.log(summarryDaynamic);