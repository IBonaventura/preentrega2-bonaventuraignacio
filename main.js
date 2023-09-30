// Objeto para llevar un registro de las estadísticas del juego.
const estadisticas = {
    partidasJugadas: 0,
    partidasGanadas: 0,
    partidasPerdidas: 0,
    partidasEmpatadas: 0
};

// Array de resultados del juego.
const resultados = [];

// Función principal del juego
function jugar() {
    const opciones = ['piedra', 'papel', 'tijeras'];
    const eleccionUsuario = prompt("Elige una opción: piedra, papel o tijeras").toLowerCase();
    
    if (!opciones.includes(eleccionUsuario)) {
        alert("Eleccion inválida. Por favor, elige piedra, papel o tijeras.");
        return;
    }

    const eleccionMaquina = opciones[Math.floor(Math.random() * 3)];
    const resultado = determinarResultado(eleccionUsuario, eleccionMaquina);

    // Registramos el resultado en las estadísticas y el array de resultados
    registrarResultado(resultado);

    // Mostramos el resultado por consola
    console.log(resultado);

    // Mostramos las estadísticas actuales
    mostrarEstadisticas();

    // Mostramos los resultados anteriores
    mostrarResultadosAnteriores();
}

// Función para determinar el resultado del juego
function determinarResultado(eleccionUsuario, eleccionMaquina) {
    if (eleccionUsuario === eleccionMaquina) {
        return "¡Es un empate!";
    } else if (
        (eleccionUsuario === 'piedra' && eleccionMaquina === 'tijeras') ||
        (eleccionUsuario === 'papel' && eleccionMaquina === 'piedra') ||
        (eleccionUsuario === 'tijeras' && eleccionMaquina === 'papel')
    ) {
        return "¡Ganaste!";
    } else {
        return `¡Perdiste! La máquina eligió ${eleccionMaquina}`;
    }
}

// Función para registrar el resultado en las estadísticas y el array de resultados
function registrarResultado(resultado) {
    estadisticas.partidasJugadas++;
    if (resultado === "¡Ganaste!") {
        estadisticas.partidasGanadas++;
    } else if (resultado === "¡Perdiste! La máquina eligió tijeras") {
        estadisticas.partidasPerdidas++;
    } else {
        estadisticas.partidasEmpatadas++;
    }

    resultados.push(resultado);
}

// Función para mostrar las estadísticas actuales
function mostrarEstadisticas() {
    console.log("Partidas jugadas: " + estadisticas.partidasJugadas);
    console.log("Partidas ganadas: " + estadisticas.partidasGanadas);
    console.log("Partidas perdidas: " + estadisticas.partidasPerdidas);
    console.log("Partidas empatadas: " + estadisticas.partidasEmpatadas);
}

// Función para mostrar los resultados anteriores
function mostrarResultadosAnteriores() {
    if (resultados.length > 0) {
        console.log("Resultados anteriores:");
        resultados.forEach((resultado, index) => {
            console.log(`Partida ${index + 1}: ${resultado}`);
        });
    } else {
        console.log("Aún no hay resultados anteriores.");
    }
}

// Iniciamos el juego
do {
    jugar();

    const continuar = prompt("¿Deseas jugar otra vez? (Sí/No)").toLowerCase();
    if (continuar !== 'si') {
        console.log("¡Gracias por jugar! Hasta luego.");
        break;
    }
} while (true);
