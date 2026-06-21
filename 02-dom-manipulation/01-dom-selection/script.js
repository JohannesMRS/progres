const judul = document.getElementById("nama-kelas");
const btn = document.getElementsByTagName("button");
const btnConvert = [...btn];

const li = document.querySelectorAll(".lulus");

judul.style.color = "green";

judul.textContent = "Dashboard Evaluasi Polmed";

btnConvert.forEach((item) => {
  item.style.fontWeight = "bold";
});

li.forEach((item) => {
  item.style.backgroundColor = "yellow";
});
