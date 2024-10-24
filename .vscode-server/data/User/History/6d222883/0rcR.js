 const boleto = 'vip';
//let codigoDeacceso;

// if(boleto === 'vip'){
//     codigoDeacceso = 'ViP-123-456';
// }else if(boleto === 'BOLETO REGULAR'){
//     codigoDeacceso = 'entrada regular-456-789'
// }


const codigoDeacceso = (boleto === 'vip') ? 'VIP-123-456' : 'regular-789-888';
console.log(codigoDeacceso)