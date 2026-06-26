// const formPendaftaran = document.getElementById('form-pendaftaran');
// const inputNama = document.getElementById('input-nama');
// const inputNim = document.getElementById('input-nim');
// const errorNim = document.getElementById('error-nim');
// const btnSubmit = document.getElementById('btn-submit');
// const notification = document.getElementById('notif');


// inputNim.addEventListener('input', ()=>{
//     if(inputNim.value.length < 6){
//         errorNim.style.display = 'block';
//         btnSubmit.setAttribute('disabled', 'true');
//     }else{
//         errorNim.style.display = 'none';
//         btnSubmit.removeAttribute('disabled')
//     }
// })

// formPendaftaran.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     notification.style.display = 'block';
//     notification.innerHTML = `Selamat, ${inputNama.value} Dengan NIM ${inputNim.value} Pendaftaran WebDev kamu Berhasil Di Kirim `;
//     formPendaftaran.reset();
// })



const box = document.getElementById('box');
const inputUlasan = document.getElementById('input-ulasan')
const btnKirim = document.getElementById('btn-kirim');
const containerKomentar = document.getElementById('container-komentar')

btnKirim.addEventListener('click', ()=>{
    let inputValue = inputUlasan.value
    if(inputValue ==''){
        alert("Data Masih Kosong")
        return
    }

    const divBaru = document.createElement('div');
    divBaru.classList.add('item-komentar');

    divBaru.innerHTML = `
    <div>${inputValue}</div>
    <button class = "btn-hapus">Hapus</button>
    `;

    
    const btnHapus = divBaru.querySelector('.btn-hapus');
    btnHapus.addEventListener('click', ()=>{
        divBaru.remove();
    })

    containerKomentar.appendChild(divBaru);

    inputUlasan.value = '';
})

