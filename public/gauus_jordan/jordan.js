// document.addEcentListener espera que la pagina html este lista para ejecutar el script
document.addEventListener('DOMContentLoaded', function () {
    const botonResolver = document.getElementById('resolver');
    const textareaEcuaciones = document.getElementById('ecuaciones'); // llamamos elementos de html por id 
    const divSolucion = document.getElementById('solucion');

    botonResolver.addEventListener('click', function () {
        //agrega un evento click al boton de resolver
        const textoEcuaciones = textareaEcuaciones.value; //obtiene el texto de las ecuaciones ingresadas por el usuario
        const ecuaciones = textoEcuaciones.split('\n').map(eq => eq.split(' ').map(Number));
        // divide el texto ingresado en lineas con numeros usando espacio, convirtiendo el texto en una matriz
        const solucion = gaussJordan(ecuaciones);
        mostrarSolucion(solucion); // llama a la funcion gaussJordan y le da de parametros las ecuaciones 
    });

    function gaussJordan(matriz) {
        const numero_matriz = matriz.length; //calcula el numero de fila en la matriz y las almacen en la constante

        for (let fila_actual = 0; fila_actual < numero_matriz; fila_actual++) {
            let diagonal_principal = matriz[fila_actual][fila_actual];

            // Hacer que los elementos diagonales sean 1
            for (let in_columna_modificada = fila_actual; in_columna_modificada < numero_matriz + 1; in_columna_modificada++) {
                matriz[fila_actual][in_columna_modificada] /= diagonal_principal;
            }

            // Hacer que las otras filas sean 0
            for (let indice_fila_modificada = 0; indice_fila_modificada < numero_matriz; indice_fila_modificada++) {
                if (indice_fila_modificada !== fila_actual) {
                    let factor = matriz[indice_fila_modificada][fila_actual];
                    for (let in_columna_modificada = fila_actual; in_columna_modificada < numero_matriz + 1; in_columna_modificada++) {
                        matriz[indice_fila_modificada][in_columna_modificada] -= factor * matriz[fila_actual][in_columna_modificada];
                    }
                }
            }
        }

        const solucion = matriz.map(fila => fila[numero_matriz]);
        return solucion;
    }

    function mostrarSolucion(solucion) {
        const solucionFormateada = solucion.map((sol, index) => `x${index + 1} = ${sol.toFixed(2)}`);
        divSolucion.innerHTML = solucionFormateada.join('<br>');
    }
});
