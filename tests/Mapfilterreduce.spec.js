let numbers=[1,2,3,4,5]; // map
let map=numbers.map((e) => e*2); 
console.log(map);

let fahTem=[32,68,86,104,212];
//[F-32]*[5/9];//F->C
function fahtocel(fah)
{
return(fah-32)*(5/9);
}
let temcalculate=fahTem.map(fahtocel);
console.log(temcalculate);

let num=[1,2,3,4,5,6];// filter
let filter=num.filter((e)=> e%2==0);
console.log(filter);

let employee=[
    {name:'ryan',age:'30',gender:'male'},
    {name:'brad',age:'40',gender:'male'},
    {name:'genney',age:'25',gender:'female'},
    {name:'gen',age:'30',gender:'female'}
];
let empfilter=employee.filter((emp)=>{
return emp.gender=='female'&& emp.age>25;
});
 console.log(empfilter);

let numb=[1,2,3,4,5,6,7];//28
let reduce=numb.reduce((add,num)=> add+num,0);
console.log(reduce);
// 0+1=1;1+2=3;3+3=6;6+4=10;10+5=15;15+6=21;21+7=28;

let maxnumber=[1,5,10,15,20,25,30,35,40];//40
let reducemax=maxnumber.reduce((max,num)=>{
  if(num>max)
  {
    return num;
  }
  else{
    return max;
  }

},maxnumber[0]);
console.log(reducemax);

let minnumber=[1,5,10,15,20,25,30,35,40];//40
let reducemin=minnumber.reduce((min,num)=>{
  if(num<min)
  {
    return num;
  }
  else{
    return min;
  }

},minnumber[0] );
console.log(reducemin);

let cartItem=[
    {name:'shirts',price:350},
    {name:'shoes',price:500},
    {name:'watches',price:300},
    {name:'jeans',price:1000},
    {name:'T-shirt',price:200},
];

let totalitemsprice= cartItem.reduce((total,item) => total + item.price, 0);
console.log(totalitemsprice);

let number=[1,2,3,4,5,6,7,8,20];
let flag=number.every((e)=>e<10);
console.log(flag);

let int=[1,2,3,4,5,6,30];
let m=int.some((e)=>e>20);
console.log(m);

let inte=[1,2,3,4,5,6,7,8,9,20,30];
let a=inte.find((e)=> e>20);
console.log(a);

let re=[1,2,3,4,5];
let reverse=re.reverse();
console.log(reverse);

let lastindex=['apple','bannana','cherry','strawberry'];
let index=lastindex.lastIndexOf('strawberry');
console.log(index);

let b=['apple','mango','grapes',123,'ABC'];
let sort=b.sort();
console.log(sort);


