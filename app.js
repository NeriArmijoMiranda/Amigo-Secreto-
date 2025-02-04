// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrayAmigos = [];

/* Mostrar amigos en la pantalla */
function mostrarListaAmigos() {
    let listaAmigos = document.querySelector('#listaAmigos');
// Generar elementos <li> para cada amigo
    listaAmigos.innerHTML = arrayAmigos.map((elemento) => {
    return `<li>${elemento}</li>`;
    }).join("");  // Unir todos los <li> en una cadena
    console.log(mostrarListaAmigos);
/*    arrayAmigos.forEach((elemento) =>
        listaAmigos.innerHTML = arrayAmigos); */
    
}

/* Agregar amigo */
function agregarAmigo() {
    let nombreIngresado = document.querySelector(".input-name").value;
    if (nombreIngresado.length >= 1) { 
    arrayAmigos.push(nombreIngresado);
    mostrarListaAmigos(arrayAmigos);
    document.querySelector(".input-name").value = '';
    mostrarListaAmigos();
    }
    else {
        window.alert("Por favor, agrega un nombre");
    }
};

/* Función para sortear amigos */
function sortearAmigo() {
    document.querySelector("#resultado").innerHTML = " ";
    if (arrayAmigos.length >= 1) {
        let indiceAmigoSorteado = Math.floor(Math.random()*arrayAmigos.length);
        let amigoSorteado = document.querySelector('#resultado');
        amigoSorteado.innerHTML = arrayAmigos[indiceAmigoSorteado];
        arrayAmigos.length = 0;
        mostrarListaAmigos();
    } else {
        window.alert("Ha ocurrido un error");
    }
    
}

function reiniciarJuego() {
    document.querySelector("#listaAmigos").innerHTML = '';
    document.querySelector(".input-name").value = '';
    document.querySelector("#resultado").innerHTML = " ";
}


