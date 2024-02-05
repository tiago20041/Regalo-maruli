document.addEventListener('DOMContentLoaded', function() {
    // Ocultar los textos al cargar la página
    var contenedores = document.querySelectorAll('.imagen-container');
    contenedores.forEach(function(contenedor) {
        var textoArribaContainer = contenedor.querySelector('.texto-arriba');
        var textoAbajoContainer = contenedor.querySelector('.texto-oculto');
        textoArribaContainer.style.display = 'none';
        textoAbajoContainer.style.display = 'none';
    });
});

function mostrarTexto(textoArriba, textoAbajo) {
    var contenedor = event.currentTarget;
    var textoArribaContainer = contenedor.querySelector('.texto-arriba');
    var textoAbajoContainer = contenedor.querySelector('.texto-oculto');

    textoArribaContainer.style.display = (textoArribaContainer.style.display === 'none' || textoArribaContainer.style.display === '') ? 'block' : 'none';
    textoAbajoContainer.style.display = (textoAbajoContainer.style.display === 'none' || textoAbajoContainer.style.display === '') ? 'block' : 'none';
}
