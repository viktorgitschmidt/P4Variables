let numberOfBottles = 10;
const line1 = "green bottles hanging on the wall";
const line2 = "and if one green bottle, should accidentally fall, there will be"

console.log(numberOfBottles);
console.log(line1);
console.log(numberOfBottles);
console.log(line1);
console.log(line2);
console.log(--numberOfBottles);

console.log(numberOfBottles);
console.log(line1);
console.log(numberOfBottles);
console.log(line1);
console.log(line2);
console.log(--numberOfBottles);

let x = 5 + 5;
console.log(x);
//month 1
let bank = 5;
let income = 6;

bank += income;

console.log(bank); //expect 11

//month 2
bank += income;

console.log(bank); //expect 17

//month 3
income +=3;
bank+=income;
console.log(bank); // expect 26

console.log(0%2);
console.log(1%2);
console.log(2%2);
console.log(3%2);
console.log(4%2);


//130 seconds, how many minutes and seconds
let seconds = 130;
let minutes = seconds / 60;
console.log(minutes); // TODO Remove decimals
console.log (130%60);



let gold = 50;
//we pick up 10 gold
gold+= 10;
console.log(gold);
//we get robbed
gold -=20;
console.log(gold);
//we play cards and win 2X
gold *= 2;
console.log(gold);
//tax from goblin
gold /= 2;
console.log(gold);






let numberOfWins = 0;
const totalWins = "Total of wins";
const newTotalWins = "If you manage to win a game your new total will be"

console.log(numberOfWins)
console.log(totalWins);
console.log(newTotalWins);
numberOfWins += 1;
console.log(numberOfWins);

console.log(numberOfWins)
console.log(totalWins);
console.log(newTotalWins);
numberOfWins += 1;
console.log(numberOfWins);



// Implement a program that takes an input for km/h and displays the result in m/s. Input: 72 Output: 20
const kmhText = "Kilometers per hour, is equivalent to"
const msText = "Meters per second"
let kmh = 80;
let ms = kmh / 3.6;
console.log(kmh);
console.log(kmhText);
console.log(ms);
console.log(msText);

// Implement a program that takes a number input for minutes and displays the result in seconds. Input: 3 utput: 180
const minuterText = "minutes is equivalent to";
const sekunderText = "sekunder";
let minuter = 3;
let sekunder = minuter * 60;
console.log(minuter);
console.log(minuterText);
console.log(sekunder);
console.log(sekunderText);

// Implement a program that takes two numbers as input and displays their division result.
// Input: 11, 4
// Output: 2.75
let input1Q4 = 11;
let input2Q4 = 4;
let output2Q4 = input1Q4 / input2Q4;
console.log(output2Q4);


//Implement a program that calculates the remainder of dividing two numbers and displays the result. Input: 11,4. Output: 3
let tal1 = 11;
let tal2 = 4;
let tal3 = tal1 % tal2;
console.log(tal3);
