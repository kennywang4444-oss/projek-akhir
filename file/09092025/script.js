let selectElement = document.getElementById('film');
let imgElement = document.getElementById('img');
let hargaTiket = document.getElementById('harga');
let sinopsis = document.getElementById('sinopsis');

selectElement.addEventListener("change", function(){
    let selectValue = selectElement.value;

    if(selectValue === "film1") {
        imgElement.src = 'assests/Screenshot 2025-08-20 181028.png';
        harga = 20000 ;
        sinopsis.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ea voluptas esse quaerat ipsa debitis nobis eum eligendi corrupti, expedita, aspernatur sed repellendus sapiente accusantium? Nobis consectetur vel delectus quidem.';
    } else if(selectValue === "film2") {
        imgElement.src = 'assests/Screenshot 2025-08-20 183024.png';
        harga = 30000;
        sinopsis = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ea voluptas esse quaerat ipsa debitis nobis eum eligendi corrupti, expedita, aspernatur sed repellendus sapiente accusantium? Nobis consectetur vel delectus quidem.';
    } else if(selectValue === "film3") {
        imgElement.src = 'assests/Screenshot 2025-08-20 181028.png';
        harga = 40000;
        sinopsis = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ea voluptas esse quaerat ipsa debitis nobis eum eligendi corrupti, expedita, aspernatur sed repellendus sapiente accusantium? Nobis consectetur vel delectus quidem.';

    } 
    hargaTiket.textContent = `Rp ${harga}`
})


function hitung() {
    let JTiket = parseFloat(document.getElementById('JTiket').value);
    let bayar = `Rp ${harga*JTiket}`;
    const formatBayar = bayar.toLocaleString('id - ID')
    document.getElementById('bayar').textContent = formatBayar;
}