import readlineSync from 'readline-sync'
// console.log("hello world ")
// console.warn("Dont touch me ")

// let  name = "I am not a robot";
// var name1 = "I am a robot";
// const name2 = "I actually am a robot";

// console.log(`The name is : ${name}, ${name1}, ${name2}`);

// const age = 10;
// if(age==10){
//     console.log(`The name is : ${name}, ${name1}, ${name2}`);
// }
// console.log(age==10);
// console.log("Value is getting : ",!!name);

// identity();
// function identity(){
//     var name = "I know you dont want to do this";
//     console.log(name);
// }

// (false)? console.log("hi my name is nothing") : console.log("No i dont know anything");

// console.log(1 == "1");
// function calculator(){
//    const x1 = parseInt( readlineSync.question("Enter first number : "));
//    const op = readlineSync.question("Enter operator : ");
//    const x2 = parseInt(readlineSync.question("Enter second number : "));
//     switch(op){
//         case '+':
//             const add = x1 + x2;
//             console.log(add);
//             break;
//         case '-':
//             console.log(x1-x2);
//             break;
//         case '*':
//             console.log(x1*x2);
//             break;
//         case '/':
//             console.log(x1/x2);
//             console.log(x2/x1); 
//     }
// }
// console.log(calculator());

// function generateOtp(){
//     return Math.floor(Math.random() * 10000);
// }
 
// for(var i = 0; i<10000; i++){
//     console.log(generateOtp());
// }

// const studentList = ["ices","hi","how are you"];


//Array methods 
//1. Push
//2. Pop
//3. Shift
//4. Unshift

// studentList.push("Mohan");
// console.log(studentList);
// studentList.pop();
// console.log("POP: ",studentList);
// studentList.unshift("Mohan");
// console.log("Unshift : ",studentList);
// studentList.shift();
// console.log("shift : ",studentList);
// studentList.shift();
// console.log("shift : ",studentList);

// studentList[1]="ram"; // bad practice

/*Other Methods
1. foreach
2. map
3. filter
4. reduce */

// studentList.forEach((value)=>{
//     console.log("Value : ",value);
// })

// function mapValue(value,index){
//     return value + "wrc " + "index : " + index;
// }
// console.log(mapValue("ram",0));

// const newStudentList = studentList.map((value,index)=>{
//     return value + "wrc " + "index : " + index;
// })
// console.log(newStudentList);

// const evenNumber = [1,2,3,4,5,6,7,8,9].filter((value)=>{
//     return value % 2 == 0;
// })
// console.log(evenNumber);

// const total=[1,2,3,4,5,6,7,8,9].reduce((total,value)=>{
//     return total + value;
// },0)
// console.log(total);

//Objectt
// const student ={
//     Name : "Barun",
//     Age : 28,
//     Address : "Kathmandu",
//     greet : ()=>{
//         console.log(`Hello : ${student.Name}`);
//     }
// };
// student.greet();
// console.log(student.greet);

// const store = {
//   products: [
//     { name: "Laptop", category: "Electronics", price: 750 },
//     { name: "Smartphone", category: "Electronics", price: 500 },
//     { name: "Headphones", category: "Accessories", price: 80 },
//     { name: "Backpack", category: "Fashion", price: 45 },
//     { name: "Running Shoes", category: "Sportswear", price: 120 },
//     { name: "Coffee Maker", category: "Home Appliances", price: 150 },
//     { name: "Desk Chair", category: "Furniture", price: 200 },
//     { name: "Wrist Watch", category: "Fashion", price: 300 },
//     { name: "Gaming Console", category: "Electronics", price: 400 },
//     { name: "Cookware Set", category: "Kitchen", price: 100 }
//   ],
//   show :
//   addProduct : 
//   removeProduct : 
//   filterProduct_category : 
//   filterProduct_price : 
// };

// console.log(store.products);


// console.log("1");
// console.log(2);
// console.log(3);

//Async programming
//1. Promise
// callback stack
// const instanceOfPromise = new Promise((resolve,reject)=>{
//   const condition = true;
//   if(condition){
//     resolve("Task completed successfully .");
//   }else{
//     reject("Task is rejected");
//   }
// })
// resolve --> then()
// reject --> catch()

// instanceOfPromise.then((value)=>{
//   console.log(value);
// })

// const coffeeMaker = new Promise((resolve,reject)=>{
  
//   const everythingsFine = true;
//   setTimeout(()=>{
//     if(everythingsFine){
//       resolve("Your coffee is ready.")
//     }else{
//       reject("Failed to make coffee")
//     }
//   },3000)
// })
// coffeeMaker.then((value)=>{
//   console.log(value);
// })

// setTimeout(()=>{
//   console.log(1);

// },1000)

// setTimeout(()=>{
//   console.log(2);

// },2000)

// setTimeout(()=>{
//   console.log(3);

// },3000)

// setTimeout(()=>{
//   console.log("Go!!!");

// },4000)
// wrcCafe();
// function wrcCafe(){
//   console.log("Barun came to cafe.");
//     const orderCoffee = readlineSync.question("What would you like to order sir ?");
//     const coffeeMaker = new Promise((resolve,reject)=>{
//          console.log("Your coffee is preparing.")
//   const everythingsFine = true;
//   setTimeout(()=>{
//     if(everythingsFine){
//       resolve("Your coffee is ready.")
//     }else{
//       reject("Failed to make coffee")
//     }
//   },3000)
// })
//      coffeeMaker.then((caffe)=>{
//       console.log(caffe);
//      }).catch((problem)=>{
//       console.log("Failed to make coffee");
//      })
// }
// MIcro Task Queue
// async function coffeeMachine(){
  
//   setTimeout(()=>{
//     console.log("coffee might be ready");
//   },2000)
//   return "test";
// }
// const intro = await coffeeMachine();
// console.log(intro);
// const number1 = 0;
// const number2 = 0;
// try{
//   let result = number1/number2;
//   console.log(result);
// }catch(error){
//   console.log(`Error : ${error}`);
// }finally{
//   console.log("Cleanup operations");
// }

// async function studentList(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       const students = ["Ram","Shyam","Hari"];
//       resolve(students);
//     },5000) 
//   });
// }
// async function teacherList(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       const teachers = ["sita","gita","mitha"];
//       resolve(teachers);
//     },1000) 
//   });
// }

// const conclusion = await Promise.all([studentList(),teacherList()]);
// console.log(conclusion);

//Promise.all()
//Promise.race()
//Promise.allSettled()
//Promise.any()


//arraylist
// const result = [["student1","student2","student3"],["teacher1","teacher2","teacher3"]];
// const [studentList,teacherList] = result;
// console.log(studentList);
// console.log(teacherList);

//objectlist
// const output = {
//   electronics : ["Laptop","charger"],
//   store : ["Bread","noodles"],
//   clothes : ["shirt","T-shirt"]
// }

// const {electronics,store,clothes} = output; //destructuring
// console.log(electronics);
// console.log(store);
// console.log(clothes);

// spread operator and rest operator ...

const listValue = [1,2,3,4,5];
// listValue.push(6,7,8);
// console.log(listValue)

const newList = [...listValue,6,7,8]; //spread operator
console.log("New List : ",newList);
console.log("Spread operator : ",...newList);

//rest operator
const[first,second,...rest]= newList;
console.log(rest);