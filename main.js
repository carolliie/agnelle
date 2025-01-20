document.addEventListener('DOMContentLoaded', function () {
    new Glider(document.querySelector('.glider'), {
        settingName: settingValue
    });
});

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
})


new Glider(document.querySelector('.glider'), {
    slidesToScroll: 1,
    slidesToShow: 1,
    draggable: true,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    responsive: [
        {
            // screens greater than >= 775px
            breakpoint: 775,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 'auto',
                slidesToScroll: 'auto',
                duration: 0.25
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                duration: 1
            }
        }
    ]
});

