let required=true;
while(required)
    {
        console.log(required);
        required=false;
    }

    for(let k=1;k<=10;k++)
        {
            if(k%2 == 0 && k%5 ==0)
               {
                    console.log(k);

                }
        }

 var marks=[10,20,30,40,50,60];
 console.log(marks);  
 console.log(marks.length);   
 marks[2]=32;
 console.log(marks);
 marks.push(70);
 console.log(marks);
 marks.pop();
 console.log(marks);
 marks.unshift(5);
 console.log(marks);

 let day='monday';
 console.log(day.length);
let subday=day.slice(0,5);
console.log(subday);
console.log(day[3]);

let splitday=day.split("n");
console.log(splitday);
console.log(splitday.length);
console.log(splitday[1]);
console.log(splitday[0].trim().length);

let date='20';
let nextdate='34';
let diff= parseInt(date)- parseInt(nextdate);
console.log(diff);
diff.toString();

let quote=day + " is workday";
console.log(quote);







