
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
  cambiaTamanio();
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

// function para cambiar el tamano a las teclas
function cambiaTamanio(){
  logo = document.getElementById('0');
  logo.width = 100;
  logo.height = 100;
}
