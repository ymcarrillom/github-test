/*
&& And
|| OR
! NOT
 */

const nombre = 'carlos';
const edad = 17;
const tieneEntrada = true;
const tienePermiso = true;
const permitirAcceso = (edad >= 18 && tieneEntrada) || tienePermiso;
console.log('acceso permitido al concierto: ' + permitirAcceso)