let btncal=document.getElementById("btncal")
btncal.addEventListener("click",function Calcular(e){
    e.preventDefault()

    var palabra = document.getElementById("palabra").value;
    var opcion = document.getElementById("opcion").value;
    var resultado;

    switch (opcion) {
        case "longitud":
            resultado = "La longitud de la palabra es: " + palabra.length;
            break;
        case "mayusculas":
            resultado = "La palabra en mayúsculas es: " + palabra.toUpperCase();
            break;
        case "minusculas":
            resultado = "La palabra en minúsculas es: " + palabra.toLowerCase();
            break;
        case "primer_caracter":
            resultado = "El primer carácter de la palabra es: " + palabra.charAt(0);
            break;
        default:
            resultado = "Opción inválida";
    }
    alert(resultado)
})
