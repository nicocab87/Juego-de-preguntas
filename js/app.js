// --------------- Juego de preguntas --------------------- 

// Declaración de variables
alert(`Un virus ha aparecido en Burkina Faso, los lideres del mundo temen por que deje varias muertes, o peor, un golpe en la economía. Tu trabajo es poder hacer una vacuna para salvar la humanidad. Estas dispuesto? `)
alert (`Para realizar esta vacuna, deberás contestar una serie de preguntas en relación a las vacunas y la biologia molecular, si logras responder la mayoría bien, lograrás hacer la vacuna y salvar el mundo, caso contrario todos morirán`)
let nombre = prompt ("Ingrese su nombre");

while(!nombre){
    alert("No has ingresado un nombre")
    nombre = prompt ("Ingrese su nombre");
}

let personajeElegido

let puntos = 0;

function agregarPuntos(){
puntos+=3
}

let numPreg=0
function sum(){
    numPreg+=1
}

let imgHombre = new Image();
imgHombre.src = `./img/personajeHombre.jpg`;

let imgMujer = new Image();
imgMujer.src = `./img/personajeMujer.jpg`

let imgDinosaurio = new Image();
imgDinosaurio.src = `./img/personajeDino.jpg`


const opciones =["A", "B", "C"]


// Personajes

const personajes = [
    personajeHombre = {
        nombre: `Dr. ${nombre} `,
        genero: "Hombre",
        profesion: "Becario de CONICET",
        especialidad: "Mantiene el laboratorio ordenado ",
        caracteristicas: "none",
        img: imgHombre,
    
      },
    
      personajeMujer = {
        nombre: `Dra. ${nombre} `,
        genero: "Mujer",
        profesion: "Inmunóloga",
        especialidad: "Investigación en inmunidad y desarrollo de vacunas",
        caracteristicas: "Lleva un microscopio, tubos de ensayo y un libro de inmunología",
        img: imgMujer,
      },
    
       personajeDinosaurio = {
        nombre: `Dino-${nombre} Rex `,
        Genero: "Tyrannosaurus Immunologicus",
        profesion: "Paleovacunólogo",
        especialidad: "Investigación de vacunas prehistóricas",
        caracteristicas: "Demasiado inteligente para actuar de extra en Jurasick Park",
        img: imgDinosaurio,
      },

]


function personaje (){

    console.log(`Elige un personaje:`)

    for (i=0; i<personajes.length; i+=1){

        let item= personajes[i]

        console.log(`
${i+1}) Nombre: ${item.nombre}.
        Genero: ${item.genero}.
        Profesion: ${item.profesion}.
        Especialidad: ${item.especialidad}.
        Caracteristicas: ${item.caracteristicas}.
        `)
    }

    let eleccionPersonaje = prompt (`Elije tu personaje!`)

    switch (eleccionPersonaje){
        case "1": 
        personajeElegido = personajes.filter ((psj)=> psj === personajeHombre)
        break;
        case "2": 
        personajeElegido = personajes.filter ((psj)=> psj === personajeMujer)
        break
        case "3":
        personajeElegido = personajes.filter ((psj)=> psj === personajeDinosaurio)
        break;
        default:
        alert("Opcion no disponible")
        personaje();

        console.log("-----------------------")
}
}

personaje();


// Juego

function preguntar ( pregunta, op1, op2, op3, rta) {

    console.log(pregunta)

    console.log (`Las opciones son: ${op1}, ${op2}, ${op3}`)

    let rtaUsuario = prompt (`Ingrese su repuesta aqui!`)
    
    sum();

    for (let opcion of opciones){
        switch(rtaUsuario){
        
        case opcion[0]: if(opcion[0] === rta & rtaUsuario === rta){
            console.log("Has acertado!");
            agregarPuntos();
        }else{
            console.log("Lo siento")
        }
        break;
    
        case opcion[1]: if(opcion[1] === rta & rtaUsuario === rta){
            console.log("Has acertado!")
            agregarPuntos();
        }else{
            console.log("Lo siento")
        }
        break;
    
        case opcion[2]: if(opcion[2] === rta & rtaUsuario === rta){
            console.log("Has acertado!")
            agregarPuntos();
        }else{
            console.log("Lo siento")
        }
        break;
        
        }
        console.log(`---------------------`)
    } 
}


// Linea de juego


let preg1= preguntar ("¿Qué es una vacuna?", "a) Un virus", "b) Un tratamiento médico", "c) Una preparación que estimula el sistema inmunológico", "c")
let preg2= preguntar ("¿Cuál es el propósito principal de una vacuna?", "a) Tratar enfermedades", "b) Prevenir enfermedades " , "c) Diagnosticar enfermedades", "b")
let preg3= preguntar ("¿Qué es un antígeno?", "a) Un microorganismo", "b) Una molécula que el sistema inmunológico reconoce", "c) Un medicamento", "b" ) 
let preg4= preguntar ("¿Cuál es uno de los métodos comunes para administrar una vacuna?", "a) Intramuscular", "b) Intravenosa", "c) Oral", "a")
let preg5= preguntar ("¿Qué es la inmunidad de rebaño?", "a) Cuando todos en una comunidad tienen la misma enfermedad", "b) Cuando una gran proporción de la población es inmune a una enfermedad, lo que protege a aquellos que no lo son", "c) Cuando se desarrolla inmunidad permanente después de una sola vacunación", "b")
let preg6= preguntar ("¿Qué tipo de virus utiliza ARN en lugar de ADN para su información genética?", "a) Retrovirus", "b) Adenovirus", "c) Herpesvirus", "a")
let preg7= preguntar ("¿Cuál es el proceso de fabricación de proteínas a partir de la información genética?", "a) Transcripción", "b) Traducción", "c) Replicación", "b")
let preg8= preguntar ("¿Qué tipo de ARN lleva la información genética de un gen desde el núcleo hasta el citoplasma para la síntesis de proteínas?", "a) ARN ribosómico (ARNr)", "b) ARN mensajero (ARNm)", "c) ARN de transferencia (tARN)", "b")
let preg9= preguntar ("¿Qué tipo de molécula contiene la información genética en las células?", "a) Proteínas", "b) Carbohidratos", "c) Ácido desoxirribonucleico (ADN)", "c")
let preg10= preguntar ("¿Cuál es el objetivo de un adyuvante en una vacuna?", "a) Prevenir reacciones alérgicas", "b) Potenciar la respuesta inmunitaria", "c) Reducir la eficacia de la vacuna", "b")
let preg11= preguntar ("¿Cuál es la función principal de las enzimas?", "a) Transportar oxígeno en la sangre", "b) Facilitar reacciones químicas", "c) Almacenar energía en las células", "b")
let preg12= preguntar ("¿Cuál es la unidad básica de la herencia en los seres vivos?", "a) Aminoácido", "b) Gen", "c) Célula", "b")
let preg13= preguntar ("¿Qué función tienen los anticuerpos en el sistema inmunitario?", "a) Transportar oxígeno en la sangre", "b) Eliminar patógenos y toxinas", "c) Digerir alimentos", "b")
let preg14= preguntar ("¿Cuál es el proceso por el cual una célula se divide en dos células hijas idénticas?", "a) Fagocitosis", "b) Meiosis", "c) Mitosis", "c")
let preg15= preguntar ("¿Cuál es la función de las células B en el sistema inmunitario?", "a) b) Producir anticuerpos", "b) Fagocitar patógenos", "c) Transportar oxígeno en la sangre", "a")
let preg16= preguntar ("¿Qué tipo de ácido nucleico se encuentra en las vacunas de ARN?", "a) ARN ribosómico (ARNr)", "b) ARN de trasnferencia (ARNt)", "c) ARN mensajero (ARNm)", "c")
let preg17= preguntar ("¿Qué es la PCR (Reacción en Cadena de la Polimerasa)?", "a) Una técnica para amplificar y detectar material genético.", "b) Un tipo de vacuna.", "c) Una técnica para purificar proteínas.", "a")
let preg18= preguntar ("¿Cuál es la función principal de las células T en el sistema inmunológico?", "a) Producir anticuerpos.", "b) Destruir células infectadas por patógenos.", "c) Filtrar la sangre.", "b")
let preg19= preguntar ("¿Cuál es la función principal de las vacunas de ARN mensajero (ARNm)?", "a) Introducir ARN viral en el cuerpo.", "b) Estimular la respuesta inmunológica sin utilizar virus vivos/atenuados.", "c) Modificar el ADN humano.", "b")
let preg20= preguntar (" ¿Cuál es el propósito de una vacuna de refuerzo?", "a) Estimular la respuesta inmunológica inicial.", "b) Mantener alta la inmunidad a largo plazo.", "c) Tratar las infecciones activas.", "b")





// Final
if(numPreg*3 === puntos){
    console.log(`Felicitaciones, ${personajeElegido[0].nombre}`)
}else if(numPreg*3 < puntos){
    console.log(`Casi, pero lo lograste ${personajeElegido[0].nombre}`)
}else if (puntos === 0){
    console.log(`No has podido salvar a la humanidad. ${personajeElegido[0].nombre} has muerto en el intento, serás reconocido solamente por unas pocas personas.`)
}


