let resultado;
const operaciones = (tipo, num1,num2)=>{
    if(tipo === 'suma'){
        resultado = num1+num2
    }else if(tipo === 'resta'){
        resultado = num1-num2
    }
    return resultado;
}

miVariable = operaciones('suma', 23,56)
