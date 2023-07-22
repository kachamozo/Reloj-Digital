// Imprimir en pantalla la hora actualizada cada segundo.

let mostrarFecha = document.querySelector('#fecha');
let mostrarReloj = document.querySelector('#reloj');
let dias = [
	'Domingo',
	'Lunes',
	'Martes',
	'Miércoles',
	'Jueves',
	'Viernes',
	'Sábado',
];
let meses = [
	'Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Agosto',
	'Septiembre',
	'Octubre',
	'Noviembre',
	'Diciembre',
];

let fecha = new Date();
let dia = fecha.getDay();
let mes = fecha.getMonth();
let diaNumero = fecha.getDate();
let año = fecha.getFullYear();
let hora = fecha.getHours();

mostrarFecha.innerHTML = `${dias[dia]}, ${diaNumero} de ${meses[mes]} de ${año}`;

setInterval(() => {
	let newHora = new Date();
	mostrarReloj.innerHTML = newHora.toLocaleTimeString();
}, 1000);

console.log(fecha);
