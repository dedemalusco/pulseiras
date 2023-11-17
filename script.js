document.addEventListener('DOMContentLoaded', function() {
    var fadeIns = document.querySelectorAll('.fade-in');
  
    function checkFadeIns() {
        for (var i = 0; i < fadeIns.length; i++) {
            var fadeInSection = fadeIns[i];
            var bounding = fadeInSection.getBoundingClientRect();
            if (
                bounding.top >= 0 &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ) {
                fadeInSection.classList.add('visible');
            }
        }
    }
  
    window.addEventListener('scroll', checkFadeIns);
    checkFadeIns();
});
document.addEventListener("DOMContentLoaded", function () {
    // Aguarde até que o DOM esteja totalmente carregado

    // Selecione todos os elementos com a classe fade-in
    var fadeIns = document.querySelectorAll('.fade-in');

    // Configurações do Intersection Observer
    var observerOptions = {
        root: null, // Usar a viewport como a área de interseção
        rootMargin: '0px', // Nenhuma margem adicional
        threshold: 0.5 // 50% do elemento deve estar visível
    };

    // Função de callback para o Intersection Observer
    function handleIntersection(entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Remova a observação após a classe ter sido adicionada
            }
        });
    }

    // Crie uma instância do Intersection Observer para cada elemento com a classe fade-in
    fadeIns.forEach(function (element) {
        var observer = new IntersectionObserver(handleIntersection, observerOptions);
        observer.observe(element);
    });
});