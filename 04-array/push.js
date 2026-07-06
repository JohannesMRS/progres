const dataMahasiswa = [
    {nama: "Johannes", kelas: "MI-4B"},
    {nama: "Zaky", kelas: "MI-4B"},
    {nama: "Riah", kelas: "MI-4A"},
    {nama: "Monica", kelas: "MI-4E"}
];

const mahasiswaBaru = {nama: "Musbar", kelas: "MI-4B"}
dataMahasiswa.push(mahasiswaBaru)
console.log(dataMahasiswa)


function tambahBuah(arr, buah){
    arr.push(buah)
    return arr;
}

console.log(tambahBuah(["Apel", "Jeruk"], "Semangka"))


// Manual Filter

function angkaGenap(arr){
    let hasil = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0 ){
            hasil.push(arr[i])
        }
    }
    return hasil
}

console.log(angkaGenap([1,2,3,4,5,6]));