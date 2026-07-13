// async function getUser() {
//     try{
//         console.log('Memulai Mengambil Data Dari Server...');
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//         if(!response.ok){
//             throw new Error(`Gagal mengambil data: ${response.status}`);
//         }

//         const dataUser = await response.json();

//         console.log(`Name: ${dataUser.name}`);
//         console.log(`Username: ${dataUser.username}`);
//     }catch(error){
//         console.log(error);
//     }
// }
// getUser();


// async function sinkronisasiProduk(){
//     try{
//         console.log("Mengambil Data Dari Server....");

//         const response = await fetch('https://fakestoreapi.com/products/1');

//         if(!response.ok){
//             throw new Error(`Server Response: ${response.status}`);
//         }

//         const dataProduk = await response.json();

//         console.log("=== SINKRONISASI DATA PRODUK ===");
//         console.log(`Nama Produk: ${dataProduk.title}`);
//         console.log(`Harga: USD ${dataProduk.price}`);
//         console.log(`Kategori: ${dataProduk.category}`);
//         console.log(`Rating: ${dataProduk.rating.rate} / 5`);
//     }catch(error){
//         console.error(`Gagal Hit API: ${error.message}`);
//     }
// }

// sinkronisasiProduk();

const listData = document.getElementById("list-data");
const btnLoad = document.getElementById("btn-load");

async function dataProduk() {
    try{
        listData.innerHTML = `<p>Mengambil Data.....</p>`;

        const response = await fetch('https://dummyjson.com/products/1');

        if(!response.ok){
            throw new Error('server response: ', response.status);
        }

        const produk = await response.json();

        listData.innerHTML = `
            <div>
                <p>${produk.title}</p>
                <p>${produk.category}</p>
                <p>${produk.price}</p>
            </div>
        `
    }catch(error){
        listData.innerHTML = `<p>${error.message}</p>`;
    }

}
btnLoad.addEventListener('click', dataProduk);
