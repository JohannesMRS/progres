// const formMenu = document.getElementById('form-menu');
// const namaMenu = document.getElementById('nama-menu');
// const hargaMenu = document.getElementById('harga-menu'); 
// const daftarMenu = document.getElementById('daftar-menu');
// const floatingBtn = document.getElementById('floating-btn');

// formMenu.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     daftarMenu.innerHTML += `
//         <div class="menu-item">
//             <span>${namaMenu.value}</span>
//             <strong>Rp ${hargaMenu.value}</strong>
//         </div>
//     `

//     namaMenu.value = "";
//     hargaMenu.value = "";
//     namaMenu.focus();
// })

// window.addEventListener('scroll', ()=>{
//     const coordinatForm = formMenu.getBoundingClientRect();

//     if(coordinatForm.bottom < 0){
//         floatingBtn.style.display = 'block';
//     }else{
//         floatingBtn.style.display = 'none';
//     }
// })

// floatingBtn.addEventListener('click', ()=>{
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//     })
// })


// namaMenu.addEventListener('keydown', (e)=>{
//     if(e.key === 'Enter'){
//         e.preventDefault();
//         const pembungkusElement = namaMenu.parentElement;
//         const pembungkusTetangga = pembungkusElement.nextElementSibling;
//         const harga = pembungkusTetangga.querySelector('#harga-menu');
//         hargaMenu.focus();
//     }
// })


const actionGroupBtn = document.getElementById('action-group');
const papanAntrean = document.getElementById('papan-antrean');
const inputNama = document.getElementById('input-nama');

actionGroupBtn.addEventListener('click', (e)=>{
    const dataTipe = e.target.getAttribute('data-tipe');

    if(inputNama.value === ''){
        alert("Input Data Masih Kosong Bang");
        return;
    }

    if(dataTipe === 'reguler'){
        papanAntrean.innerHTML += `
        <div class="antrean-item">
            <span>${inputNama.value} (Reguler)</span>
            <button class="btn-done">Selesai</button>
        </div>
        `
    }else if(dataTipe === 'vip'){
        let elemenBaru = document.createElement('div');
        elemenBaru.classList.add('antrean-item');

        let elemenSpanBaru = document.createElement('span');
        elemenSpanBaru.textContent = `${inputNama.value} (Vip)`;

        let elemenBtnBaru = document.createElement('button');
        elemenBtnBaru.classList.add('btn-done');
        elemenBtnBaru.textContent = "Selesai";

        elemenBaru.appendChild(elemenSpanBaru);
        elemenBaru.appendChild(elemenBtnBaru);
        elemenBaru.classList.add('is-vip')
        papanAntrean.prepend(elemenBaru);

        inputNama.value = '';
        
    }

})


papanAntrean.addEventListener('click', (e)=>{
    if(e.target.classList.contains('btn-done')){
        const antreanItem = e.target.closest('div');
        antreanItem.remove();
    }
})

inputNama.addEventListener('input', ()=>{

    actionGroupBtn.classList.toggle('btn-disabled')
})
