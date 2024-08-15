const images = [
    './imagens/1.jpg', // Substitua com o caminho para sua imagem
    './imagens/2.jpg', // Substitua com o caminho para sua imagem
    './imagens/3.jpg', // Substitua com o caminho para sua imagem
    './imagens/4.jpg', // Substitua com o caminho para sua imagem
    './imagens/5.jpg', // Substitua com o caminho para sua imagem
    './imagens/6.jpg'
];

let currentIndex = 0;

function updateImage() {
    document.getElementById('carousel-image').src = images[currentIndex];//id de onde fica tag img
}

document.getElementById('prev-button').addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex--;
    }
    updateImage();
});

document.getElementById('next-button').addEventListener('click', () => {
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateImage();
});

// Inicializa a imagem com a primeira da lista
updateImage();