// const cars = ["BMW" , "AUDI" , "MAZDA" , "LEXSUS"]


// cars.forEach(moshinalar => {
//     console.log(moshinalar.split(" "));
    
    
// })


// const oquvchilar = [1,52,53,2,78,54,63,45,74,45];
// const juft = [];
// const toq = [];


// for (let index = 0; index < oquvchilar.length; index++){
//     if (oquvchilar[index] % 2 == 0){
//         juft.push(oquvchilar[index])
//     }
//     else {
//         toq.push(oquvchilar[index])
//     }
// }

// console.log(juft);
// console.log(toq);



// const randomRaqam = Math.round (Math.random() * 100);
// alert(`random raqam ${randomRaqam}`)
// if (randomRaqam % 3 == 0 && randomRaqam % 5 == 0){
//     alert(`${randomRaqam} 5 ga va  3 ga bolinadi`)
// }else if (randomRaqam % 3 == 0){
//     alert(`${randomRaqam} 3 ga bolinadi`)
// }else if (randomRaqam % 5 == 0){
//     alert(`${randomRaqam} 5 ga bolinadi`)
// }else{
//     alert(`${randomRaqam} bolimmidi`)
// }



const sozlar = ['non', 'banan', 'mashina', 'asal', 'olma', 'aziza', 'Gul'];

const bot1 = sozlar.filter(sozlar => sozlar.includes('n'));

const bot2 = sozlar.filter(word => !word.includes('n'));


console.log( bot1 ,'n xarfi ishtirok etgan sozlar');
console.log(bot2 ,'n xarfi ishtirok etmagan sozlar');