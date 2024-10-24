const operaciones = (tipo, num1,num2)=>{
    if(tipo === 'suma'){
        console.log(num1+num2)
    }else if(tipo === 'resta'){
        console.log(num1-num2)
    }

}

operaciones('suma', 23,56)
operaciones('resta', 100,50)