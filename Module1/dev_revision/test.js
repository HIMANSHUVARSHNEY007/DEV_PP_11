// 3.

// function rainDance(obj){
//     for(let j=0 ; j < obj.length ; j++){
//         let sum = 0; 
//         for(let i=0; i<7; i++){
//             sum += obj[j].rainfall[i] 
//         }
//         let avg = sum/7;
//         obj[j].rainfall = avg;
//     }
//     return obj;
// }


// 4.
// function flattenObject(ob) {
//     let toReturn = {};

//     for (let i in ob) {
//         if (!ob.hasOwnProperty(i)) continue;

//         if ((typeof ob[i]) == 'object' && ob[i] !== null) {
//             let flatObject = flattenObject(ob[i]);
//             for (let x in flatObject) {
//                 if (!flatObject.hasOwnProperty(x)) continue;

//                 toReturn[i + '.' + x] = flatObject[x];
//             }
//         } else {
//             toReturn[i] = ob[i];
//         }
//     }
//     return toReturn;
// }


// 8.
// function decToBin(n){
//     let dig , result = 0 , power = 1;
//     while(n>0)
//     {
//         dig = n % 2;
//         n = (n-dig) / 2;
//         result = result + dig*power;
//         power = power * 10;
//     }
//     return result;
// }

// 9.

// function spoon(str){
//     let splittedWords = str.split(" ");
//     let firstCharOfFirst = splittedWords[0][0];
//     let firstCharOfSecond = splittedWords[1][0];
//     let secOfFirst = splittedWords[0].slice(1);
//     let secOfSecond = splittedWords[1].slice(1);
//     let spoonerism = firstCharOfSecond + secOfFirst + " " + firstCharOfFirst + secOfSecond;
//     return spoonerism;
// }

// 14.
