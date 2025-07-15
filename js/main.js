const crono = document.getElementById("crono");
const btnInicio = document.getElementsByClassName("btn-primary")[0];
const btnPausa = document.getElementsByClassName("btn-warning")[0];
const btnReset = document.getElementsByClassName("btn-danger")[0];

let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;
let andando = false;

function actualizarCrono() {
  const h = String(horas).padStart(2, "0");
  const m = String(minutos).padStart(2, "0");
  const s = String(segundos).padStart(2, "0");
  crono.textContent = `${h}:${m}:${s}`;
}

function iniciarCronometro() {
  if (andando) return;
  andando = true;
  intervalo = setInterval(() => {
    segundos++;
    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
    actualizarCrono();
  }, 1000);
  btnInicio.textContent = `Iniciar`
}

function pausarCronometro() {
  clearInterval(intervalo);
  andando = false;
  btnInicio.textContent = `Reanudar`
}

function reiniciarCronometro() {
  clearInterval(intervalo);
  segundos = 0;
  minutos = 0;
  horas = 0;
  actualizarCrono(); 
  andando = false;
}

btnInicio.addEventListener("click", iniciarCronometro);
btnPausa.addEventListener("click", pausarCronometro);
btnReset.addEventListener("click", reiniciarCronometro);

actualizarCrono();
