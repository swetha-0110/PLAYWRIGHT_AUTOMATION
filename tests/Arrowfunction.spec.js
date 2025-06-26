const divide=(t1,t2)=>(t1/t2);
const div=divide(4,2);
console.log(div);

const multiply= num=>num*2;
const mul=multiply(5);
console.log(mul);

const msg=()=>'JavaScript';
console.log(msg());

const greet =(username='guest',age=0)=> `Hello ${username}! you are ${age} years`;
const g1=greet();
console.log(g1);

const g2=greet('Tom',20);
console.log(g2);

const findmaxvalue=(a,b,c)=>{
    return Math.max(a,b,c);
}
const maxvalue=findmaxvalue(10,20,30);
console.log(maxvalue);
