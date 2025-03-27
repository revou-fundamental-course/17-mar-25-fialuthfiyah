/* JavaScript */
/* File: js/script.js */
function hitung() {
    let sisi = document.getElementById("sisi").value;
    if (sisi === "" || sisi <= 0) {
        alert("Masukkan angka yang valid!");
        return;
    }
    let luas = sisi * sisi;
    let keliling = 4 * sisi;
    document.getElementById("hasil").innerHTML = `Luas: ${luas} cm² <br> Keliling: ${keliling} cm`;
}

function reset() {
    document.getElementById("sisi").value = "";
    document.getElementById("hasil").innerHTML = "";
}