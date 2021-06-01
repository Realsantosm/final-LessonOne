console.log('All the Excercise are compiled together, If you want to run it uncomment them Exercise wise');

// Ex-1
// console.log('Santos Mmu');


//Ex-2
// var readlineSync = require('readline-sync');

// var userName = readlineSync.question('Enter Your Name: ');
// console.log(userName);


// Ex-3 and Ex-4
// var readlineSync = require('readline-sync');
// var userName = readlineSync.question("What's your Name: ");
// console.log('Welcome ' + userName);





//Ex-5
// var readlineSync = require('readline-sync');
// var answer = readlineSync.question('Is you Age greater than 21? ')
// if(answer == 'yes'){
//   console.log('Right');
// }else{
//   console.log('Wrong');
// }


//Ex-6
// var readlineSync = require('readline-sync');
// score = 0;
// var city = readlineSync.question("What's your City Name: "); 
// if(city == 'Guwahati'){
//   score = score + 1;
//   console.log('Right');
// }else{
//   console.log('Wrong');
// }
// var answer = readlineSync.question('Is you Age greater than 21? ')
// if(answer == 'yes'){
//   console.log('Right');
//   score = score + 1;
// }else{
//   console.log('Wrong');
// }
// console.log('Your Score is ' + score);


// Ex-7
// function add(numOne,numTwo){
//   console.log('Number One: ' , numOne , '  Number Two: ' , numTwo)
//   var sum = numOne + numTwo;
//   return sum;
// }

// function mul(numberOne, numberTwo){
//   console.log('Number One is ' +numberOne+ ' Number Two is ' + numberTwo)
//   var mul = numberOne * numberTwo;
//   return mul;
// }

// var result = mul(2,3);
// console.log('The Product of two number: '+result);
// console.log('\n');
// console.log('\n');

// console.log('The Addition of two number: '+add(2,3));
// console.log('\n');
// console.log('\n');

// var add = add(10,20);
// console.log('The Sum of two number: '+add);
// console.log('---------------------------------------------');



// Ex-8
// var readlineSync = require('readline-sync');
// var userName = readlineSync.question('Enter Your Name: ');
// console.log('WelCome!! '+userName + ' Hope you know Santos!!!');
// console.log("\n");
// console.log(" Let's Play a Game: ");
// console.log("\n");
// score = 0;
// function play(question,answer){
//   var userAnswer = readlineSync.question(question);
//   if(answer.toUpperCase === userAnswer.toUpperCase){
//     score= score+1;
//     console.log('You are Correct!!!!');
//   }else{
//     console.log('You are Wrong!!!!');
//     score= score-1; 
//   }
//   console.log('Your Score is: ' + score);
//   console.log('\n');
// }

// play("What is the full name of Santos? ",'Santosh Murmu');
// play("Where do he study? ",'USTM');
// play("Do he love Car? ",'Yes');
// play("Is Santos Older than 20? ",'Yes');
// play("Where do he live? ",'Guwahati');
// play("What is his Hobby? ",'Coding');
// console.log('Your Current Score is: ' + score);

// Ex-9
// for(var i = 0; i < 5; i++){
//   console.log( i + ' *');
// }

// for(var i = 0; i <= 10; i++){
//   console.log('Santos');
// }

//Homework
// let sum = 0;
// for(var i=11; i <= 45; i++){
//   sum = sum + i;
//   console.log(sum + '+' + i);
//   console.log(i);
// }
// console.log(sum);


// // Homework-Star Patterns
// var readlineSync = require('readline-sync');
// var value = readlineSync.question('Enter Number of Stars You Want: ');
// for (i = 1; i <= value; i++) {
//   var str = "";
//   for (j = 1; j <= i; j++) {
//     str = str + "* ";
//   }
//   console.log(str);
// }

// var val = readlineSync.question('Enter Number of Square Stars You Want: ');
// for (i = 1; i <= val; i++) {
//   var str = "";
//   for (j = 1; j <= val; j++) {
//     str = str + "* ";
//   }
//   console.log(str);
// }

// var val = readlineSync.question('Enter Number of Square Stars You Want: ');
// for (i = 1; i <= val; i++) {
//   var str = "";
//   for (j = 0; j < val-i ; j++) {
//     str = str + "* ";
//   }
//   console.log(str);
// }

//Matrix Pattern (m,n): row and column

//Ex-10
// var groceryList = ['Samosa','Guja','Squash Drink','Pen','Vendi','Milk','Cookies','Headphone'];
// console.log('Total length of Array: '+ groceryList.length);
// console.log(groceryList[0]);
// console.log(groceryList[3]);
// console.log(groceryList[1]);
// console.log(groceryList[groceryList.length - 1]);

// Ex-11
// var groceryList = ['Samosa','Guja','Squash Drink','Pen','Vendi','Milk','Cookies','Headphone'];
// for(var i = 0;i<groceryList.length;i++){
//   console.log(groceryList[i]);
// }

// Ex-12
// var superman = {
//   name: "Superman",
//   power: "Flight",
//   costumeColor: "Blue",
//   strength: 10000,
//   stealth: 0,
//   intelligence: 100,
// }


// var batman = {
//   name: "Batman",
//   power: "Martial Arts",
//   costumeColor: "Black",
//   strength: 100,
//   stealth: 100,
//   intelligence: 1000,
// }

// console.log(superman.strength);
// console.log(batman.strength);
// console.log(superman.stealth < batman.stealth);

// Homework
// var superHeroes = [{
//   name: "Superman",
//   power: "Flight",
//   costumeColor: "Blue",
//   strength: 10000,
//   stealth: 0,
//   intelligence: 100,
// },{
//   name: "Batman",
//   power: "Martial arts",
//   costumeColor: "Black",
//   strength: 100,
//   stealth: 100,
//   intelligence: 1000,
// }];

// for(var i = 0; i< superHeroes.length; i++){
//   console.log('Super Hero: ', superHeroes[i].name,', Super Hero Costume Color: ',superHeroes[i].costumeColor);
//   console.log("--------------------------------------------------------");
//   console.log("\n");
// }

// Exercise 13
// var question1 = {
//   qnA: function() {
//     return this.question + " " + this.answer;
//   }
// }
// questionOne = {
//   question:"Who is your favourite SuperHero? ",
//   answer:"Batman"
// }

// questionTwo = {
//   question:"Who is your favourite Actor?",
//   answer:"Allu Arjun"
// }

// question1. qnA.call(questionOne);

// //question1. qnA.call(questionTwo);


// Ex-14
// var readlineSync = require('readline-sync');
// console.log("Welcome to the Quiz");
// var username = readlineSync.question('Enter your Name: ');
// console.log('Welcome,' , username, 'Let\'s Start the Quiz!! ');

// var score = 0;
// function quiz(question,answer){
//   var userAnswer = readlineSync.question(question);

//   if(userAnswer.toLowerCase() === answer.toLowerCase()){
//     console.log('You are Right!!');
//     score = score + 1;
//   }else{
//     console.log('You are Wrong!!');
//     score = score - 1;
//   }

//   console.log('Your Score is: ', score);
//   console.log('----------------------------');
// }

// var questions = [
//   {question: 'Where do Santos live? ',answer: 'Guwahati'},
//   {question: "Is He older than 20? ",answer: 'yes'},
//   {question: "Favourite Food? ",answer: 'Motor Sabji'},
//   {question: "Who is his Fav Super Hero? ",answer: 'Rocky Bhai'}
// ];

// for(var i = 0;i<questions.length;i++){
//   quiz(questions[i].question,questions[i].answer);
// }
// console.log('\n')
// console.log('Your Final Score is: ', score);

//Making Use of Chalk Library

// const chalk = require('chalk');
// var readlineSync = require('readline-sync');
// var userName = readlineSync.question(chalk.blue("What's your name? "));

// var score = 0;

// console.log(chalk.green("WelCome "+"'"+ userName +"'"+" Hope you know Santos!!!"));

// function play(question,answer){
//   var userName = readlineSync.question(question);

//   if(userName.toUpperCase() === answer.toUpperCase()){
//     console.log("Right!!!!");
//     score = score + 1;

//   }else{
//     console.log("Wrong!!!!");
//     score = score - 1;
   
//   }
//    console.log(chalk.redBright("Your Score : "+score));
//    console.log("-----------------------------------");
   
// }

// var questions =[{
//   question:"Where do he live? ",
//   answer:"Guwahati"
// },{
//   question:"Where did he study? ",
//   answer:"Don Bosco School"
// },{
//   question:"Where do he work? ",
//   answer:"Microsoft"
// },{
//   question:"Who is his fav Actor? ",
//   answer:"Yash"
// },{
//   question:"Who is his inspiration? ",
//   answer:"Elon Musk"
// },{
//   question:"What he wants to be? ",
//   answer:"Software Engineer"
// },{
//   question:"Where do he want to live? ",
//   answer:"Canada"
// }];

// for(var i=0; i<questions.length;i++){
//   var currentQuestion = questions[i];
//   play(currentQuestion.question, currentQuestion.answer);
// }
// console.log("Yay!!! Your Current Score : "+ score);

// console.log("Your High score : "+score)

//  console.log("-----------------------------------");
//  console.log('\n');
// console.log(chalk.blue('👻 👻 👻Yay Its Done!!! 👻 👻 👻'));
