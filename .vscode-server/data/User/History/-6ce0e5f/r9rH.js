const saludo = (nombre = 'amigo')=>{
    console.log(`hola ${nombre}!`)
}
saludo('carlos');
saludo('manuel');
saludo('francisco');
saludo('didiola');
saludo();

//multiples parametros

const operaciones = (tipo, num1,num2)=>{
    if(tipo === 'suma'){
        console.log(num1+num2)
    }else if(tipo === 'resta'){
        comsole.log(num1-num2)
    }

}

operaciones('suma', 23,56)
operaciones('resta', 100,50)