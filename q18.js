let physics=require('readline-sync').question('enter physics marks = ');
let chemistry=require('readline-sync').question('enter chemisrty marks = ');
let biology=require('readline-sync').question('enter biology marks = ');
let mathematics=require('readline-sync').question('enter mathematics marks = ');
let computer=require('readline-sync').question('enter computer marks =');

let percentage=(((physics+chemistry+biology+mathematics+computer)/500)*100)

console.log("percentage");

if (percentage >= 90){
    console.log("Grade A");
}
else if (percentage >= 80){
    console.log("Grade B");
}
else if (percentage >= 70){
    console.log("Grade C");
}
else if (percentage >= 60){
    console.log("Grade D");
}
else if (percentage >= 40){
    console.log("Grade E");
}
else{
    console.log("Grade F");
}