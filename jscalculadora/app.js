function sumar(){
    let forma1 = document.getElementById('forma');
    let operando1 = forma1['operandoA'];
    let operando2 = forma1['operandoB'];
    let resultado = parseInt(operando1.value)  + parseInt(operando2.value);
if(isNaN(resultado)){
    resultado = "Fallo al calcular";
    document.getElementById('resultado').innerHTML =  ` El resultado es: ${resultado}` }
    else{
        document.getElementById('resultado').innerHTML =  ` El resultado es: ${resultado}` };
        console.log(`resultado: ${resultado}`);
    }
 function multiplicar(){
     let forma1 = document.getElementById('forma');
     let operando1 = forma1['operandoA'];
     let operando2 = forma1['operandoB'];
     let resultado2 = parseInt(operando1.value) * parseInt(operando2.value);
     document.getElementById('resultado').innerHTML =  ` El resultado es: ${resultado2}`
     }
     function dividir(){
        let forma1 = document.getElementById('forma');
        let operando1 = forma1['operandoA'];
        let operando2 = forma1['operandoB'];
        let resultado3 = parseInt(operando1.value) / parseInt(operando2.value);
        document.getElementById('resultado').innerHTML =  ` El resultado es: ${resultado3}`

     }
  function ver(){
    let forma1 = document.getElementById('forma');
    let operando1 = forma1['operandoA'];
    let operando2 = forma1['operandoB'];
    let resultado4 = parseInt(operando1.value) % parseInt(operando2.value);
    document.getElementById('resultado').innerHTML =  ` El resultado es: ${resultado4}`
  }
 