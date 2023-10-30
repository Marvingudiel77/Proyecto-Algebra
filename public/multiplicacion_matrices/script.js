function multiMatrices() {
    const matriz1Text = document.getElementById("matriz1").value.trim(); //mandamos a llamar elementos de nuestro html y las almacenamos en constantes
    const matriz2Text = document.getElementById("matriz2").value.trim(); // .trim sirve para eliminar los espacios en blanco al inicio o final

    const matriz1Rows = matriz1Text.split('\n');
    const matriz2Rows = matriz2Text.split('\n');

    const matriz1 = matriz1Rows.map(row => row.split(/\s+/).map(Number));
    const matriz2 = matriz2Rows.map(row => row.split(/\s+/).map(Number)); // convirto los los valores en numeros y los almaceno en matrices

    if (matriz1[0].length !== matriz2.length) {
        alert("El número de columnas de la primera matriz debe ser igual al número de filas de la segunda matriz.");
        return;
    } //condicional que verefica si el numero de columnas de la matriz 1 es igual al numero de filas de la matriz 2

    const result = []; //se crea una constante para almacenar el resultado
    for (let indice_actual_fila = 0; indice_actual_fila < matriz1.length; indice_actual_fila++) {
        //bucle para pasar por cada fila de la primera matriz
        result[indice_actual_fila] = []; //arreglo para guardar resultados de la multiplicacion

        for (let columna_actual = 0; columna_actual < matriz2[0].length; columna_actual++) {
            //bucle para pasar por cada columna de la segunda matriz
            result[indice_actual_fila][columna_actual] = 0; //inicializamos return con valor 0 antes de la multiplicacion


            for (let indice_multiplicacion = 0; indice_multiplicacion < matriz2.length; indice_multiplicacion++) {
                // y comienza el ultimo bucle para multiplicar las matrices y guardarlo en la matriz return
                result[indice_actual_fila][columna_actual] += matriz1[indice_actual_fila][indice_multiplicacion] * matriz2[indice_multiplicacion][columna_actual];
            }
        }
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>Resultado:</h2><pre>" + matrixToString(result) + "</pre>";//muestra el resultado en html y convierte el resultado en cadena de texto
}

//funcion para ordenar las filas por saltos de linea y separados por espacios
function matrixToString(matrix) {
    return matrix.map(row => row.join('\t')).join('\n');
}