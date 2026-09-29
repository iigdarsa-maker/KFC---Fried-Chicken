```javascript
// Tombol pesan sekarang
function orderNow() {
    alert(
        "🍗 Terima kasih!\n\nPesanan kamu sedang diproses."
    );
}


// Tombol tambah menu
function addCart(menu) {
    alert(
        "✅ " + menu + " berhasil ditambahkan ke pesanan!"
    );
}


// Animasi saat scroll
const cards = document.querySelectorAll(".menu-card");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";
            }

        });

    },
    {
        threshold: 0.2
    }
);


cards.forEach((card) => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(50px)";

    card.style.transition =
        "0.7s ease";

    observer.observe(card);

});
```
