const produk = [
  { nama: "Laptop", harga: 8000000 },
  { nama: "Mouse", harga: 150000 },
  { nama: "Keyboard", harga: 350000 },
];

function cariProduk(data, nama){
    return data.find((item)=>item.nama==nama);
}

console.log(cariProduk(produk, "Mouse"))


// Find Kompleks

function produkTermahal(data, batas){
    let dataSort = [...data].sort((a, b)=>b.harga-a.harga);
    let dataFilter = dataSort.find((item)=>item.harga < batas);
    return dataFilter
}

console.log(produkTermahal(produk, 1000000));