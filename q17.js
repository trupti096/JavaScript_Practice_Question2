let actual_cost=require('readline-sync').question('enter the actual product price = ');
let sale_amount=require('readline-sync').question('enter the sale amount = ');
if (actual_cost < sale_amount){
    console.log("it's profit");
}
else{
    console.log("it's loss");
}