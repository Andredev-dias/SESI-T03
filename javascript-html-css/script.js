function somar() {
 var num1 = document.getElementById("num1").valueAsNumber;
 var num2 = document.getElementById("num2").valueAsNumber;

 var result = num1 + num2;
 document.getElementById("resultadoSome").textContent = result;
}