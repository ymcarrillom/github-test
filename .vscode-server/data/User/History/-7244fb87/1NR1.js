/*
&& And
|| OR
! NOT
 */

const nombre = 'carlos';
const edad = 18;
const tieneEntrada = true;
const tienePermiso = false;
const permitirAcceso = (edad >= 18 && tieneEntrada) || tienePermiso;
console.log('acceso permitido al concierto: ' + permitirAcceso)