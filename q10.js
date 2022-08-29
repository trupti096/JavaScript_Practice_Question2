let character= require('readline-sync').question('enter any character = ');
if (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u' && character == 'A' || character == 'E' || character == 'I' || character == 'O' || character == 'U'){
    console.log('it is a vowel');
}
else{
    console.log('it is a consonant');
}