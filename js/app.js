var num1=0;
var simb=""

//Capturando los valores del teclado.
document.getElementById('on').onclick = function(){borrar()};
document.getElementById('punto').onclick = function(){punto()};
document.getElementById('sign').onclick = function(){signo()};
document.getElementById('1').onclick = function(){insertarNum(1)};
document.getElementById('2').onclick = function(){insertarNum(2)};
document.getElementById('3').onclick = function(){insertarNum(3)};
document.getElementById('4').onclick = function(){insertarNum(4)};
document.getElementById('5').onclick = function(){insertarNum(5)};
document.getElementById('6').onclick = function(){insertarNum(6)};
document.getElementById('7').onclick = function(){insertarNum(7)};
document.getElementById('8').onclick = function(){insertarNum(8)};
document.getElementById('9').onclick = function(){insertarNum(9)};
document.getElementById('0').onclick = function(){insertarNum(0)};
document.getElementById('mas').onclick = function(){operaciones("+")};
document.getElementById('menos').onclick = function(){operaciones("-")};
document.getElementById('por').onclick = function(){operaciones("*")};
document.getElementById('dividido').onclick = function(){operaciones("/")};
document.getElementById('igual').onclick = function(){doing()};


//Asignandole el efecto a cada tecla.
document.getElementById('0').addEventListener("mousedown", function(){ ///Evento para al pulsar
document.getElementById('0').setAttribute("style","transform:scale(0.85,0.95)"); //hacer mas pequena la imagen
});
document.getElementById('0').addEventListener("mouseup", function(){
document.getElementById('0').setAttribute("style","transform:scale(1,1)");// volverla a su estado original
});
document.getElementById('on').addEventListener("mousedown", function(){
document.getElementById('on').setAttribute("style","transform:scale(0.85,0.95)");
});
document.getElementById('on').addEventListener("mouseup", function(){
document.getElementById('on').setAttribute("style","transform:scale(1,1)");
});
document.getElementById('punto').addEventListener("mousedown", function(){
document.getElementById('punto').setAttribute("style","transform:scale(0.85,0.95)");
});
document.getElementById('punto').addEventListener("mouseup", function(){
document.getElementById('punto').setAttribute("style","transform:scale(1,1)");
});
document.getElementById('sign').addEventListener("mousedown", function(){
document.getElementById('sign').setAttribute("style","transform:scale(0.85,0.95)");
});
document.getElementById('sign').addEventListener("mouseup", function(){
document.getElementById('sign').setAttribute("style","transform:scale(1,1)");
});
document.getElementById('1').addEventListener("mousedown", function(){
document.getElementById('1').setAttribute("style","transform:scale(0.85,0.95)");
});
document.getElementById('1').addEventListener("mouseup", function(){
document.getElementById('1').setAttribute("style","transform:scale(1,1)");
});
document.getElementById('2').addEventListener("mousedown", function(){
document.getElementById('2').setAttribute("style","transform:scale(0.85,0.95)");
});
document.getElementById('2').addEventListener("mouseup", function(){
document.getElementById('2').setAttribute("style","transform:scale(1,1)");
});
document.getElementById('3').addEventListener("mousedown", function(){
document.getElementById('3').setAttribute("style","transform:scale(0.85,0.95)");
});
document.getElementById('3').addEventListener("mouseup", function(){
document.getElementById('3').setAttribute("style","transform:scale(1,1)");
});
document.getElementById('4').addEventListener("mousedown", function(){
document.getElementById('4').setAttribute("style","transform:scale(0.85,0.95)");
});
document.getElementById('4').addEventListener("mouseup", function(){
document.getElementById('4').setAttribute("style","transform:scale(1,1)");
});
document.getElementById('5').addEventListener("mousedown", function(){
document.getElementById('5').setAttribute("style","transform:scale(0.85,0.95)");
});
document.getElementById('5').addEventListener("mouseup", function(){
document.getElementById('5').setAttribute("style","transform:scale(1,1)");
});
document.getElementById('6').addEventListener("mousedown", function(){
document.getElementById('6').setAttribute("style","transform:scale(0.85,0.95)");
});
document.getElementById('6').addEventListener("mouseup", function(){
document.getElementById('6').setAttribute("style","transform:scale(1,1)");
});
document.getElementById('7').addEventListener("mousedown", function(){
document.getElementById('7').setAttribute("style","transform:scale(0.85,0.95)");
});
document.getElementById('7').addEventListener("mouseup", function(){
document.getElementById('7').setAttribute("style","transform:scale(1,1)");
});
document.getElementById('8').addEventListener("mousedown", function(){
document.getElementById('8').setAttribute("style","transform:scale(0.85,0.95)");
});
document.getElementById('8').addEventListener("mouseup", function(){
document.getElementById('8').setAttribute("style","transform:scale(1,1)");
});
document.getElementById('9').addEventListener("mousedown", function(){
document.getElementById('9').setAttribute("style","transform:scale(0.85,0.95)");
});
document.getElementById('9').addEventListener("mouseup", function(){
document.getElementById('9').setAttribute("style","transform:scale(1,1)");
});
document.getElementById('0').addEventListener("mousedown", function(){
document.getElementById('0').setAttribute("style","transform:scale(0.85,0.95)");
});
document.getElementById('0').addEventListener("mouseup", function(){
document.getElementById('0').setAttribute("style","transform:scale(1,1)");
});
document.getElementById('raiz').addEventListener("mousedown", function(){
document.getElementById('raiz').setAttribute("style","transform:scale(0.85,0.95)");
});
document.getElementById('raiz').addEventListener("mouseup", function(){
document.getElementById('raiz').setAttribute("style","transform:scale(1,1)");
});
document.getElementById('dividido').addEventListener("mousedown", function(){
document.getElementById('dividido').setAttribute("style","transform:scale(0.85,0.95)");
});
document.getElementById('dividido').addEventListener("mouseup", function(){
document.getElementById('dividido').setAttribute("style","transform:scale(1,1)");
});
document.getElementById('por').addEventListener("mousedown", function(){
document.getElementById('por').setAttribute("style","transform:scale(0.85,0.95)");
});
document.getElementById('por').addEventListener("mouseup", function(){
document.getElementById('por').setAttribute("style","transform:scale(1,1)");
});
document.getElementById('menos').addEventListener("mousedown", function(){
document.getElementById('menos').setAttribute("style","transform:scale(0.85,0.95)");
});
document.getElementById('menos').addEventListener("mouseup", function(){
document.getElementById('menos').setAttribute("style","transform:scale(1,1)");
});
document.getElementById('mas').addEventListener("mousedown", function(){
document.getElementById('mas').setAttribute("style","transform:scale(0.85,0.95)");
});
document.getElementById('mas').addEventListener("mouseup", function(){
document.getElementById('mas').setAttribute("style","transform:scale(1,1)");
});
document.getElementById('igual').addEventListener("mousedown", function(){
document.getElementById('igual').setAttribute("style","transform:scale(0.85,0.95)");
});
document.getElementById('igual').addEventListener("mouseup", function(){
document.getElementById('igual').setAttribute("style","transform:scale(1,1)");
});
/*******************************************************************************************/
//Funcion para borrar la pantalla
function borrar(){
  var pantalla = "0";
  document.getElementById('display').innerHTML = pantalla;
}

//Funcionar para anexar el signo de -
function signo(){
    var pantalla = document.getElementById('display').innerHTML;
    if(pantalla!=0){
      var signo = "-";
      var resultado = signo.concat(pantalla);
      document.getElementById('display').innerHTML = resultado;
    }
}

//Funcion para anexar el punto a los numeros
function punto(){
  var pantalla = document.getElementById('display').innerHTML;
  if(pantalla.indexOf(".")<0){
    var punto = ".";
    var resultado = pantalla.concat(punto);
    document.getElementById('display').innerHTML = resultado;
    return true;
  }

}

//function para mostrar en el teclado los numeros digitados
function insertarNum(x){
  var pantalla = document.getElementById('display').innerHTML;
  if(pantalla.length<=8){
    if(pantalla==0 && punto()){
      pantalla="";
      pantalla +=x;
      document.getElementById('display').innerHTML = pantalla;
    }
    else{
      pantalla +=x;
      document.getElementById('display').innerHTML = pantalla;
    }
  }
}

function doing(){
  num2 = parseFloat(document.getElementById('display').innerHTML);
  var pantalla =""
  document.getElementById('display').innerHTML = pantalla;

  switch (simb) {
    case '+':
        var resultado = num1+num2;
        document.getElementById('display').innerHTML = resultado;
        break;
    case '-':
        var resultado = num1-num2;
        document.getElementById('display').innerHTML = resultado;
        break;
    case '*':
        var resultado = num1*num2;
        document.getElementById('display').innerHTML = resultado;
        break;
    case '/':
        var resultado = num1/num2;
        document.getElementById('display').innerHTML = resultado;
        break;

    default:

  }
}

//Hacer las operaciones básicas.
function operaciones(x){
    simb=x;
    num1 = parseFloat(document.getElementById('display').innerHTML);
    var pantalla =""
    document.getElementById('display').innerHTML = pantalla;
}
