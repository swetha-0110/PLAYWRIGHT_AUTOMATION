const User={
    username:"Tom",
    age:'30',
    id:'2a'
}
console.log(User.id);

function Car(brand,cc,price)
{
    this.brand=brand;
    this.cc=cc;
    this.price=price;
};
const c1= new Car('BMW','520','5000000');

console.log(c1.brand + " " + c1.cc +" "+ c1.price);

let x=30;
console.log(typeof x);

let pie='scissor';
console.log(typeof pie);

let y=[1,2,3,4,5];
console.log(typeof y);


