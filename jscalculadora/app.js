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
function o3(){
    document.getElementById("resultados").innerHTML += 3 ;
    
}
function o4(){
    document.getElementById("resultados").innerHTML += 4 ;
    
}
function o5(){
    document.getElementById("resultados").innerHTML += 5 ;
    
}
function o6(){
    document.getElementById("resultados").innerHTML += 6 ;
    
}
function o7(){
    document.getElementById("resultados").innerHTML += 7 ;
    
}
function o8(){
    document.getElementById("resultados").innerHTML += 8 ;
    
}
function o9(){
    document.getElementById("resultados").innerHTML += 9 ;
    
}
function o0(){
    document.getElementById("resultados").innerHTML += 0;
    
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
            document.getElementById("resultados").innerHTML = null;
            document.getElementById("sumador").innerHTML = "=";
            
    }
    else if(contadorclick === 2 ){
        let screen =  document.getElementById("resultados").innerHTML;
        op2 = screen;
        console.log(op2);
        let igual =   parseInt(op1) + parseInt(op2);
        document.getElementById("resultados").innerHTML = igual;
        
    }
    else if(contadorclick >= 3){
        alert ("Solo se permiten dos factores")
    }
    else{ "f"}
    }
    
function del (){
    let screen =  document.getElementById("resultados").innerHTML;
    document.getElementById("resultados").innerHTML = screen.slice(0, -1);
}

contadorclickdiv = 0;
function dividir2(){
    contadorclickdiv++;
    let screen =  document.getElementById("resultados").innerHTML;
    console.log(screen);
    if(contadorclickdiv == 1){
            op1 = screen;
            console.log(op1);
            document.getElementById("resultados").innerHTML = null;
            document.getElementById("divisor").innerHTML = "=";
            
    }
    else if(contadorclickdiv === 2 ){
        let screen =  document.getElementById("resultados").innerHTML;
        op2 = screen;
        console.log(op2);
        let igual =   parseInt(op1) / parseInt(op2);
        document.getElementById("resultados").innerHTML = igual;
        
    }
    else if(contadorclick >= 3){
        alert ("Solo se permiten dos factores")
    }
    else{ "f"}
}
contadorclickres = 0;

function restar2(){
    contadorclickres++;
    let screen =  document.getElementById("resultados").innerHTML;
    console.log(screen);
    if(contadorclickres == 1){
            op1 = screen;
            console.log(op1);
            document.getElementById("resultados").innerHTML = null;
            document.getElementById("restar").innerHTML = "=";
            
    }
    else if(contadorclickres === 2 ){
        let screen =  document.getElementById("resultados").innerHTML;
        op2 = screen;
        console.log(op2);
        let igual =   parseInt(op1) - parseInt(op2);
        document.getElementById("resultados").innerHTML = igual;
        
    }
    else if(contadorclick >= 3){
        alert ("Solo se permiten dos factores")
    }
    else{ "f"}
}
contadorclickmul = 0;

function multiplicar2(){
    contadorclickmul++;
    let screen =  document.getElementById("resultados").innerHTML;
    console.log(screen);
    if(contadorclickmul == 1){
            op1 = screen;
            console.log(op1);
            document.getElementById("resultados").innerHTML = null;
            document.getElementById("multiplica").innerHTML = "=";
            
    }
    else if(contadorclickmul === 2 ){
        let screen =  document.getElementById("resultados").innerHTML;
        op2 = screen;
        console.log(op2);
        let igual =   parseInt(op1) * parseInt(op2);
        document.getElementById("resultados").innerHTML = igual;
        
    }
    else if(contadorclick >= 3){
        alert ("Solo se permiten dos factores")
    }
    else{ "f"}
}
/* function igual(){
    contadorclickigual++;
    let screen = document.getElementById("resultados").innerHTML;
    console.log(parseInt(op1));
    if(contadorclick == 1 ){
        let screen =  document.getElementById("resultados").innerHTML;
        op2 = screen;
        let igual =   parseInt(op1) + parseInt(op2);
        console.log(igual);
        document.getElementById("resultados").innerHTML = igual;


    }
    
    
    else{

    };

    let igual =   parseInt(op1) + parseInt(op2);
    screen = igual;
   console.log(igual);
}*/

    /*
    function dividir(){
        let forma1 = document.getElementById('forma');
        let operando1 = forma1['operandoA'];
        let operando2 = forma1['operandoB'];
        let resultado3 = parseInt(operando1.value) / parseInt(operando2.value);
        document.getElementById('resultados').innerHTML =  ` r: ${resultado3}`

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
            /*function screen(){
                let screen =  document.getElementById("resultados").innerHTML;
                console.log(screen);
            }*/