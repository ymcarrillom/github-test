const boleto = 'BOLETO REGULAR';
let codigoDeacceso;

if(boleto === 'vip'){
    codigoDeacceso = 'ViP-123-456';
}else if(boleto === 'BOLETO REGULAR'){
    codigoDeacceso = 'entrada regular-456-789'
}

console.log(codigoDeacceso);