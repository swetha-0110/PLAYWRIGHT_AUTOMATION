let language=["java", "javascript", "typescript"];// push
language.push("c#");
console.log(language);

let tools=["Selenium","Postman","playwright"];//pop
tools.pop();
console.log(tools);

let fruits=['apple','bananna','grapes'];// shift
fruits.shift();
console.log(fruits);

let veggeis=['carrot','beetroot','chillies'];// unshift
veggeis.unshift('cabbage');
console.log(veggeis);

let animals=['cat','dog','bear','tiger'];// splice
animals.splice('1','1');
console.log(animals);

let phones=['samsung','iphone','oneplus','nokia','micromax'];// slice
let newphones= phones.slice(2,3);
console.log(phones);
 console.log(newphones);

let numbers=['1','2','3','4','5'];// slice
let newnum=numbers.slice(0,2);
console.log(newnum);

let fts=['orange','pineapple','watermelon'];// concatinate
let vegs=['potato','tomato','cucumber'];
let combinearray=fts.concat(vegs);
console.log(combinearray);

let color=['white','black','red']; // indexOf
let colorindex=color.indexOf('black');
console.log(colorindex);
let colorindex1=color.indexOf('orange');
console.log(colorindex1);

let app=['admin','customer','seller','vendor'];// includes(trueorfalse)
let app1=app.includes('vendor');
console.log(app1);
let app2=app.includes('business');
console.log(app2);

let a=[1,2,3,4,5];// forEach
a.forEach(element => {
    console.log(element*3);
});