// ЗАДАНИЕ 1
// найти х методом подбора 0 = k * x + c;



// ЗАДАНИЕ 2
// 2) ввод 2 числа в заданом диапозоне - сгенерировать число внутри диапозона


// var min = +process.argv[2],
//     max = +process.argv[3];

// c = Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(c);

// ЗАДАНИЕ 3
//3) ввод 3 симвала ( число, символ операции(+-*/), число) - посчитать


// var a = +process.argv[2],
//     b = process.argv[3],
//     c = +process.argv[4];


// switch (b) {
//     case '+':
//         result = a + c;
//         console.log(a + ' + ' + c + ' = ' + result);
//         break;
//     case '-':
//         result = a - c;
//         console.log(a + ' - ' + c + ' = ' + result);
//         break;
//     case '*':
//         result = a * c;
//         console.log(a + ' * ' + c + ' = ' + result);
//         break;
//     case '/':
//         result = a / c;
//         console.log(a + ' / ' + c + ' = ' + result);
//         break;
//     default:
//         console.log('Некорректный знак операции.');
// }

//4) ввод фигура высота и ширина - вывести графически


// var figure = process.argv[2],
//     width = +process.argv[3],
//     height = +process.argv[4],
//     star = '*',
//     lineTriangle = '',
//     i = 0,
//     space = "";


// switch (figure) {
//     case 'triangleCenter':
//         while (i < width) {
//             space = "";
//             star = "";
//             for (j = 0; j < width - i; j++) space += " ";
//             for (j = 0; j < 2 * i + 1; j++) star += "*";
//             console.log(space + star);
//             i++;
//         }
//         break;
//     case 'triangleLeft':
//         for (var i = 0; i < width; i++) {
//             lineTriangle += star;
//             console.log(lineTriangle);
//         }
//         break;
//     case 'rectangle':
//         for (h = 0; h < height; h++) {
//             var line = '';
//             for (var w = 0; w < width; w++) {
//                 line += star;
//             }
//             console.log(line);
//         }
//         break;
//     default:
//         console.log('Ошибка');
// }



//5) ввод ссумму - сгенерировать верстку которая переведет в другую валюту(вставить в html файл)

// var sumGRN = 20,
//     kursUSD = 27,
//     kursRUB = 0.4;

// for (count = 1; count < 2; count++) {
//     document.write('<ul>');
//     document.write('<li>Введенная сумма в гривнах: ' + sumGRN + '</li>');
//     sumUSD = sumGRN * kursUSD;
//     document.write('<li>Ваша сумма в долларах: ' + sumUSD + '</li>');
//     sumRUB = sumGRN * kursRUB;
//     document.write('<li>Ваша сумма в рублях: ' + sumRUB + '</li>');
//     document.write('</ul>');
// }