let character=require('readline-sync').question('enter a character = ');
if (character >= 'a' && character <= 'z'){
    console.log('it is a lowercase');
}
else if (character >= 'A' && character <= 'Z'){
    console.log('it is a uppercase');
}
else{
    console.log('nothing')
}