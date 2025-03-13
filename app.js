// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaramos el arreglo global para almacenar los nombres
let lista = [];


function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim(); // Eliminar espacios en blanco

    if (nombre === "") {
        alert("Ingrese un nombre válido");
        return;
    }

    // Añadir el nombre al arreglo
    lista.push(nombre);

    // Obtener el ul y crear un nuevo elemento li
    let listaAmigos = document.getElementById("listaAmigos");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;

    // Agregar el nuevo nombre a la lista
    listaAmigos.appendChild(nuevoElemento);

    // Limpiar el campo de texto
    document.getElementById("amigo").value = "";
}


function sortearAmigo() {
    if (lista.length === 0) {
        alert("No hay nombres para sortear");
        return;
    }

    // Elegir un nombre aleatorio
    let elegido = lista[Math.floor(Math.random() * lista.length)];

    // Limpiar la lista de amigos
    document.getElementById("listaAmigos").innerHTML = "";

    // Mostrar el nombre sorteado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados anteriores
    let nombreSorteado = document.createElement("li");
    nombreSorteado.textContent = `🎉 ${elegido} 🎉`;
    resultado.appendChild(nombreSorteado);

    // Reiniciar la lista
    lista = [];
}