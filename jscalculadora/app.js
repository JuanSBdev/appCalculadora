function sumar(){
    let forma1 = document.getElementById('forma');
    let operando1 = forma1['operandoA'];
    let operando2 = forma1['operandoB'];
    let resultado = parseInt(operando1.value)  + parseInt(operando2.value);
    
if(isNaN(resultado)){
    resultado = "Fallo al calcular";
    document.getElementById('resultados').innerHTML =  ` r: ${resultado}` }
    else{
        document.getElementById('resultados').innerHTML =  ` r: ${resultado}` };
        console.log(`resultado: ${resultado}`);
    }
    function multiplicar(){
        let forma1 = document.getElementById('forma');
        let operando1 = forma1['operandoA'];
        let operando2 = forma1['operandoB'];
        let resultado2 = parseInt(operando1.value) * parseInt(operando2.value);
        document.getElementById('resultados').innerHTML =  ` r: ${resultado2}`
    }
    function dividir(){
        let forma1 = document.getElementById('forma');
        let operando1 = forma1['operandoA'];
        let operando2 = forma1['operandoB'];
        let resultado3 = parseInt(operando1.value) / parseInt(operando2.value);
        document.getElementById('resultados').innerHTML =  ` r: ${resultado3}`

     }
     
  function ver(){
    let forma1 = document.getElementById('forma');
    let operando1 = forma1['operandoA'];
    let operando2 = forma1['operandoB'];
    let resultado4 = parseInt(operando1.value) % parseInt(operando2.value);
    document.getElementById('resultados').innerHTML =  ` R: ${resultado4}`
  }
 




  
  /*function sumar(){
    document.getElementById("resultados").innerHTML= "asd";
    }
    function obtenerNumero(){
        let botonN = document.getElementById("numeroo").value;
        document.getElementById("resultados").innerHTML += botonN ;

    }
    function sumar(){
        let forma1 = document.getElementById('resultados');
        let operando1 =forma1["1"];
        let operando2 = 3;
        let resultado = parseInt(operando1)  + parseInt(operando2);
    if(isNaN(resultado)){
        resultado = "Fallo al calcular";
        document.getElementById('resultados').innerHTML =  ` r: ${resultado}` }
        else{
            document.getElementById('resultados').innerHTML =  ` r: ${resultado}` };
            console.log(`resultado: ${resultado}`);
        }
        */