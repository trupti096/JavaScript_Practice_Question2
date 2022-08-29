let character=require('readline-sync').question('enter a character = ');
if (character > 'a' && character < 'z' || character > 'A' && character < 'Z'){
    console.log('it is a alphabet');
}
else if (character > '0' && character < '9'){
    console.log('it is a digit');
}
else{
    console.log('it is a special character');
}