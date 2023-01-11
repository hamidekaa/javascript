// function topla(){
//     console.log(5+7)

// }
// topla();
// topla();
// topla();

//---------------------------------------------
// parametreli metot

// function yazdir(name,surname){

// console.log(name+ " " + surname);
// }

// yazdir("Hamie","Kaya");
// yazdir("Hamide", "Kara");


//---------------------------------------------
// function cube(sayi){
//     console.log(sayi*sayi*sayi);
// }
// cube(3); //consolda üün küpü görünür.
// cube(5);



//---------------------------------------------



// et yas = Number(prompt("Yaşınızı giriniz."));

// function kontrolEt(yas){
//     if(yas>18){
//         console.log("ehliyet alabilirsiniz.");
    
// }else{
//     console.log("ehliyet alamazsınız");
// }
// }
// kontrolEt(yas);


//---------------------------------------------
//geriye değer döndüren metot






//expression yöntemi ile fonk. tanımlama

// const printHello = function () {
//     console.log("hello");
    
// }
// printHello()
// printHello()



// function greet(firstName , lastName) {
//     console.log(`Hi, ${firstName} ${lastName}`)
    
// }
// greet("Hamide" , "Kaya") 


// function yazdir(isim,soyisim){
//     console.log(isim+ " "+ soyisim);

// }
// yazdir("Hamide" ," Kaya");

// cube(3);

// function cube(sayi){
//     let sonuc= sayi*sayi*sayi;
     
// }


// const arr = Array()
// console.log(arr)

// const fruits = ['banana', 'orange', 'mango', 'lemon']

// console.log(fruits.length);

// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
// console.log(vegetables.length);


// const arr1 = [
//     'Asabeneh',
//     250,
//     true,
//     { country: 'Finland', city: 'Helsinki' },
//     { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
// ] // arr containing different data types
// console.log(arr1)


//!split ile array

// let js = 'javaScript'

// let chars = js.split('')

// console.log(chars);
// console.log(chars.length);



// let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

// const comp = companiesString.split(',')
// console.log(comp);
// console.log(comp.length);


// let ist = 'sarıyer beykoz  çengelköy'
// let istanbul = ist.split('')
// console.log(istanbul);
// console.log(istanbul.length);




// const numbers = [0, 3.14, 9.81, 37, 98.6, 100]

// console.log(numbers.length);
// console.log(numbers[5]);

// console.log(numbers[0]);
// numbers [0]= 20

// console.log(numbers);



// const yeni = Array(9).fill('ali')

// console.log(yeni);


// const hamide = ['rabia','mustafa','seda','muharrem','naime']

// const ozi = ['mustafa','seyhan','efe']

// const davet = ozi.concat(hamide)

// console.log(davet);


// console.log(hamide.indexOf('seda'));



// let meyveler=['muz', 'mandalina', 'portakal', 'mango']
// let index = meyveler.indexOf('mango')

// if(index===3){
//     console.log('bu meyve üçüncü indextedir');
// }else{console.log('bu meyve üçüncü indexte yoktur');}






let meyveler= ['mango','portakal','mandalina','muz']

console.log(meyveler);


let numaralar = [5, 100, 20.3, 25,67]
console.log(numaralar.length);



let sedanınAilesi=['serap', 'erdem' ,'selim']

let hamideninAilesi=['mustafa', 'rabia','mami','naime']

console.log(hamideninAilesi.concat(sedanınAilesi));


let number=[5, 6, 7, 20, 27, 13]
let number2=[80,8,30]

console.log(number.concat(number2));

let birlestirme= number.concat(number2).sort((number,number2)=>number-number2);


console.log(birlestirme);


let sıralama1= number.sort()
console.log(sıralama1);





const numbers = [1, 2, 3, 4, 5]

console.log(numbers.indexOf(4));


const fruits = ['banana', 'orange', 'mango', 'lemon']

console.log(fruits.indexOf(''));


console.log(fruits.slice(0,3));