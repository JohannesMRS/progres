const btnSeduh = document.getElementById('btn-seduh')
const layarTimer = document.getElementById('layar-timer')
let variabel = 0;

btnSeduh.addEventListener("click", ()=>{
    let timerSeduh = setInterval(()=>{
        variabel++;
        layarTimer.textContent = variabel;
        if(variabel == 5){
            clearInterval(timerSeduh);
            alert("Kopi telah siap");
        }
    }, 1000)
})