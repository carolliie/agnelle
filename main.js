document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});


document.addEventListener("DOMContentLoaded", () => {
    const banners = document.querySelectorAll('.banner');
    const nuvemRosa = document.querySelectorAll('#nuvem-rosa');
    const sobreSection = document.querySelector('.sobre');
    const encomendar = document.querySelector('.encomendar');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    banners.forEach(banner => {
        observer.observe(banner);
    });

    nuvemRosa.forEach(nuvemRosa => {
        observer.observe(nuvemRosa);
    });

    observer.observe(sobreSection);
    observer.observe(encomendar);
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburguer = document.getElementById('hamburguer');
    const menuMobile = document.getElementById('menu-mobile');

    hamburguer.addEventListener("click", () => {
        menuMobile.classList.toggle("active");
        document.querySelectorAll("#bar").forEach((bar) => {
            bar.classList.toggle("active");
        });
    })
});

