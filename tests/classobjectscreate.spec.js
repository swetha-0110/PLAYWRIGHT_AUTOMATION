class Car{
    constructor(name,model,price,color){
        this.name=name;
        this.model=model;
        this.price=price;
        this.color=color;
    }
    refuel(){
     console.log(this.name + "car is fueled");
    }

}
const c1=new Car("Benz",'r5',10000000,'silver');
console.log(c1.name);
console.log(c1.model);
console.log(c1.price);
console.log(c1.color);
c1.refuel();


const c2=new Car("BMW",'Q5',2300000000,'white');
console.log(c2.name);
console.log(c2.model);
c2.refuel();