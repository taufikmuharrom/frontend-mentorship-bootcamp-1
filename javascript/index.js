// // regular functions 
function multiplyNumber(width, height) {
    return width * height;
}

// Ternary Operator
// const number = 10;
// const isMoreThan100 = multiplyNumber(number, number) > 99 ? 'Lebih atau sama dengan 100' : 'Kurang dari 100';
// console.log(isMoreThan100);


// switch case
// const hari = 1;

// switch (hari) {
//   case 1:
//     console.log("Senin");
//     break;
//   case 2:
//     console.log("Selasa");
//     break;
//   case 3:
//     console.log("Rabu");
//     break;
//   case 4:
//     console.log("Kamis");
//     break;
//   case 5:
//     console.log("Jumat");
//     break;
//   default:
//     console.log("Akhir pekan atau tidak valid");
// }

// For loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// object
const mahasiswa = {
    nim: "12345678",
    jurusan: "Informatika",
}

console.log(mahasiswa);
console.log(mahasiswa.jurusan);


// arrayObject
const arrayObject = [
    {
        name: "John",
        age: 30,
    },
    {
        name: "Jane",
        age: 25,
    },
    {
        name: "Bob",
        age: 35,
    },
]

const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((number)=> number * 2)
const filteNumberMoreThan3 = numbers.filter((number)=> number >= 3)
let total = 0
const totalNumber = numbers.map((number)=> {
    // 1=> 0 + 1 = 1
    // 2=> 1 + 2 = 3
    // 3=> 3 + 3 = 6
    // 4=> 6 + 4 = 10
    // 5=> 10 + 5 = 15
    total = total + number
})
const totalNumberWithReduce = numbers.reduce((total, number)=> total + number, 0)

const nilaiSemester1 = [80, 75, 90, 85, 70]
// some
const apakahAdaNilaiKurangDari60 = nilaiSemester1.some((nilai)=> nilai < 60)
console.log(apakahAdaNilaiKurangDari60);

// every
const apakahSemuaNilaiLebihDari60 = nilaiSemester1.every((nilai)=> nilai > 60)
console.log(apakahSemuaNilaiLebihDari60);

const nilaiMahasiswa = [
    {
        name: "John",
        age: 20,
        nilai: 90,
        jurusan: "Informatika",
        address: "Bandung"
    },
    {
        name: "Jane",
        age: 22,    
        nilai: 60,
        jurusan: "Informatika",
        address: "Bandung"
    },
    {
        name: "Bob",
        age: 21,
        nilai: 70,
        jurusan: "Informatika",
        address: "Bandung"
    }
]

const hasil = nilaiMahasiswa.filter((mahasiswa)=> mahasiswa.age > 21).map((mahasiswa)=> {
    return {
        ...mahasiswa,
        name : mahasiswa.name + "!"
    }
})
console.log(hasil);


 async function fetchProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    console.log('response',response);
    const data = await response.json();
    console.log('data', data);
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// Call the async function
fetchProducts();

// // While loop
// let i = 0; // 1
// while (i < 10) {
//     console.log(i);
//     i++; // 1
// }










// // arrow functions
// const addNumberArrow = (width, height) => {
//     return width + height;
// }

// function divideNumber(width, height) {
//     return width / height;
// }

// function multiplyNumber(width, height) {
//     return width * height;
// }

// // arrow functions

// const divideNumberArrow = (width, height) => width / height;
// const multiplyNumberArrow = (width, height) => width * height;
// console.log('add number',addNumberArrow(10, 20));
// console.log('divide number',divideNumberArrow(30, 10));
// console.log('multiply number',multiplyNumberArrow(10, 20));



