const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    allFilled = true;

    campos.forEach((campo, index) => {
        if (campo.value.trim() === "") {
            setError(index);
            allFilled = false;
        } else {
            removeError(index);
        }
    });

    nameValidate();
    numberValidate();
    adressValidate();
    cityValidate();
    categoryValidate();
    emailValidate();

    if (allFilled) {
        alert('Cadastrado com sucesso');
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});

function setError(index) {
    campos[index].style.border = '2px solid #e63636';
}

function removeError(index) {
    campos[index].style.border = '';
}

function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0);
    }
    else {
        removeError(0);
    }
}

function setError(index) {
    campos[index].style.border = '2px solid #e63636';
}

function removeError(index) {
    campos[index].style.border = '';
}

function numberValidate() {
    if (campos[1].value.length < 11) {
        setError(1);
    }
    else {
        removeError(1);
    }
}

function setError(index) {
    campos[index].style.border = '2px solid #e63636';
}

function removeError(index) {
    campos[index].style.border = '';
}

function adressValidate() {
    if (campos[2].value.length < 10) {
        setError(2);
    }
    else {
        removeError(2);
    }
}

function setError(index) {
    campos[index].style.border = '2px solid #e63636';
}

function removeError(index) {
    campos[index].style.border = '';
}

function cityValidate() {
    if (campos[3].value.length < 3) {
        setError(3);
    }
    else {
        removeError(3);
    }
}

function setError(index) {
    campos[index].style.border = '2px solid #e63636';
}

function removeError(index) {
    campos[index].style.border = '';
}

function categoryValidate() {
    if (campos[4].value.length < 4) {
        setError(4);
    }
    else {
        removeError(4);
    }
}

function emailValidate() {
    if (!emailRegex.test(campos[5].value)) {
        setError(5);
    }
    else {
        removeError(5);
    }
}

const images = [
    '../Images/imagem_um.png',
    '../Images/imagem_dois.png',
    '../Images/imagem_tres.png',
    '../Images/imagem_quatro.png',
    '../Images/imagem_cinco.png',
    '../Images/imagem_seis.png',
];

let currentIndex = 0;
const slidesContainer = document.querySelector('.slides');
const progressBar = document.querySelector('.progress');

// Adiciona as imagens ao contêiner
images.forEach(image => {
    const slide = document.createElement('div');
    slide.style.backgroundImage = `url(${image})`;
    slidesContainer.appendChild(slide);
});

// Atualiza a barra de progresso
function updateProgressBar() {
    const percentage = (currentIndex + 1) * (100 / images.length); // 16.6% por imagem
    progressBar.style.width = `${percentage}%`;
}

// Troca de imagem e atualiza a barra de progresso
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; 
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateProgressBar(); // Atualiza a barra de progresso quando a imagem muda
}

// Inicializa a primeira imagem e a barra de progresso
function initializeSlideshow() {
    updateProgressBar();
    setInterval(() => {
        changeImage(); // Troca a imagem
    }, 3000);
}

// Chama a função para inicializar o slideshow
initializeSlideshow();