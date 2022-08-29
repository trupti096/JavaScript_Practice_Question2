let character=require('readline-sync').question('enter a character = ');
if (character > "a" && character < "z" || character > "A" && character < "Z"){
    console.log('it is an alphabet');
}
else{
    console.log('it is not a alphabet');
}