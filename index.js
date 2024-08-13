// 1. Array və target var targetdən sonraki elementin indeksini tap:
// let arr1 = [3, 7, 6, 12, 45, 16];
// let target = 20;
// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] === target) {
//         console.log(i + 1);
//     }
// }



// 2. Array-in içində neçə cüt element var:

// let arr2 = [5, 8, 16, 21, 16, 42, 3, 74];
// let countEven = 0;
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 == 0) {
//         countEven++;
//     }
// }
// console.log(countEven);



// 3. Array içindəki A hərfi ilə başlayan sözlər:

// var arr3 = ['Angola', 'France', 'Spain', 'Austria', 'Germain'];
// for (var i = 0; i < arr3.length; i++) {
//     if (arr3[i].startsWith("A")) {
//         console.log(arr3[i]);
//     }
// }



// 4. Array-dəki ədədlərin ədədi ortası:

// let arr4 = [10, 50, 235];
// let sumAverage = 0;
// for (let i = 0; i < arr4.length; i++) {
//     sumAverage += arr4[i];
// }
// let average = sumAverage / arr4.length;
// console.log(average);



// 5. Array-in içində neçə element olduğunu tap:

// let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let num = arr5.length;
// console.log(num);



// 6. Array-in içindəki tam ədədlərin cəmi (for ilə):

// let arr6 = [1, 4, 8, 10, 16];
// let sum = 0;
// for (let i = 0; i < arr6.length; i++) {
//     sum += arr6[i];
// }
// console.log(sum);



// 7. Array-in içindəki tam ədədlərin cəmi (while ilə):

// let arr7 = [1, 4, 8, 10, 16];
// let sumWhile = 0;
// let i = 0;
// while (i < arr7.length) {
//     sumWhile += arr7[i];
//     i++;
// }
// console.log(sumWhile);



// 8. Array-in içindəki ən kiçik ədəd:

// let arr8 = [1, 4, 9];
// let min = arr8[0];
// for (let i = 1; i < arr8.length; i++) {
//     if (arr8[i] < min) {
//         min = arr8[i];
//     }
// }
// console.log(min);



// 9. Array-lərin içindəki tək ədədlərin cəmi:

// let arr9 = [3, 2, 1, 7, 11, 12, 17];
// let sumOdd = 0;
// for (let i = 0; i < arr9.length; i++) {
//     if (arr9[i] % 2 !== 0) {
//         sumOdd += arr9[i];
//     }
// }
// console.log(sumOdd);



// 10. Array-in içində sonu 9 olan neçə ədəd var:

// let arr10 = [1, 19, 9, 29, 99, 22, 5, 0, 6, 89, 59];
// let countLastNine = 0;
// for (let i = 0; i < arr10.length; i++) {
//     if (arr10[i] % 10 == 9) {
//         countLastNine++;
//     }
// }
// console.log(countLastNine);



// 11. Array-lərin hamısının cüt olub olmadığını yoxlayın:

// let arr11 = [1, 2, 3, 4, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr11.length; i++) {
//     if (arr11[i] % 2 == 0) {
//         console.log(arr11[i]);
//     }
// }



// 12. Array-in içində neçə tək element var:

// let arr12 = [1, 3, 16, 5, 9, 11, 55, 21, 24, 27];
// let countOdd = 0;
// for (let i = 0; i < arr12.length; i++) {
//     if (arr12[i] % 2 !== 0) {
//         countOdd++;
//     }
// }
// console.log(countOdd);