//FUNCIONES CALLBACK
// let saludo = function saludar(nombre) {
//     document.write("Hola " + nombre + "<br>")
// }

// function despedir(nombre) {
//     document.write("Chao con adios " + nombre + "<br>")
// }

// function llamarFuncion(fn, nom) {
//     fn(nom)
// }
// //EJECUTO CALLBACK
// llamarFuncion(saludo, "Pedrito")
// llamarFuncion(function(n) {
//     document.write("¿Como estas? + n + <br>")
// }, "Pedrito")
// llamarFuncion(despedir, "Pedrito")

//PROGRAMACION ASINCRONA
//Es programar teniendo qu esperar un proceso para poder
//finalizar un calculo o procedimiento

// document.write("Proceso 1 <br>")

// setTimeout(function(){
//     document.write("Proceso 2 <br>")
// }, 2000 )


// document.write("Proceso 3 <br>")

//DESPERTADOR
// function despertador(tiempoSegundos, alrma) {
//     document.write(`Despertador Activado. Sonara en ${tiempoSegundos} seg.......`  )
//     //Usamos setTimeout para esperar el tiempo especificado
//     setTimeout(()=> {
//         //Cuando pase el tiempo llamamos la funcion callback
//         alarma()
//     }, tiempoSegundos * 1000)
// } 
// //Funcion que actuara como actuara
// function alarma() {
//     document.write("Hora de despertarse! ⏰⏰⏰")
// }

// let tiempo = Number(prompt("digite el tiempo en que sonara la alamra"))
// //Llamar la funcion callback
// despertador(tiempo, alarma)

//ASCENSOR
function ascensor(pisDestino, llegadaFn) {
    let pisoActual = 0 //Empieza el planta baja
    console.log(`Ascensor en el piso ${pisoActual}`)
    function moverAscensor() {
        if(pisoActual < pisoDestino) {
            pisoActual++
            console.log(`Ascensor subiendo... piso ${pisoActual}`)
        } else if(pisoActual > pisoDestino) {
            pisoActual--
            console.log(`Ascensor bajando... piso ${pisoActual}`)
        }
        //Si el Ascensor aun no ha llegado, lo seguimos moviendo
        if(pisoActual != pisoDestino) {
            //Simula el tiempo de viaje del Ascensor
            setTimeout(moverAscensor, 1000)
        } else {
            llegadaFn(pisoDestino)
        }
    }
    moverAscensor() //Inicie el movimiento del Ascensor
}

function pisoLlegada(pisoDestino){
    console.log(`Hemos llegado al destinoo. piso ${pisoDestino}`)
}

let tomarAscensor = Number(prompt("A que piso deseas ir: "))
ascensor(tomarAscensor, pisoLlegada)

