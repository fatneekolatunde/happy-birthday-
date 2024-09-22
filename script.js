document.addEventListener("DOMContentLoaded", function() {
    const music = document.getElementById('birthday-music');
    const surpriseBtn = document.querySelector('.surprise-btn');
    const surpriseDiv = document.getElementById('surprise');
    const sendWishBtn = document.getElementById('send-wish-btn');
    const wishInput = document.getElementById('wish-input');
    const wishDisplay = document.getElementById('wish-display');

    let clickCount = 0;
    const maxClicks = 5; // Jumlah klik untuk mengganti ke GIF

    // Event setelah tombol surprise diklik
    surpriseBtn.addEventListener('click', function() {
        // Tampilkan div surprise
        surpriseDiv.classList.toggle('hidden');
        music.play();  // Putar musik ulang tahun

        // Gambar kue pertama
        const cakeImg = document.createElement('img');
        cakeImg.src = 'assets/images/cake1.gif';  // Gambar pertama
        cakeImg.classList.add('cake');
        surpriseDiv.appendChild(cakeImg); // Tambahkan gambar ke surpriseDiv

        // Menambahkan pesan petunjuk
        const hintMessage = document.createElement('p');
        hintMessage.textContent = `TIUP LILINNYA DIAN (klik = tiup hehe).`;
        hintMessage.classList.add('hint-message');
        surpriseDiv.appendChild(hintMessage); // Tambahkan hintMessage ke surpriseDiv

        // Event untuk mengganti gambar setelah beberapa kali klik
        cakeImg.addEventListener('click', function() {
            clickCount++;
            if (clickCount < maxClicks) {
            } else {
                // Ganti dengan gambar GIF (animasi) setelah mencapai jumlah klik
                const cakeGif = document.createElement('img');
                cakeGif.src = 'assets/images/cake-blowing.gif';  // Gambar kedua (GIF)
                cakeGif.classList.add('cake');
                surpriseDiv.replaceChild(cakeGif, cakeImg);  // Ganti gambar kue statis dengan GIF

                // Ganti pesan petunjuk setelah GIF muncul
                hintMessage.textContent = "ASIK MATI! Selamat ulang tahun!";
            }
        });
    });

    // Event untuk mengirimkan birthday wish
    sendWishBtn.addEventListener('click', function() {
        const userWish = wishInput.value.trim();
        if (userWish !== "") {
            wishDisplay.textContent = "SEMOGA DIKABULKAN AAMIIN";
            wishInput.value = "";  // Mengosongkan input setelah mengirim
        } else {
            alert("Please enter a birthday wish!");
        }
    });
});