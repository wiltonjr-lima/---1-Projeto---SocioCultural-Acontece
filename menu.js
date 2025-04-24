document.addEventListener('DOMContentLoaded', function () {
    const btnMenu = document.querySelector('.btn-abrir-menu'); // Botão de abrir o menu
    const menuMobile = document.getElementById('menu-mobile'); // Menu mobile
    const btnFechar = document.getElementById('btn-fechar'); // Botão de fechar o menu
    const overlayMenu = document.getElementById('overlay-menu'); // Overlay de fundo

    // Quando clicar no botão de menu, abre o menu mobile
    btnMenu.addEventListener('click', function () {
        menuMobile.classList.add('abrir-menu');
        overlayMenu.style.display = 'block'; // Mostrar o fundo escuro
    });

    // Quando clicar no botão de fechar, fecha o menu mobile
    btnFechar.addEventListener('click', function () {
        menuMobile.classList.remove('abrir-menu');
        overlayMenu.style.display = 'none'; // Ocultar o fundo escuro
    });

    // Fecha o menu se o overlay for clicado
    overlayMenu.addEventListener('click', function () {
        menuMobile.classList.remove('abrir-menu');
        overlayMenu.style.display = 'none';
    });
});

// Carrossel de imagens com dots
document.addEventListener('DOMContentLoaded', function () {
    const imagens = document.querySelectorAll('.carrossel-img');
    const dots = document.querySelectorAll('.dot');
    let index = 0;
    let intervalo = setInterval(mostrarProximaImagem, 4000);

    function mostrarImagem(i) {
        imagens.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        imagens[i].classList.add('active');
        dots[i].classList.add('active');
        index = i;
    }

    function mostrarProximaImagem() {
        let next = (index + 1) % imagens.length;
        mostrarImagem(next);
    }

    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            clearInterval(intervalo); // parar auto-scroll temporariamente
            mostrarImagem(parseInt(dot.getAttribute('data-index')));
            intervalo = setInterval(mostrarProximaImagem, 4000); // reiniciar auto-scroll
        });
    });
});
