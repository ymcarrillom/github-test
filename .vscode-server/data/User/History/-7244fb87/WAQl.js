/*
&& And
|| OR
! NOT
 */

const nombre = 'carlos';
const edad = 17;
const tieneEntrada = true;
const tienePermiso = false;
const permitirAcceso = (edad >= 18 && tieneEntrada) || (tienePermiso && tieneEntrada);
console.log('acceso permitido al concierto: ' + permitirAcceso)