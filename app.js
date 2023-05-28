//1
let miNombre = "Gabriela";

//2
let miApellido = "Zarratea";

//3
let miEdad = 21;

//4
let miMascota = "Tomas";

//5
let edadMascota=10;

//6
console.log("Nombre: " + miNombre + ", Apellido: " + miApellido + ", Edad: " + miEdad);
console.log("Nombre de mi mascota: " + miMascota + ", Edad: " + edadMascota);

//7
let nombreCompleto = miNombre + " " + miApellido;

//8
let textoPresentacion = "Mi nombre es " + nombreCompleto + " y mi edad es " + miEdad + ". Tengo un perro salchicha, su nombre es " + miMascota + " y tiene " + edadMascota + " años.";
console.log(textoPresentacion);

//9
let sumaEdades = miEdad + edadMascota;
let restaEdades = miEdad - edadMascota;
let productoEdades = miEdad * edadMascota;
let divisionEdades = miEdad / edadMascota;

//10
textoPresentacion = "Mi nombre es " + nombreCompleto + " y mi edad es " + miEdad + ". Tengo un perro salchicha, su nombre es " + miMascota + " y tiene " + edadMascota + " años. La sumad de nuestra edad da un total de: " + sumaEdades + ", la resta: " + restaEdades + ", el producto: " + productoEdades + ", y por ultimo la división: " + divisionEdades;
console.log(textoPresentacion);

//11
let alumno = {
    nombre: "Juancito",
    apellido: "Sanchez",
    edad: 17,
    dni: "46.333.456",
    recursante: true,
};

console.table(alumno);
console.log("Nombre: " + alumno.nombre);
console.log("Apellido: " + alumno.apellido);
console.log("Edad: " + alumno.edad);
console.log("DNI: " + alumno.dni);
console.log("Recursante: " + alumno.recursante);

//12
let mascota = {
    nombre: "Minino",
    tipo: "Gato",
    color: "Naranja", 
    adoptado: true,
    tiene_manchas: false,
};

console.table(mascota);
console.log("Nombre: " + mascota.nombre);
console.log("Tipo: " + mascota.tipo);
console.log("Color: " + mascota.color);
console.log("Adoptado: " + mascota.adoptado);
console.log("Tiene manchas: " + mascota.tiene_manchas);

//13

let frutas = ["manzanas", "peras", "naranjas", "uvas", "kiwis"];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

//14
let numeros = [1,2,3,4,5];
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

//15
let familia = ["Ana", "Belinda", "Gabriela", "Juan", "Thiago"];
console.log(familia);
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);

//16
let textoAleatorio = "Las " + frutas[1] + " se venden de a " + numeros[3] + " unidades por persona. " + familia[4] + " siempre compra.";
console.log(textoAleatorio);

//17
let edad = prompt('Ingrese su edad: ');
let edad_compañero = prompt('Edad de su compañero: ');

function edad_igual(){

let edadesiguales;

if (edad === edad_compañero){
    edadesiguales === true;
    console.log ("Mi edad es igual a la de mi compañero: true");
}
else{
    false;
    console.log ("Mi edad es igual a la de mi compañero: false");
}
}


function soy_Menor(){
    
let soyMenor;

    if (edad < edad_compañero){
        soyMenor === true;
        console.log ("Mi edad es menor a la de mi compañero: true");
    }
    else{
        false;
        console.log ("Mi edad es menor a la de mi compañero: false");
    }
}

function soy_Mayor(){
    let soyMayor;
 if (edad > edad_compañero){
    soyMayor === true;
    console.log ("Mi edad es mayor a la de mi compañero: true");
}
else{
    false;
    console.log ("Mi edad es mayor a la de mi compañero: false");
}   
}

edadesiguales = edad_igual();
soyMayor = soy_Mayor();
soyMenor = soy_Menor();


//18
let soyMayorDeEdad = (edad>= 18);
console.log("Soy mayor de edad " + edad);

//19
edad = prompt('Edad: ');
let altura = prompt('Altura: ');

let puedeSubir = (edad > 6 && altura >= 120);

console.log("Puede subir a la atracción: " + puedeSubir);

//20
let pase = prompt("PASE... VIP || NORMAL || LIMITADO : ");
let saldo = prompt("Saldo: ")

let puedePasar = (pase == "VIP" || saldo > 1000);
console.log("La persona puede pasar: " + puedePasar);
