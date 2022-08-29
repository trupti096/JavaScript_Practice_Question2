let num1=require('readline-sync').question('enter a no = ');
let num2=require('readline-sync').question('enter a no = ');
let num3=require('readline-sync').question('enter a no = ');
if (num1>num2 || num1>num3){
    console.log(num1,'is bigger');
}
else if (num2>num3 || num2>num1){
    console.log(num2,'is bigger');
}
else if(num3>num1 || num3>num2){
    console.log(num3,'is bigger');
}