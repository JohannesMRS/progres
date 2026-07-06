const dataMahasiswa = [
    {nama: "Johannes", kelas: "MI-4B"},
    {nama: "Zaky", kelas: "MI-4B"},
    {nama: "Riah", kelas: "MI-4A"},
    {nama: "Monica", kelas: "MI-4E"}
]

const mahasiswaMapped = dataMahasiswa.map(item=>item.nama)
console.log(mahasiswaMapped)


function kalikanSemua(arr, pengali){
    const hasil = arr.map((item)=>item*pengali);
    return hasil;
}

console.log(kalikanSemua([1,2,3,4], 10))


const produk = [
  { nama: "Laptop", harga: 8000000 },
  { nama: "Mouse", harga: 150000 },
  { nama: "Keyboard", harga: 350000 },
];

function naikkanHarga(data, nama, kenaikanPersen){
    return data.map((item)=>{
        if(item.nama == nama){
            return{
                ...item,
                harga: item.harga + (item.harga * kenaikanPersen/100)
            }
        }else{
            return item;
        }
    })
}

console.log(naikkanHarga(produk, "Mouse", 20));