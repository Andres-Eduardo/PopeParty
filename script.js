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

const numero = "573107988158";

const mensaje = encodeURIComponent("MORAL VOY PA ESA DE CABEZA");

const whatsappURL = `https://wa.me/${numero}?text=${mensaje}`;

whatsappButton.addEventListener('click', () => {
    window.location.href = whatsappURL;
});


const profilePhoto = document.getElementById('profilePhoto');
const photoModal = document.getElementById('photoModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

profilePhoto.addEventListener('click', () => {
    const img = profilePhoto.querySelector('img'); // Obtener la imagen
    if (img && img.src) {
      modalImage.src = img.src; // Asignar la URL al modal
      photoModal.style.display = 'flex'; // Mostrar el modal usando flex
    } else {
      console.error('No se encontró la fuente de la imagen.');
    }
  });
  
  // Cerrar el modal al hacer clic en el botón de cerrar
  closeModal.addEventListener('click', () => {
    photoModal.style.display = 'none'; // Ocultar el modal
    modalImage.src = ''; // Limpiar el atributo src
  });
  
  // Cerrar el modal al hacer clic fuera de la imagen
  photoModal.addEventListener('click', (e) => {
    if (e.target === photoModal) {
      photoModal.style.display = 'none'; // Ocultar el modal
      modalImage.src = ''; // Limpiar el atributo src
    }
  });