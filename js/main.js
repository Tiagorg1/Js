var alumno = {
  nombre : 'Tiago',
  DNI : 43803875,
}

let nota1= parseInt (prompt("Ingrese nota N°1"));
let nota2= parseInt (prompt("Ingrese nota N°2"));
let nota3= parseInt (prompt("Ingrese nota N°3"));
let nota4= parseInt (prompt("Ingrese nota N°4"));

while (!Number.isInteger(nota1)){
    alert("El valor que ingresaste no es un número");
    nota1 = parseInt (prompt("Ingresa nota N°1:"));
    console.log (nota1);
    if (Number.isInteger(nota1)){
        break;
    }   
}

const notas= [nota1, nota2, nota3, nota4];

let promedio= 0;

for (let a=0; a<notas.length; a++){
    promedio += notas[a];
    console.log (notas[a]);
}

promedio = parseFloat (promedio / notas.length);
console.log (promedio);

if (promedio >= 7){
    alert(alumno.nombre+""+"("+alumno.DNI+")" +" "+ "Estás aprobado. ¡Felicidades! Nota final: "+ promedio.toFixed(2));
    console.log("Tu promedio: "+promedio);
} else {
    alert(alumno.nombre+" "+"("+alumno.DNI+")" +" "+ "Estás desaprobado. Vuelve a intentarlo. Nota final: "+ promedio.toFixed(2));
    console.log("Tu promedio: "+promedio);
}

