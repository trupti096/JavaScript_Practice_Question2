// let salary=require('readline-sync').question('enter basic salary = ');
// if (salary <= 10000){
//     HRA = (salary * 20)/100
//     DA = (salary * 80)/100
//     gross_salary = (salary + HRA + DA)
//     console.log("gross_salary", gross_salary);
// }
// else if (salary <= 20000){
//     HRA = (salary * 25)/100
//     DA = (salary * 90)/100
//     gross_salary = (salary + HRA + DA)
//     console.log("gross_salary", gross_salary);
// }
// else if (salary > 20000){
//     HRA = (salary * 30)/100
//     DA = (salary * 95)/100
//     gross_salary = (salary + HRA + DA)
//     console.log("gross_salary", gross_salary);
// }
// else{
//     console.log("please enter a basic salary");
// }

let mark=require('readline-sync').question('enter your marks = ');
if (mark < 25){
    console.log("Grade F");
}
else if (mark > 25 && mark < 45){
    console.log("Grade E");
}
else if (mark > 45 && mark < 50){
    console.log("Grade D");
}
else if (mark > 50 && mark < 60){
    console.log("Grade C");
}
else if (mark > 60 && mark < 80){
    console.log("Grade B");
}
else if (mark > 80){
    console.log("Grade A");
}
else{
    console.log("Nothing");
}