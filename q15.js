let A=require('readline-sync').question('enter a 1st no = ');
let B=require('readline-sync').question('enter a 2nd no = ');
let C=require('readline-sync').question('enter a 3rd no = ');
if (A+B == B+C && B+C == C+A){
    console.log("triangle is valid");
}
else{
    console.log("triangle is not valid");
}