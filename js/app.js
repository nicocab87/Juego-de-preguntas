// --------------- Juego de preguntas --------------------- 

// Declaración de variables

console.log (`Un virus ha aparecido en Burkina Faso, los lideres del mundo temen por que deje varias muertes, o peor, un golpe en la economía. Tu trabajo es poder hacer una vacuna para salvar la humanidad. Estas dispuesto? `)
console.log (`Para realizar esta vacuna, deberás contestar una serie de preguntas en relación a las vacunas y la biologia molecular, si logras responder la mayoría bien, lograrás hacer la vacuna y salvar el mundo, caso contrario todos morirán`)
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
        caracteristicas: "Exeperto en manipulacion de ADN",
        img: imgHombre,
    
      },
    
      personajeMujer = {
        nombre: `Dra. ${nombre} `,
        genero: "Mujer",
        profesion: "Inmunóloga",
        especialidad: "Investigación en inmunidad y desarrollo de vacunas",
        caracteristicas: "Experta en inmunología, futura ganadora de premio Nobel",
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

    let eleccionPersonaje = prompt (`Elije tu personaje! (seleccionar 1, 2 ò 3)`)

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
nombre = personajeElegido[0].nombre;


// Juego

function preguntar ( pregunta, op1, op2, op3, rta) {

    console.log(pregunta)

    console.log (`Las opciones son: ${op1}; ${op2}; ${op3}`)

    let rtaUsuario = prompt (`Ingrese su repuesta aqui! (responder con A, B ò C)`)
    
    sum()

    if (rtaUsuario.toLowerCase() === rta) {
        console.log("Has acertado!");
        agregarPuntos();
    }else{
        console.log("Lo siento, respuesta incorrecta.");
    }

    console.log("-----------------------")
}

let preg1
let preg2
let preg3
let preg4
let preg5
let preg6
let preg7
let preg8
let preg9
let preg10
let preg11
let preg12
let preg13
let preg14
let preg15
let preg16
let preg17
let preg18
let preg19
let preg20


// Linea de juego

console.log(`Hola ${nombre}, estamos frente a una emergencia sanitaria, tienes conocimientos para desarrollar una vacuna?`)
console.log(`1) si
2) No`)

let rtaPrimeraIntancia = prompt (`Ingrese su repuesta (responder con 1 o 2)`)

if(rtaPrimeraIntancia == 1){
    preg3= preguntar ("¿Qué es un antígeno?", "a) Un microorganismo", "b) Una molécula que el sistema inmunológico reconoce", "c) Un medicamento", "b" )
    preg4= preguntar ("¿Cuál es uno de los métodos comunes para administrar una vacuna?", "a) Intramuscular", "b) Intravenosa", "c) Oral", "a")
}else{
    preg1= preguntar ("¿Qué es una vacuna?", "a) Un virus", "b) Un tratamiento médico", "c) Una preparación que estimula el sistema inmunológico", "c")
    preg2= preguntar ("¿Cuál es el propósito principal de una vacuna?", "a) Tratar enfermedades", "b) Prevenir enfermedades " , "c) Diagnosticar enfermedades", "b")
}

console.log(`Parece que a mucha gente le genera desconfianza la vacuna, ya que se generó una gran ola de desinformación y fake news en internet, podrás ayudar a aclarar sus dudas?`)
console.log(`1) Si
2) No (en este caso podrías perder puntos por no responder)`)

let rtaSegundaInstancia = prompt (`Ingrese su repuesta aqui!(responder con 1 o 2)`)

if(rtaSegundaInstancia == 1){
    preg5= preguntar ("¿Qué es la inmunidad de rebaño?", "a) Cuando todos en una comunidad tienen la misma enfermedad", "b) Cuando una gran proporción de la población es inmune a una enfermedad, lo que protege a aquellos que no lo son", "c) Cuando se desarrolla inmunidad permanente después de una sola vacunación", "b")
    preg19= preguntar ("¿Cuál es la función principal de las vacunas de ARN mensajero (ARNm)?", "a) Introducir ARN viral en el cuerpo.", "b) Estimular la respuesta inmunológica sin utilizar virus vivos/atenuados.", "c) Modificar el ADN humano.", "b")
}else{
    console.log(`Otro compañero del CONICET ha salido en un medio televisivo y ha aclarado todas las dudas`)
}

console.log (`Estas un poco nervioso, ya que tenes una gran responsabilidad encima. Asi que volviste a agarrar esos viejos apuntes sobre biología molecular para repasar`)

preg14= preguntar ("¿Cuál es el proceso por el cual una célula se divide en dos células hijas idénticas?", "a) Fagocitosis", "b) Meiosis", "c) Mitosis", "c")
preg9= preguntar ("¿Qué tipo de molécula contiene la información genética en las células?", "a) Proteínas", "b) Carbohidratos", "c) Ácido desoxirribonucleico (ADN)", "c")
preg11= preguntar ("¿Cuál es la función principal de las enzimas?", "a) Transportar oxígeno en la sangre", "b) Facilitar reacciones químicas", "c) Almacenar energía en las células", "b")
preg12= preguntar ("¿Cuál es la unidad básica de la herencia en los seres vivos?", "a) Aminoácido", "b) Gen", "c) Célula", "b")

if ( 15<= puntos ){
    console.log(`Felicitaciones, ${nombre}. Vienes muy bien! Ahora viene la parte mas dificil... la creación de la vacuna!`)

    preg6= preguntar ("¿Qué tipo de virus utiliza ARN en lugar de ADN para su información genética?", "a) Retrovirus", "b) Adenovirus", "c) Herpesvirus", "a")
    preg16= preguntar ("¿Qué tipo de ácido nucleico se encuentra en las vacunas de ARN?", "a) ARN ribosómico (ARNr)", "b) ARN de trasnferencia (ARNt)", "c) ARN mensajero (ARNm)", "c")
}else{
    console.log(`La verdad que estuvimos un poco flojos, el laboratorio cerró por cuarentena y nos costó mas de lo que creimos, pero capaz ahora podemos remontar.`)
    preg15= preguntar ("¿Cuál es la función de las células B en el sistema inmunitario?", "a) Producir anticuerpos", "b) Fagocitar patógenos", "c) Transportar oxígeno en la sangre", "a")
    preg18= preguntar ("¿Cuál es la función principal de las células T en el sistema inmunológico?", "a) Producir anticuerpos.", "b) Destruir células infectadas por patógenos.", "c) Filtrar la sangre.", "b")
}

alert(`URGENTE! Una vez lograda la vacuna, la gente tiene miedo de sacar turno, podrás ayudar a concientizar?`)

preg20= preguntar (" ¿Cuál es el propósito de una vacuna de refuerzo?", "a) Estimular la respuesta inmunológica inicial.", "b) Mantener alta la inmunidad a largo plazo.", "c) Tratar las infecciones activas.", "b")





/*
 preg7= preguntar ("¿Cuál es el proceso de fabricación de proteínas a partir de la información genética?", "a) Transcripción", "b) Traducción", "c) Replicación", "b")
preg8= preguntar ("¿Qué tipo de ARN lleva la información genética de un gen desde el núcleo hasta el citoplasma para la síntesis de proteínas?", "a) ARN ribosómico (ARNr)", "b) ARN mensajero (ARNm)", "c) ARN de transferencia (tARN)", "b")
preg10= preguntar ("¿Cuál es el objetivo de un adyuvante en una vacuna?", "a) Prevenir reacciones alérgicas", "b) Potenciar la respuesta inmunitaria", "c) Reducir la eficacia de la vacuna", "b")
preg13= preguntar ("¿Qué función tienen los anticuerpos en el sistema inmunitario?", "a) Transportar oxígeno en la sangre", "b) Eliminar patógenos y toxinas", "c) Digerir alimentos", "b")
preg17= preguntar ("¿Qué es la PCR (Reacción en Cadena de la Polimerasa)?", "a) Una técnica para amplificar y detectar material genético.", "b) Un tipo de vacuna.", "c) Una técnica para purificar proteínas.", "a")
*/




// Final
if(numPreg*3 === puntos){
    console.log(`Felicitaciones, ${nombre}, has logrado un puntaje perfecto, la verdad que superaste toda expectativa posible! has salvado la humanidad y fuiste recompensado con cinco millones de dolares`)
}else if(36 < puntos & puntos < numPreg*3){
    console.log(`Excelente desempeño ${nombre}! Has logrado encontrar la vacuna y la sociedad te lo ha agradecido con una estatua con tu nombre! Fe-li-ci-ta-ciones!`)
}else if (15 < puntos & puntos <= 36){
    console.log(`La vacuna ha salido, ${nombre}, pero la fakes news ganaron, lamentablemente la gente sufrió mucho culpa de grupos conspiranoicos.`)
}else{
    console.log(`${nombre}, has fallecido duarente el inteto. Vuelve a intentarlo!`)
}

console.log(`Tu puntaje final fue de: ${puntos}`)

console.log(`FIN DEL JUEGO`)

