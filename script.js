const fechaFin = new Date('2025-01-11T00:00:00');

function actualizardDisplay(){
    const ahora = new Date();
    const diferencia = fechaFin - ahora;

    if(diferencia <= 0){
        clearInterval(intervalo);
        document.getElementById('dias').textContent = "00";
        document.getElementById('horas').textContent = "00";
        document.getElementById('minutos').textContent = "00";
        document.getElementById('segundos').textContent = "00";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = String(dias).padStart(2, '0');
    document.getElementById('horas').textContent = String(horas).padStart(2, '0');
    document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
    document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
}

const intervalo = setInterval(actualizardDisplay, 1000);
actualizardDisplay();


const playbutton = document.getElementById('playbutton');
const stopbutton = document.getElementById('stopbutton');
const audio = document.getElementById('audio');

playbutton.addEventListener('click', () => {
    audio.play();
    playbutton.style.display = 'none';
    stopbutton.style.display = 'inline-block';
});

stopbutton.addEventListener('click', () => {
    audio.pause();
    playbutton.style.display = 'inline-block';
    stopbutton.style.display = 'none';
});

audio.addEventListener('ended', () => {
    playbutton.style.display = 'inline-block';
    stopbutton.style.display = 'none';
})


const whatsappButton = document.getElementById('whatsappButton');

const numero = "573043258272";

const mensaje = encodeURIComponent("MORAL VOY PA ESA DE CABEZA");

const whatsappURL = 'https://wa.me/${numero}?text=${mensaje}';

whatsappButton.addEventListener('click', () => {
    window.location.href = whatsappURL;
});