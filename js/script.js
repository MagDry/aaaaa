// console.log("Hello World!")

// document.addEventListener('DOMContentLoaded', function(){


// });


// // ZMIENNE I console.LOG

// // var <- przestarzała,
// // let <- zmienna, którą można nadpisać
// // const <- zmienna, które nie można (z zasady) nadpisać

// let numberOne = 1;
// console.log(numberOne);

// let piesek = "pies";
// console.log(piesek);
// console.log("pies");

// // let xyz/asd <- tak nie nazywamy zmiennych

// let inwokacja = "Litwo, Ojczyzna moja, Ty jesteś jak zdrowie...";
// console.log(inwokacja);

// const catName = "Zeno";
// console.log(catName);
// // const catName = "Leonidia";
// // console.log(catName);

// // let piesek = "Reksiu"; <- wyświetlany błąd to kwestia zmian developerskich w przeglądarce

// let Person = {
//     name: "Kasia",
//     sex: "woman",
//     age: 24
// }

// console.log(Person);
// console.log(Person.age, Person.name);

// // OPERATORY PORÓWNANIA

// // == porównywana jest tylko wartość
// // === porównywana jest zarówno wartość jak i typ

// let number24 = 24;
// let string24 = "24";
// let number12 = 13;

// console.log(number24==string24);
// console.log(number24===string24);
// let eqOne24 = (number24==string24);
// let eqTwo24 = (number24===string24);

// // zaprzeczenia -> zamiast pierwszego "=" dajemy "!"

// console.log(number24!=string24); 
// console.log(number24!==string24);

// // w przypadku porównywania wartości I typu, aby konsola wyświetliła true:
// // === -> oba muszą być spełnione;
// // !== -> przynajmniej jeden musi być spełniony;


// // OPERATORY LOGICZNE
// // && -> (i) jeśli pierwszy warunek nie jest spełniony, to reszty nawet nie sprawdza -> false
// // || -> (lub) jeśli chociaż jeden warunek jest spełniony -> true;
// // ! -> zaprzeczenie -> jeśli warunek jest prawą -> false;
// // ^ -> (lub) tylko jeden POWINIEN być prawdziwy, wtedy true, ale jeśli oba prawdziwe lub fałszywe -> false (w przypadku ^ -> jeśli wyświetli się 1 -> to = true, jeśli 0 -> false)

// console.log((number24==string24)&&(number24===string24)); //false, tylko ten pierwszy jest spełniony
// console.log(eqOne24&&eqTwo24); //false, tylko ten pierwszy jest spełniony
// console.log((number24==string24)||(number24===string24)); //true, ten pierwszy jest spełniony, więc okej
// console.log((number24==string24)^(number24===string24));  //1=true, tylko jest spełniony

// // OPERATORY WARUNKOWY

// let number15 = 15;

// // let result15 = (number15 > 5) ? "tak, jest większe" : "nie, nie jest większe";
// // console.log(result15);

// // let result15 = (number15 > 5) ? alert("tak, jest większe") : alert("nie, nie jest większe");
// // console.log(result15);

// let hellenName = "Hellen";
// console.log(hellenName.length);

// // let resultHellen = (hellenName.length == 6) ? alert("tak, w imieniu jest 6 liter") : alert("tak, w imieniu jest 5 liter");




// _____________________________

// // INSTRUKCJE WARUNKOWE

// // let homework = "zrobione";
// let homework = "nie jest zrobione";
// // let homework = "pies mi zjadł zadanie";
// // let homework = 1223;


// // INSTRUKCJA "IF"

// if (homework === "zrobione") {
//     console.log("Super! Będzie piątka!");
// } else if (homework === "nie jest zrobione") {
//     console.log("Zrób zadanie!");
// } else {
//     console.log("Weź na wszelki wypadek nieprzygotowanie!");
// }


// // INSTRUKCJA WARUNKOWA SWITCH

// switch(homework) {
//     case "zrobione": {
//         console.log("Super! Będzie piątka!");
//         break;
//     } 
//     case "nie jest zrobione": {
//         console.log("Zrób zadanie!");
//         break;
//     }
//     default: {
//         console.log("Weź nieprzygotowanie, ale uważaj, zostało ostatnie!");
//         alert("Uwaga!");
//     }
// }



// PĘTLE

// PĘTLA FOR

// for (let i=0; i<=10; i++) {
//     console.log(i)
// }

// for (let i=0; i<=10; i=i+1) {
//     console.log(i)
// }

// for (let i=0; i<=10; i=i+3) {
//     console.log(i)
// }

// for (let i=5; i<=10; i++) {
//     console.log(i)
//     // alert(i)
// }

// for (let i=950; i<=1000; i++) {
//     console.log(i)
//     console.log("Bardzo długa pętla")
// }

// for (let i=0; i<=10; i++) {
//     console.log("Hej! Uczymy się o pętli for!")
// }


// DLACZEGO WARUNKI SĄ TAK WAŻNE 
// PONIŻSZA PĘTLA JEST NIESKOŃCZONA, ZACZYNA SIĘ OD ZERA I NIE MA WARUNKU KOŃCOWEGO
// for (let i=0; i>=0; i++) {
//     console.log(i)
// }

// let number112 = 112;

// for (let i = 0; i <= 102; i++) {
//     number112 = number112 + 1;
//     console.log(number112);
// }

// for (let i = 113; i <= 215; i++) {
//     console.log(i)
// }

// PĘTLA WHILE

// let i = 0;

// while ((i != 274) && (i < 15)) {
//     i = Math.ceil(Math.random()*100);
//     console.log(i);
//     console.log("Sukces!");
// }


// console.log(Math.random());
// console.log(Math.random()*100);
// console.log(Math.ceil(Math.random()*100));


// let i = 0;
// let result = 0;

// while (i <= 5) {
//     result = Math.random() * 10;
//     console.log(result);
//     i++;
// }

// PĘTLA WHILE - ANALIZA
// petla wykonuje się tyle razu, na ile pozwala warunek

// let i = 0;
// let result = 0;

// while (i < 3) {
//     i++;
//     result += i;
//     console.log(result);
// }

// w tym wypadku iteracja: i = 0, i = 1; i = 2; 
// więc result: 
// dla i = 0 -> r = 1;
// dla i = 1 -> r = 2+1=3;
// dla i = 2 -> r = 4+2=6;


// TABLICE

// let arrow = [1,3,4,"Ala",6,7];
// let arr3D = [[1,2,3], [2,3,4], [3,4,5]];

// console.log(arrow);
// console.log(arr3D);

// console.log(arrow[5]);
// console.log(arr3D[1]);
// console.log(arr3D[1][2]);

// console.log(arrow.length);


// for (let i = 0; i < arrow.length; i++) {
//     console.log(arrow[i]);
// }


// METODY STRING

// let testString = "Janusz Kowalski";
// let drugiString = " ma psa."
// let str = "Dane: ";


// console.log(testString+drugiString);
// console.log(testString+" (tutaj wstawiam spację)"+drugiString);

// // ŁĄCZENIE STRINGÓW
// let stringReasult = str.concat(testString,drugiString);
// console.log(stringReasult)
// // alert(stringReasult);

// let strIndexOf = testString.indexOf('u');
// console.log(strIndexOf); //3

// let lunch = "Kanapka z serem";
// // console.log(lunch);

// let newLunch = lunch.replace("serem", "szynką");
// console.log(newLunch);

// let idName = "Anna Kowalska";
// let newName = idName.replace("Anna", "Katarzyna Maria");
// console.log(newName);

// let ala = "Ala ma kota, ale nie ma psa i rybek";
// let infoAla = ala.split(" ");
// console.log(infoAla);

// let infoAla2 = ala.split(",");
// console.log(infoAla2);

// let text = "test";

// console.log(text.toUpperCase());

// Math.random();
// Math.ceil(Math.random());
// Math.floor();

// METODY - STRINGI
// string.metoda(czasem co ma zrobić ta metoda (jeśli metoda w ogóle przewiduje))

// METODY - MATEMATYKA
// Math.metoda(czasem dla jakiś liczb, jeśli metoda przewiduje)


// FUNKCJE
// ZAPIS Z WYKORZYSTANIEM DEFINICJI FUNKCJI

function helloWorldFunction() {
    console.log("Hello World"); //tutaj zapisujemy wszystko to, co funkcja ma zrobić
}

// helloWorldFunction();

function mathFun() {
    let num1 = 2;
    let num3 = 4;
    result = num1 + num3;
    alert(result);
}

// mathFun();

// numberA i numberB - są to argumenty fukcji

function aLotOfMath(numberA, numberB) {
    result = numberA + numberB;
    console.log(result);
}

// aLotOfMath(3,5);
// aLotOfMath(2,39);
// aLotOfMath(1,123);



function maths(a, b) {
    return a*b + b*b;
}

// console.log(maths(3, 5));




// WYRAŻENIE FUNKCYJNE 

let helloFoo = function helloWorldFoo() {
    console.log("Hello World");
}
// helloFoo(); 


// SKRÓCONE WYRAŻENIE FUNKCYJNE

let shortHelloFoo = function() {
    console.log("Hello World Short!");
} 
// shortHelloFoo();


function getName(name, age, city) {
    console.log(name+" Nowak");
    console.log(name+" ma "+age+" lat.");
    console.log(name+" mieszka w "+city);
}

// getName("Ania", 7, "Krakowie");
// getName("Karol", 12, "Warszawie");
// getName("Zenobiusz", 3, "Poznaniu");
// getName("Leonidia", 2, "Wrocławiu");
// getName("Leonidas", 27, "Gdański");

function animalName(name) {
    return name + " jest kotem.";
}

// słowo return ZAWSZE musi być na końcu (w ostatniej linijce funkcji)

// console.log(animalName("Leonidia"));

// FUNKCJE CZASU

// setTimeout(function() {
//     console.log("Działam po 2 sekundach");
// }, 2000);

let interval = setInterval(function() {
    console.log("Działam co sekundę!");
}, 1000);

clearInterval(interval);



// LOCAL STORAGE

// let name = "Kasia";
// let lastname = "Kowal";

// DODAWANIE ELEMENTÓW DO LOCAL STORAGE
function setItemToLocalStorage(name, lastname) {
    localStorage.setItem("Imię", name);
    localStorage.setItem("Nazwisko", lastname);
}

// setItemToLocalStorage("Ania", "Nowak");
setItemToLocalStorage("Karol", "Kowal");


// USUWANIE ELEMENTÓW Z LOCAL STORAGE
function removeItemFromLS() {
    localStorage.removeItem("Imię", name);
}

removeItemFromLS();

// ZWRACANIE DANYCH Z LOCAL STORAGE
// (do analizy)

// function getItemFromLS() {
//     // localStorage.getItem("Nazwisko", lastname);
//     console.log(localStorage.getItem("Nazwisko", lastname));
// }

// getItemFromLS();

function clearLocalStorage() {
    localStorage.clear();
}

clearLocalStorage();

//ŁĄCZENIE HTML I JS


//JAK ZNALEŹĆ ODPOWIEDNIE ELEMENTY W HTML ZA POMOCĄ JS?

// SZUKAMY PO ZNACZNIKU/TAGU
let findHeader = document.getElementsByTagName("header");
console.log(findHeader);

// SZUKAMY PO IDENTYFIKATORZE

// let findSecondDiv = document.getElementById("secondDiv");
// console.log(findSecondDiv);

// SZUKAMY PO KLASIE

let findAll = document.getElementsByClassName("container");
console.log(findAll);

// let findMain = document.getElementsByClassName("mainDiv");
// console.log(findMain);


//EVENT - KLIKNIĘCIE NA BUTTON


let findBtn = document.getElementById("btn");
console.log(findBtn);

function clickOnBtn() {
    alert("Kliknięto mnie!");
}

findBtn.onclick = clickOnBtn;


//event po najechaniu kursorem na drugi div

let findSecondDiv = document.getElementById("secondDiv");

function mouseEnter() {
    // alert("Kursor znalazł w obszarze drugiego diva!");
    console.log("kolejny raz znalazł się na obszarze diva")
}

findSecondDiv.onmouseenter = mouseEnter;


//CHCEMY WYKORZYSTAĆ: https://www.w3schools.com/js/tryit.asp?filename=tryjs_events1

let findParagraph = document.getElementById("data");
console.log(findParagraph);

let findBtnData = document.getElementById("btnData");
console.log(findBtnData);


console.log(Date());

function displayDate() {
    findParagraph.innerHTML = Date();
    // findParagraph.innerHTML = "Mój tekst";
}

findBtnData.onclick = displayDate;


//SZUKARNIE DZIECKA W RAMACH RODZICA

let findMain = document.querySelector(".mainDiv");

let blueDiv = findMain.querySelector("#secondDiv");
console.log(blueDiv);