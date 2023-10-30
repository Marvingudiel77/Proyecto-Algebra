function calcularInversa() {
  const a11 = parseFloat(document.getElementById('a11').value);
  const a12 = parseFloat(document.getElementById('a12').value);//mando a llamar a mis elementos con ID de mi html
  const a21 = parseFloat(document.getElementById('a21').value);//convierto los numeros de texto a flotantes o numeros reales con parsefloat
  const a22 = parseFloat(document.getElementById('a22').value);

  const determinante = a11 * a22 - a12 * a21; //calculo el determinante de la matriz

  if (determinante === 0) {
    document.getElementById('resultado').innerText = "La matriz no tiene inversa.";
  } //si el determinante es 0 se mostrara un mensaje en la pagina que no tiene inversa
  else {
    const inversaA11 = (a22 / determinante).toFixed(2);
    const inversaA12 = (-a12 / determinante).toFixed(2);
    const inversaA21 = (-a21 / determinante).toFixed(2); //definimos los cofactores y los dividimos por el determinante
    const inversaA22 = (a11 / determinante).toFixed(2);  //tal y como lo vimos en ejercicios de clase

    const resultadoHTML = `
        <div>Inversa:</div>
        <table>
          <tr>
            <td>${inversaA11}</td>
            <td>${inversaA12}</td> 
          </tr>
          <tr>
            <td>${inversaA21}</td>
            <td>${inversaA22}</td>
          </tr>
        </table>
      `; //Me muestra el resultado en un div html organizado por filas y columnas como una matriz en forma de tabla

    document.getElementById('resultado').innerHTML = resultadoHTML; // se conecta y se ejecuta el resultado al html
  }
}





