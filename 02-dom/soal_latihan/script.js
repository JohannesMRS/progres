// const inputTotal = document.getElementById('input-total');
// const inputGroup = document.getElementById('input-group');
// const selectorOrang = document.getElementById('selector-orang');
// const totalPerOrang = document.getElementById('total-per-orang')
// const allTombol = document.querySelectorAll('.btn-orang');

// inputTotal.addEventListener('input', ()=>{
//     let cekStatus = Number(inputTotal.value) <= 0;
//     allTombol.forEach((item)=>{
//         item.disabled = cekStatus;
//         item.classList.add('btn-without-hover')
//     })
// })



// selectorOrang.addEventListener('click', (e)=>{
//     if(e.target.classList.contains('btn-orang')){
//         const dataOrang = e.target.getAttribute('data-jumlah');
//         if(Number(inputTotal.value) <= 0 || inputTotal.value == ''){
//             alert("Total Masih Kosong");
//             return
//         }


//         let totalAkhir = Number(inputTotal.value) / Number(dataOrang);
//         let totalPalingAkhir = totalAkhir.toFixed(2);
        
//         totalPerOrang.textContent = `Rp ${totalPalingAkhir}`;
//         inputTotal.value = "";
//         allTombol.forEach((item)=>{item.disabled = true})
//     }
// })


const tombolMeja = document.getElementById('grup-tombol-meja');
const inputPesanan = document.getElementById('input-pesanan');
const listPesanan = document.querySelector('.list-pesanan');

tombolMeja.addEventListener('click', (e)=>{
    if(e.target.classList.contains('btn-meja')){
        const btnNoMeja = e.target.getAttribute('data-target-meja');
        const kartuMeja = document.getElementById(btnNoMeja);
        if(btnNoMeja == 'meja-1'){
            listPesanan.innerHTML += `
                <p>hello</p>
            `
        }
    }
})