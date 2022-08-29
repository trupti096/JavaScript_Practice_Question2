let A=require('readline-sync').question('enter a 1st no = ');
let B=require('readline-sync').question('enter a 2nd no = ');
let C=require('readline-sync').question('enter a 3rd no = ');
if (A==B==C){
    console.log("triangle is equilateral");
}
else if (A==B || B==C || C==B){
    console.log("triangle is isosceles")
}
else{
    console.log("triangle is scalene")
}