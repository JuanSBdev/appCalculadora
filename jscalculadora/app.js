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
 



  
  function o1(){
        document.getElementById("resultados").innerHTML += 1 ;

  }
  function o2(){
    document.getElementById("resultados").innerHTML += 2 ;
    
}
let contadorclick = 0;
let op1 = "";
let op2= "";

function sumar2(){
    contadorclick++;
    let screen =  document.getElementById("resultados").innerHTML;
    console.log(screen);
    if(contadorclick == 1){
            op1 = screen;
            console.log(op1);
    
    }
    else if(contadorclick === 2 ){
        let screen =  document.getElementById("resultados").innerHTML;
        op2 = screen;
        console.log(op2);
    }
    else if(contadorclick >= 3){
        alert ("Solo se permiten dos factores")
    }
    else{ "f"}
    }
    


function igual(){
    let screen = document.getElementById("resultados").innerHTML;
    console.log(parseInt(op1));
    if(contadorclick == 1){
        let screen =  document.getElementById("resultados").innerHTML;
        op2 = screen;
        let igual =   parseInt(op1) + parseInt(op2);
        console.log(igual);

    }
    
    else{
        op2 = screen;
        let igual =   parseInt(op1) + parseInt(op2);
        console.log(igual);
    };

    let igual =   parseInt(op1) + parseInt(op2);
    screen = igual;
   console.log(igual);
}
    /*function sumar(){
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
            /*function screen(){
                let screen =  document.getElementById("resultados").innerHTML;
                console.log(screen);
            }*/