// 30-8 (advanced) Object and Array Destructuring


const fish = {
    name: 'king Hilsha',
    home: 'chandpur',
    color: 'silver',
    phone: '01726920703',
    price: 400
}


// const phone = fish.phone;
// const home = fish.home;
// const color = fish.color;
// const name = fish.name;
// const price = price.name;



const { phone } = fish
const { age, name, Profession } = { name: 'almus', age: 56, Profession: 'mekup Artist' }
console.log(age);
const { home } = fish;
console.log(home);




// Array distruction 
const [first, anouther, ok] = [14, 25, 64, 7];
console.log(first, anouther, ok);





const nayoks = ['sakib', 'bappa', 'raj'];
const [king, lost, notun] = nayoks;
console.log(lost)