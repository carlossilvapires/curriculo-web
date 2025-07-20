document.addEventListener('DOMContentLoaded', function() {

    function efeitoDigitacao(elemento) {
        const textoArray = elemento.innerHTML.split(''); 
        elemento.innerHTML = ''; 
        textoArray.forEach((letra, i) => {
            setTimeout(() => elemento.innerHTML += letra, 75 * i);
        });
    }

    const cargo = document.querySelector('#cargo-animado'); 
    const textoCargo = 'Desenvolvedor de Software';
    cargo.innerHTML = textoCargo; 
    efeitoDigitacao(cargo); 

    const secoesAnimadas = document.querySelectorAll('.secao-animada');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
            }
        });
    }, {
        threshold: 0.1 
    });

    secoesAnimadas.forEach((secao) => {
        observer.observe(secao);
    });

});