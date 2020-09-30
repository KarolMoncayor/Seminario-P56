var docentes1 = {
    
    nombre : 'Karol',
    apellido: 'Moncayo',
    afiliacion: 'Universidad Politecnica Salesiana',
    correo_electronico: 'kmoncayor@est.ups.edu.ec'
}

var docente2 = {
    nombre : 'Ruth',
    apellido: 'Alvarado',
    afiliacion: 'Universidad Politecnica Salesiana',
    correo_electronico: 'ralvarados@est.ups.edu.ec'
}

function imprimirNombreMayuscula(objeto){
    var {nombre} = objeto
    console.log(` ${nombre.toUpperCase()} ${objeto.apellido}` )
}
function imprimirNombreMinuscula(objeto){
    console.log(` ${objeto.nombre.toUpperCase()} ${objeto.apellido}` )
}

function imprimirApellidoMayuscula ( {apellido}){
    console.log (`${apellido.toUpperCase()}`)
}
imprimirNombreMayuscula (docentes1)
imprimirNombreMinuscula (docentes1)
imprimirApellidoMayuscula(docente2)