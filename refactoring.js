// const names = ["Karin", "Fatemeh", "Luke", "Michael", "Douglas", "Jyoti"];

// let shortNames = [];
// for const(name of names) {
//     if (name.lenght < 7) {
//         shortNames.push(names);
//     }

// }

// console.log("The short names are", shortNames);

// // now we refactoring

// const names = ["Karin", "Fatemeh", "Luke", "Michael", "Douglas", "Jyoti"];

// function isShortName(name) {
//     return name.length < 7;
// }


// function filterShortNames(names) {
//     let shortNames = [];
//     for const(name of names) {
//         if(isShortName(name));
//         shortNames.push(name);
//     }
//     return shortNames;
// }

// console.log("the short names are", filtershortNames(names));


// practice video1

// const c = [13, 4, 10, 7, 1];
// const t = [3, 12, 6, 11, 2];
// const n = [];

// for (const k of c){
//     let v = k; 
//     if(k === 13) {
//         v = "K";
//         } 
//         else if(k === 12) {
//             v = Q;
//         }
//         else if(k === 11) {
//             v = "J";
//             else if(k === 1) {
//                 v = "A";
//             } else{
//                 v = "k";
//             }
//             n.push(v);
//         } 
// console.log("Your cards name is", n);


// const cardPlayer1 = [13, 4, 10, 7, 1];
// const cardPlayer2 = [3, 12, 6, 11, 2];
// const name = [];

// for (const k of cardPlayer1){
//     let value = k; 
//     if(k === 13) {
//         value = "King";
//         } 
//         else if(k === 12) {
//             value = "Queen";
//         }
//         else if(k === 11) {
//             value = "Jack";
//             else if(k === 1) {
//                 value = "Ace";
//             } else{
//                 value = "k";
//             }
//             n.push(value);
//         } 
// console.log("Your cards name is", name);

// second moderation
// const cardPlayer1 = [13, 4, 10, 7, 1];
// const cardPlayer2 = [3, 12, 6, 11, 2];
// const name = [];

// function getNameOfCard(value) {
//     if(value === 13) {

// return "King";}
//     else if(value === 12) {
//             return "Queen";
//         }
//         else if(value === 11) {
//             return "Jack";}
//             else if(value === 1) {
//                 return "Ace";
//             } else{
//                 return value.toString
//             }
//         } 
     

// for(const k of cardPlayer1){
//     let value = k;
//     value = getNameOfCard(k);
//     name.push(value);
// }
// console.log("Your card name is", name);


// Practice video2

// const yourCards = [13, 4, 10, 7, 1];
// const theirCards = [3, 12, 6, 11, 2];   

// function GetNumberCards(cards){
//     const numberCards = []; 
//     for (const card of cards) 
//     {if (card > 1 && card < 11)
//         {numberCards.push(cards);
// } 
// }
// return numberCards;
// }

// console.log("Your number cards are", GetNumberCards(yourcards));

// Refactor

// const yourCards = [13, 4, 10, 7, 1];
// const theirCards = [3, 12, 6, 11, 2];  

// function GetNumberCards(cards){
//     return cards.filter(card => card >1 && card <11);
// }

// console.log("Your number cards are:", GetNumberCards(yourCards));


// practice video3

// const yourCards = [13, 4, 10, 7, 1];
// const theirCards = [3, 12, 6, 11, 2];   

// function GetNumberCards(cards){
//     const numberCards = []; 
//     for (const card of cards) 
//     {if (card > 1 && card < 11)
//         {numberCards.push(cards);
// } 
// }
// return numberCards;
// }

// console.log("Your number cards are", GetNumberCards(yourcards));


// refactor
const yourCards = [13, 4, 10, 7, 1];
const theirCards = [3, 12, 6, 11, 2];

function getNumberCards(cards) {
    return cards.filter(card => card >1 && card < 11).map(card => card.toString());
}

console.log("Your number cards are", getNumberCards(yourCards));