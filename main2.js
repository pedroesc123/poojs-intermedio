// function recursiva(numerito) {
//     console.log(numerito);
//     if (numerito <5) {
//         return recursiva(numerito + 1);
//     } else {
//         return 5;
//     }
// }

const numeritos = [0,1,2,3,4,5,6,7,8,49625684,2,54,3,1];
// let numerito = 0;
// for (let index = 0; index < numeritos.length; index++){
//     numerito = numeritos[index];
//     console.log({index, numerito});
// }


RECURSIVIDAD
function recursiva(numbersArray){
    if (numbersArray.length != 0){
        const firstNum = numbersArray[0];
        console.log(firstNum);
        numbersArray.shift();
        recursiva(numbersArray);
    } 
}