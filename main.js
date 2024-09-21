/*   javascript code  */
   document.write('<h2>Hello,World mr: | mrs:</h2>'); 
   console.log("Hello Welcome to javascript !"); 
   // alert("Asc Welocme !");
   // confirm("Diyaar mathay?");
   // prompt("Magacaa");
   // prompt("Imisabaa jirtaa ?");
   // alert("mahadsanid mudane/marwo");

   // declare variable

   //Declate constant

//   const n1 = 3.14; // must initialize and connot redeclare, connot re_inintialize
// //   const n3 ;
// //   n1 += 30; // connot re_inintialize
// //   let n1 = 90;


// // declare Let 

//   let n2 = 90; // connot redeclare
//    //   n2 = n2 + 4; 
//    n2 += 4; // n2 = n2 + 4


// // declare Var   

// //   var n2;

//   var n3 ; 
//   n3 = 90;
//   n3 = n3 + 10; // n3 += 10;  
//   var n3  = 101;
// //   let n3 = 90;
// //   var n3;
// //   let n3;
  

//   console.log(n1);
//   console.log(n2);
//   console.log("from var N3 :",n3);


// alert("Welcome");
// confirm("Diyaar Matahay ?");

// var name_input = prompt("Magacaa  ?");
// let age = prompt("Imisaa Jirtaa ?");

// alert("Mahadsanid Marwo/Mudane");



// if(name_input != '' && age != ''){
//    document.write("Your Name is: " + name_input + '<br>');
//    document.write("Your Age is : " + age)
//    console.log("Your Name is: " + name_input);
//    console.log("Your Age is : " + age);

// }else{
//    // nothing console

// }





// 23/09/2022

// operators
// let y =90;
// let x = 11;
// let z =y+x;
let y, x,z =20;
y = 90;
x = 11;
// z = y+x;
z += y+x;

document.write(z);
console.log(z);

// String Opertaor

let text1 = "Have a nice ";
let text2 = "day";
text1 += text2; // text1 = text1 + text2
// text2 += text1; // text2 = text2 + text1
// console.log(text1 + ' ' + text2);
console.log(text1);

// multiplication

let n1 = 70;
var n2 = 10;
let n3 = 3;
console.log(".... Addition and Multipilation")
console.log(n1 * n2 + n3);
console.log(n1 + n2 * n3); // 100
console.log((n1 + n2) * n3); // 240

//...
console.log(".... Addition and divission")
console.log(n1 / n2 + n3); // 10
console.log(n1 + n2 / n3) // 73.33
console.log((n1 + n2) / n3) // 26.6 

//...
console.log(".... Substraction and Multipliaction")
console.log(n1 * n2 - n3); // 697
console.log(n1 - n2 * n3); // 40
console.log((n1 - n2) * n3); // 180


//...
console.log(".... Substraction and divission")
console.log(n1 / n2 - n3); // 4
console.log(n1 - n2 / n3); // 66.6 
console.log((n1 - n2) / n3); // 20

//.. 
console.log(".... Multiplication and divission")
console.log(n1 * n2 / n3);// 233.33
console.log(n1 / n2 * n3); // 21

//...
console.log(".... Addition and Substraction")
console.log(n1 + n2 - n3);// 77
console.log(n1 - n2 + n3) // 63

//...
let n4 = 2;
console.log(".... Addition,Substarction, multiplication and divission")

console.log(n1 + n2 / n3 - n4 * n3); // 70 +  3.33 -6  = 67.33 result
console.log(n1 - n2 / n3 + n4 * n3);   // 70 - 3.33 + 6 =  72.66
console.log(n1 - n2 * n3 + n4 / n3);   // 70 - 30 + 0.66 =  40.0.6

 
// 29/09/2022
// This variables Already Declare ( Only Re_inintialize)
n1 = 70;
n2= 60;
n3 = 4;
n4 = 3;
console.log('Module(Division Remainder)');
console.log(n1 % n2); // Remainder 10
console.log(n2 % n1); // Remainder 60
console.log(n3 % n4); // Remainder 1
console.log(n4 % n3); // Remainder 3

console.log("Module(Division Remainder AND Division)");
console.log(n1 % n2 / n3); // Result 2.5
console.log(n1 / n2 % n3); // Result 1.16

console.log("Module(Division Remainder AND Multiplication");
console.log(n1 % n2 * n3); // Result 40 
console.log(n1 * n2 % n3)  // Result 0

console.log("Module(Division Remainder AND Addition");
console.log(n1 % n2 + n3); // Result 14
console.log(n1 + n2 % n3); // Result 70
console.log((n1 + n2) % n3); // Result 2

console.log("Module(Division Remainder AND Substraction");
console.log(n1 % n2 - n3); // Result 6

console.log(n1 - n2 % n3);  //  Result 70
console.log((n1 - n2) % n3);  //  Result 2



console.log("All");
console.log(n1 - n2 + n3 * n4 / n3 % n4); 

// 70 - 60 + 12 / 4 % 3; => 70 -60 + 3 % 3 => 70 - 60 + 0 = Result 10 

// 70 - 60 + 12 / 4 % 3;  , Then , 70 - 60 + 3 % 3; , Then, 70 - 60 + 0 = 10;

console.log(n1 - n2 + n3 % n4 / n3 * n4); 

// 70 - 60 + 1 / 4 * 3 => 70 - 60 + 0.25 * 3 => 70 - 60 + 0.75 => 10.75 Result

// 70 - 60 + 1 / 4 * 3  ,, Then ,, 70 - 60 +0.25 * 3 ,, Then ,,  70 - 60 + 0.75 =  10.75 Result

// let txt1 = "Have a nice";
// let txt2 = ' day';

// txt1 += text2;
// console.log(txt1);


console.log("Increment ");
//  Increment (pre_increment and post_increment)

let num1 =  99;
let num2 = 22;
let num3 = 33;
num3 += 2
console.log(num1);
num1 ++; // num1 += 1 
// num1 += 1;
// num1 = num1 ++;  //post_increment
num1 = ++ num1; // pre_increment
console.log(num1 +" .......... Increment");

// num2 += ++ num3; // pre_increment
num2 += num3 ++; // post_increment
console.log(num2);
// console.log(num3);
num2 += ++num3;
console.log(num2);
console.log(num3);





console.log("Decrement")
// Decremnt (pre_decrement and post_decremet)
let num4 = 89;
let num5  =  101;
console.log(num4);
// num5 += num4 --; // post_decrement
// console.log(num5);
num5 += -- num4; // pre_decrement
console.log(num5 +' .....Decrement');
console.log(num4);
 

n1 = 91;
// n2 = '90';
n2 = '91';

//  = called assignment operator


// Comparison Operators
/*
   equal to ==       (n1 == n2 ) => true
   equal to equal(Equilty) -(equal value and equal type) ===      (n1 === n2) => false
   not Equal to     !=    (n1 != n2) =>false
   Not Equal value and not equal type !== (n1 !== n2) => True
   greater than   > (n1 > n2) =>  false
   greter than or qual to >= (n1 >= n2) => True
   less then < ( n1 < n2 ) => False
   less than or equal to <= (n1 <=  n2) => true 
*/ 

// Logical Operators
/*
 AND &&  (n1 > 80 && n2 < 100 )  => true // else // (n1 > 80 && n2 < 90 ) =>false ,, if  n1 True and N2 True == True (only one time return true if two variable is true)
 OR ||  (n1 < 100  || n2 > 150 ) => True ,, else ,, (n1 > 100 || n2 < 70) => False(only one time return False if two variable is False)
 NOT !       !(n1 == 90) => false
*/


//  06/10/2022

//  Conditional Operators (Conditional Statement)
//  if, if else, and if ,else if ,  else , Switch 


console.log("Conditional Operators");
let nu1 = 80;
let nu2 = 80;
// // only If
if(nu1 == nu2){
   console.log('N1',nu1,'Equal to N2',nu2," IF ONLY");
}

// //  if else
// if(nu1 ==  nu2){
//    console.log('N1:',nu1,'Equal to N2:',nu2);
// }else{
//    console.log('N1:',nu1,'Not Equal to N2:',nu2);
// }


// // if else if 
// if(nu1 == nu2 )
// {
//    console.log('N1:',nu1,'Equal to N2:',nu2);
// }
// else if(nu1 > nu2)
// {
//    console.log('N1:',nu1 ,'Is Greater than N2:',nu2);
// }else{
//    console.log('N1:',nu1,'Not Equal to N2:',nu2)
// }


// // Repeat if else if
// console.log('Repeat if else if');
// if(nu1 == nu2 )
// {
//    console.log('N1:',nu1,'Equal to N2:',nu2);
// }
// else if(nu1 > nu2)
// {
//    console.log('N1:',nu1 ,'Is Greater than N2:',nu2);
// }
// else if(nu1 < nu2)
// {
//    console.log('N1:',nu1,'Is Less than N2:',nu2);
// }
// else {
//    console.log('N1:',nu1,'Not Equal to N2:',nu2);
// }


 nu1 = 80;
 nu2 = 80;
console.log("=== (Equality) Equal value and Equal type");
//  nu1 = 80, nu2 = 87,
if(nu1 === nu2)
{
   console.log("N1:",nu1,'Equal Value and Equal Type N2:',nu2);
} else {
   console.log("N1:",nu1,'Not  Equal Value AND Equal Type N2:',nu2);
}

// Not Equal to
nu1 = 80;
nu2 = 81;
console.log("Not Equal to");

if(nu1 != nu2)
{
   console.log("N1",nu1,"Not Equal To N2:",nu2);

}else{
   console.log("N1",nu1,"Equal To N2:",nu2);
}


// Not Equal to Value AND Not Equal to Type
nu1 = 80;
nu2 = 80;
console.log("  Not Equal to Value AND Not Equal to Type  ");

if(nu1 !== nu2)
{
   console.log("N1:",nu1,"Not Equal to Value AND Not Equal Type N2:",nu2);
}else{
   console.log("N1:",nu1,"Equal to N2:",nu2);
}

// Practice Grade 
// nu1 =  prompt("Grade");
console.log(nu1)
if(nu1 > 100)
{
   console.log("Invalid grade");
}
else if(nu1 == 100 )
{
   console.log("Your Grade Is A+");
}else if(nu1 >= 90)
{
   console.log("Your Grade Is A");
}
else if( nu1 > 85 ){
   console.log("Your Grade Is B+");
}
else if( nu1 >= 80 ){
   console.log("Your Grade Is B");
}
else if( nu1 >= 70 ){
   console.log("Your Grade Is C");
}
else if( nu1 <= 65 ){
   console.log("Your Re-exam please exercise more");
}else {
   console.log("Invalid Grade"); /* nu1 == '' ||  nu1 > 100 */
}

// 07/10/2022
// Logical Opertors
nu1 =  90;
nu2 = 101;
console.log("Logical Opertors");
// AND && 
console.log("... AND && ......");
if(nu1 > 89 && nu2 < 100)
{
   console.log("N1 && N2 True ");
}else{
   console.log(" N1 && N2 False ");
}


// OR || 
console.log("...... OR || ........");
if(nu1 > 89 || nu2 < 100)
{
   console.log("N1 || N2 True");
}else {
   console.log(" N1 || N2 False ");
}

// Type Operator 
console.log("Type Operator");
nu1 = 80;
nu2 = "Jamal";
num1 = true;

// // Object only Example
// let obj = {
//    firstName:'Qadar',
//    number:'618832245', 
//    num: 101,
// }
 
console.log(typeof nu1);
console.log(typeof nu2);
console.log(typeof num1);
// console.log(typeof obj); 



// 20/10/2022


//  Switch : The switch expression is evaluated once
console.log("..... Switch Statement......")
day = new Date().getDay();
console.log(day);

switch(day)
{
   case 0:
      console.log("Axad");
      break;
   case 1:
      console.log("Isniin");
      break;
   case 2:
      console.log("Talaado");
      break;
   case 3:
      console.log("Arbaco");
      break;
   case 4:
      console.log("Khamiis");
      break;
   case 5:
      console.log("Jimco");
      break;
   case 6:
      console.log("Sabti");
      break;
   default:
      console.log("Invalid day");
      break;  
}

// Loops Of javaScript ( for , while and do-while Loop )

//  for loop (start ; condition ; driving), ( statement 1; statement 2; statement 3)
 
// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)
// console.log(11)
// console.log(12)
console.log("For Loop Increment")
console.log("For Loop Way One ")
for(let i = 0 ; i <= 20 ; i++)
{
   console.log("The Number is: ",i);
}

console.log(".... For Loop Way Two .... ");
 let i = 0;

 for( ; i <= 20; i++){
   console.log("The Number is: ",i);
 }

 console.log(".... For Loop Way Three .... ");
let n ;
for(n = 0; n <= 20 ; n++)
{
   console.log("The Number is: ",n);
}

console.log("For Loop Decrement --- ");

for(let j = 20; j >= 0 ;j--)
{
    console.log("The Number is:",j);
}
// ////
console.log("....Even Numbers....");
 for(let j = 20; j>= 0 ; j-=2)
 {
   console.log("The Number is:",j);
 }
 console.log("Another Way");
 for(let n = 19; n >= 0 ; n-=2)
 {
   console.log("The Number is:",n);
 }


//  21/10/2022
console.log("For Loop Way Four");

let f = 0;
for( ; f <= 15 ; )
{    
   console.log("This Number is:", f);
    f++;
}

console.log("................ Dec");

let d = 10;
for( ; d >= 0 ; )
{ 
   console.log("This Number Is", d);
   d--; 
}

// While  while(condition){ block  code };
 console.log(".... While Loop Increment");
let w = 0;
while(w <= 15)
{
  console.log("This Number is:", w);
  w++;
}
 

console.log("While Loop Decrement");
let m = 15;
while(m >= 0)
{
   
   console.log("This Number is:", m); 
   m--;
}




















