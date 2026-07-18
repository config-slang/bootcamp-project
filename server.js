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
//    const op = '+';
//    const x1 = 2;
//    const x2 = 8;
//     switch(op){
//         case '+':
//             console.log(x1+x2);
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

// function generateOtp(){
//     return Math.floor(Math.random() * 10000);
// }
 
// for(var i = 0; i<10000; i++){
//     console.log(generateOtp());
// }

const studentList = ["ices","hi","how are you"];


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

/*Other Methods
1. foreach
2. map
3. filter
4. reduce */

studentList.forEach((value)=>{
    console.log("Value : ",value);
})

function mapValue(value,index){
    return value + "wrc " + "index : " + index;
}
console.log(mapValue("ram",0));

const newStudentList = studentList.map((value,index)=>{
    return value + "wrc " + "index : " + index;
})
console.log(newStudentList);

const evenNumber = [1,2,3,4,5,6,7,8,9].filter((value)=>{
    return value % 2 == 0;
})

//