 
var option = null;

function clear(){
   
  document.getElementById('operador_1').innerHTML = "";  // no funciona
  document.getElementById('operador_2').innerHTML = "";

  option = null;
   
}
function introduce(number){
  var ram1 = document.getElementById('operador_1').innerHTML;  // Poner tope de coma.
  var ram2 = number;  

  if( ram1=="" && ram2 == "."){
    document.getElementById('operador_1').innerHTML = "0.";
    return;
  }

  if( ram1 == "0" ){                           
    document.getElementById('operador_1').innerHTML = ram2;
    return;
  }

  document.getElementById('operador_1').innerHTML = ram1+ram2;
}
function operacion(ope){
  var ram1= document.getElementById('operador_1').innerHTML;
  document.getElementById('operador_2').innerHTML = ram1;
  document.getElementById('operador_1').innerHTML = "";
  option = ope;
}
function result(){
   
  var ram2 = document.getElementById('operador_2').innerHTML;
  var ram1 = document.getElementById('operador_1').innerHTML;

  if( ram1 == '0' && option == 4){
    document.getElementById('operador_2').innerHTML = "";
    document.getElementById('operador_1').innerHTML = 'Error';
    return;
  }
  
  switch(option){

    case 1: 
      document.getElementById('operador_1').innerHTML = parseFloat(ram2)+parseFloat(ram1);
      document.getElementById('operador_2').innerHTML = "";
      option = null;
      break;
    case 2:
      document.getElementById('operador_1').innerHTML = parseFloat(ram2)-parseFloat(ram1);
      document.getElementById('operador_2').innerHTML = "";
      option = null;
      break;
    case 3:
      document.getElementById('operador_1').innerHTML = parseFloat(ram2)*parseFloat(ram1);
      document.getElementById('operador_2').innerHTML = "";
      option = null;
      break;
    case 4:

      document.getElementById('operador_1').innerHTML = parseFloat(ram2)/parseFloat(ram1);
      document.getElementById('operador_2').innerHTML = "";
      option = null;
      break;
  }
  
}
 