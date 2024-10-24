
const operaciones = (tipo, num1,num2)=>{
    if(tipo === 'suma'){
        return  num1+num2
    }else if(tipo === 'resta'){
        return  num1-num2
    }
    
}

miVariable = operaciones('suma', 73,67)
console.log(miVariable)
