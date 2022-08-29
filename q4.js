let num=require('readline-sync').question('enter a no = ');
if (num < 0){
    console.log(num,'is a negative no');
}
else if (num > 0){
    console.log(num,'is a positive no');
}
else{
    console.log(num,'is a zero');
}