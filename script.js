/*1.Сделайте функцию, которая отнимает от первого числа второе и делит на
третье. Числа передаются параметром.*/

function result (a,b,c) {
    console.log(a - b / c);
}
result(5,6,8);

/*2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
передается параметром.*/

function cubeNumb (a,b) {
    console.log(a * a * a);
    console.log(b * b)
}
cubeNumb(12,6);

/*3.Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b.*/

function minNumb (a,b) {
    if(a < b) {
        return a;
    }else {
        return b;
    }
}
console.log(minNumb(7,8));

function maxNumb (a,b) {
    if(a > b) {
        return a;
    }else {
        return b;
    }
}
console.log(maxNumb(7,8));

/*4.Напишите две функции: первая ф-ция должна возвращать массив с
числовыми значениями, диапазон которых должен вводиться пользователем
с клавиатуры; вторая – выводить полученный массив.*/

// let startArr = prompt('Введите первое число массива');
// let finishArr = prompt('Введите второе число массива');

// function createArr (startArr, finishArr) {
//     let array = [];
//     for(let i = startArr; i <= finishArr; i++ ) {
//         array.push(i); 
//     }
//         return array;      
//     }

// function showArray (array) {
//     for(let i = 0; i < array.length; i++){
//         console.log(array[i]);
//     }
// }
// let array = createArr(startArr, finishArr);
// showArray(array);

/*5.Сделайте функцию isEven() (even - это четный), которая параметром
принимает целое число и проверяет: четное оно или нет. Если четное - пусть
функция возвращает true, если нечетное — false.*/

// function isEven (a) {  
//      return (a % 2 === 0);      
//     }
//     console.log(isEven(6));
//     console.log(isEven(1));


/*6.Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательные функции isEven и createArr из предыдущих задач.*/

// function getNewArray(array) {
//     let newArray = [];
//     for(let i = 0; i <= array.length; i++) {
//         if(isEven(array[i])) {
//             newArray.push(array[i]); 
//     }
//     }
//     return newArray;
// }
// console.log(getNewArray(array));

/*7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
циклы):
1
22
333
4444
55555
666666
7777777
88888888
999999999
Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
кроме пробела, то пирамида должна быть нарисована этим символом,
например:*/

function pyramid(a) {
    let result = '';
    for(let i = 0; i <= a; i++) { 
        sum = ' ' ;
        for(let j = 0; j < i ; j++) {
            sum += i;     
        }
        result += sum +'\n'; 
    }
    console.log(result);
    
}
pyramid(8);


/*8. Напишите ф-цию, которая рисует равнобедренный треугольник из
звездочек:

*
***
*****
*******
*********

Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
цию, но которая выведет перевернутый треугольник.*/

// function starsOne(a) {
//     let numb = prompt('Введите число');
//     let sum = '';
//     let star = '*'
//     let result = '';
//     for(let i = 1; i <= a; i++) {
//         sum = '';
//         a = numb;
//         for(let j = 0; j < numb - i; j++) {
//             sum += ' ';
//         }
//         for(let j = 0; j < ((i * 2) - 1); j++) {
//             sum += star;
//         }
//         result += sum +'\n'; 
        
//     }
//     console.log(result);
// }
// starsOne(4);


/*9. Напишите ф-цию, которая возвращает массив заполненный числами
Фибоначи от 0 до 1000.*/

function fibonachi(c) {
    let array = [];
    let num1 = 0;
    let num2 = 1;
    for(let i = 0; i <= c; i++) {
        let num3 = num2;
        num2 = num1 + num2;
        num1 = num3;
        array.push(num1);
    }
    console.log(array);
}
fibonachi(1000);

/*10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
опять сложите его цифры. И так, пока сумма не станет однозначным числом
(9 и менее). Исп. Рекурсию.*/

function sumNum(num, i = 0, sum = 0) {
    num = String(num);
    sum += +num[i];
    i++
    if(i < num.length) return sumNum(num, i, sum);
    if(sum > 9) return sumNum(sum, 0, 0);
    console.log(sum);          
    }

 
sumNum(7325);

// function sum1(num) {
//     let numStr = String(num);
//     let sum = 0;
//     for(let i = 0; i < numStr.length; i++) {
//         sum += +numStr[i];
//     }

//     if(sum >= 9) return sum1(sum);
// }
// console.log(sum1(575));
// sum1(555);


/*11. Дан массив с числами (передается параметром). Выведите
последовательно его элементы, используя рекурсию и не используя цикл.*/

function getArr (array) {
    console.log(array[i]);
    i++
    if(i < array.length)  getArr(array);
}
let i = 0;
getArr([1,2,5,7,9,0]);



/*12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
группы студента и выводящую введённые данные в следующем виде:

*****************************
* Домашняя работа: «Функции» *
* Выполнил: студент гр. W4017 *
* Иванов Иван Иванович *
*****************************

Размер рамки должен определятся автоматически по самой длинной строке.
Рамку вывести в консоль.*/

function card() {
    let firstname = prompt('Введите имя'),
        lastname = prompt('Введите фамилию'),
        secondname = prompt('Введите отчество');    
    let groupNumber = prompt('Номер Вашей группы');

    let str1 = 'Домашняя работа: «Функции»';
    let str2 = `Выполнил: студент гр. ${groupNumber}`;
    let str3 = `${lastname} ${firstname} ${secondname}`;
    let result = '';

    let maxLength = str1.length;

    if(maxLength < str2.length) maxLength = str2.length;
    if(maxLength < str3.length) maxLength = str3.length;

    let lineStartEnd = '';

    for(let i = 1; i <= (maxLength + 4);i++) {
        lineStartEnd += '*';
    }
    let strLength = str1.length;
    for(let i = 1; i <= (maxLength - strLength); i++) {
        str1 += ' ';
    }
    let str2Length = str2.length;
    for(let i = 1; i <= (maxLength - str2Length); i++) {
        str2 += ' ';
    }
    let str3Length = str3.length;
    for(let i = 1; i <= (maxLength - str3Length); i++) {
        str3 += ' ';
    }
    str1 = '* ' + str1 + ' *';
    str2 = '* ' + str2 + ' *';
    str3 = '* ' + str3 + ' *';

    result = `${lineStartEnd}\n${str1}\n${str2}\n${str3}\n${lineStartEnd}`;
    console.log(result);
}
// card();

/*13. Напишите ф-цию, которая должна проверить правильность ввода адреса
эл. почты, неиспользуя регулярные выражения. Почта верна при условии:
a. весь адрес не должен содержать русские буквы и спецсимволы, кроме
одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут
быть первыми и последними в адресе, и идти подряд, например: «..», «@.»,
«.@» или «@@», «_@», «@-», «--» и т.п.
b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
имя может содержать только буквы, цифры, но не быть первыми и
единственными в имени, и точку;
c. после последней точки и после @, домен верхнего уровня (ru, by, com и
т.п.) не может быть длиной менее 2 и более 11 символов.*/

function checkEmail(email) {
    let check;
    let arrTrueChars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm','Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '@', '_', '.', '-'];
    let arrTrueSpecChars = ['@', '_', '.', '-'];
    for(let i = 0; i < email.length; i++) {
        if(arrTrueChars.indexOf(email[i]) == -1) {
            check = false;
            break;
        }
    }
    if(arrTrueSpecChars.indexOf(email[0]) > -1 ||
       arrTrueSpecChars.indexOf(email[email.length-1]) > -1) check = false;
    
    for(let i = 0; i < email.length; i++) {
        if(arrTrueSpecChars.indexOf(email[i]) > -1 && 
           arrTrueSpecChars.indexOf(email[i+1]) > -1) {
            check = false;
            break;
           }
    }
    let aPos = email.indexOf('@');
    let dPos = email.lastIndexOf('.');

    let emailName = email.slice(0, aPos);
    let emailDomain = email.slice(aPos+1, dPos);
    let emailZone = email.slice(dPos+1);
    
    if(emailName.length < 2 ||
        emailDomain.length < 2 ||
        emailZone.length < 2 ||
        emailDomain.length > 11 ||
        emailZone.length > 11 ) check = false;
    
    if(check == undefined) check = true;

    return check;
}
console.log(checkEmail("yuliyavasileva@gmail.com"));

/*ДОПЫ*/
/*1.Функция обратного порядка: Создайте функцию reverseString(str), которая принимает строку и возвращает её в обратном порядке*/

function reverseString(str){
   let array = [];
   for(let i = 0; i < str.length;i++) {
    array.push(str[i]);
    
   }
   array.reverse();
   arrayStr = array.join(' ');
   console.log(arrayStr);
   
}
console.log(reverseString('Учимся не плакать при изучении js'));

/*2.Функция для уникальных значений: Напишите функцию uniqueValues(arr), которая принимает массив и возвращает новый массив с уникальными значениями.*/

function uniqueValues(arr) {
     let uniqArr = [];
     for(let i = 0; i < arr.length;i++) {
        if(uniqArr.indexOf(arr[i]) == -1) {
             uniqArr.push(arr[i]);
        }
     }
     console.log(uniqArr);
}

uniqueValues([2,5,7,0,23,2,7,4,99,56,32,23]);

/*3.Функция находит общие элементы в двух массивах: Напишите функцию intersection(arr1, arr2), которая находит и возвращает общие элементы в двух массивах*/

function intersection(arr1, arr2) {

    let interArr = [];
    let maxArr = [];
    let minArr = [];

    if(arr1.length > arr2.length) {
        maxArr = arr1;
        minArr = arr2;
    }else {
        maxArr = arr2;
        minArr = arr1;
    }
    for(let i = 0; i < minArr.length; i++) {
        if(maxArr.indexOf(minArr[i]) > -1 && interArr.indexOf(minArr[i]) == -1) {
            interArr.push(minArr[i]);
        }
    }
    console.log(interArr);
    
}

console.log(intersection([2, 5, 8, 3, 5, 9, 1], [2, 9, 4, 7, 9, 5, 1, 8, 6, 9]));

/*4.Функция поиска элемента в массиве: Напишите функцию contains(arr, value), которая проверяет, содержится ли значение в массиве*/

function contains(arr, value) {
    let check = false;

    if(arr.indexOf(value) > -1) {
            check = true;
        }
        console.log(check);
    
}
contains([15, 31, 12, 45, 9, 4, 67], 9);

/*5.Функция конвертации температуры: Напишите функцию celsiusToFahrenheit(celsius), которая конвертирует температуру из градусов Цельсия в градусы Фаренгейта*/

function celsiusToFahrenheit(celsius) {
    let fareng = (celsius * 9) / 5 + 32;
    console.log(fareng);
}
celsiusToFahrenheit(25);

/*6.Напишите функцию createArr(), которая создает массив, заполняемый "руками" (например, через prompt()), пока пользователь не введет пустую строку. Функция должна вернуть созданный массив*/


function createArr() {
    let arr = [];

    for(let i = 0; ; i++) {
    let userNumb = prompt('Введите число массива');
        if(userNumb != undefined && userNumb != '') {
            arr.push(userNumb);
        }else {
            break;
        }
        }
    console.log(arr);
}
createArr()