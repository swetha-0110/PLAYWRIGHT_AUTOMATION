console.log('Hello World');

var x=10;
function pop()
{
  var y=5;
console.log(y);
}
pop();
console.log(x);

var m=10;
var m=5;
console.log(m);

let n=10;
n=5;
console.log(n);

const a=16;

console.log(a);

function checkage(age)
{
    if(age>18)
    {
        console.log("eligible for vote");
    }
else {
    console.log("not eligible for vote");
}
}
checkage(10);
checkage(20);

function checknumber(num)
{
    if(num>0)
    {
        console.log("number is positive");
    }
else if(num<0)
{
    console.log("negative");
}
else{
    console.log("zero");
}
}
checknumber(10);
checknumber(2);
checknumber(0);

function marks(score)
{
    let grade;
    if(score>50)
    {
        grade='A+';
    }    
  else if(score<50)
  {
    grade="B+";
  }
  else if(score=50)
  {
    grade='A';

  }
  else{
    grade='D';
  }
  console.log(grade);
}
marks(50);
marks(70);
marks(30);
marks(0);

let browser ="chrome";

if(browser == "chrome")
{
    console.log("launch chrome");
}
else if(browser =="firefox")
{
    console.log("launch firefox");

}
else if(browser == "explorer")
{
    console.log("launch explorer");
}
else{
    console.log("enter the right browser");
}

function checkDayWeek(dayNumber)
{
    let day;
  switch(dayNumber)
  {
    case 1:
    day='sunday';
    break;
    case 2:
    day='Monday';
    break;
    case 3:
    day='tuesday';
    break;
    case 4:
    day='wednesday';
    break;
    case 5:
    day='thrusday';
    break;
    case 6:
    day='friday';
    break;
    case 7:
    day='saturday';
    break;

    default:
        console.log("invalid day");
        break;
  }
return day;
}
console.log(checkDayWeek(3));
console.log(checkDayWeek(5));
console.log(checkDayWeek(9));

function browser1(typename)
{
    let type;
    switch(typename)
    {
        case 1:
         type="chrome";
         console.log("launch chrome broswer");
         break;
         
         case 2:
         type="firefox";
         console.log("launch firefox browser");
         break;

         case 3:
         type= "opera";
         console.log("launch opera browser");
         break;

         default:
            console.log("pass the right browser");
         break;
    }
 return type();
}
// browser1("firefox");

let i=0;
for(i=0; i<=10; i++)
{
    console.log(i);
}
console.log("----------------");

const array=[1,2,3,4,5,6,7];
for(const e of array)
{
    console.log(e);
}
console.log("==============");
for(let i=0; i<array.length; i++)
{
  console.log(i);
}
console.log("-------------");

let s= 1;
while(s<=10)
{
    console.log(s);// 1,2,3
s=s+1;
}
console.log("-------------------");

let k=2;
while(k<=50)
{
    console.log(k);
    k=k+2;
}
console.log("-------------");
 let h=1;
 do{
    console.log(h);
    h=h+1;
 }while(h<=10);
 console.log("--------------");
 let num=1;
 while(num<=100)
 {
 console.log(num);
 if(num%5==0)
 {
    console.log('hi');
  //  break;
 }
 num++;
 }
 console.log("----------");
 const browser2=['chrome', 'edge', 'IE', 'safari'];
for(const e of browser2)
{
    if(e=='IE')
    {
     console.log("launch IE");
     break;
    }
}
console.log("------------");
const user={
    name:'John',
    age:'20',
    city:'Auckland'
}
for(const key in user)
{
    console.log(key+':'+user[key]);
}

