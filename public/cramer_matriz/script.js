function matriz2x2() {
    const a11 = parseFloat(document.getElementById("a11").value);
    const a12 = parseFloat(document.getElementById("a12").value);  //mando a llamar datos de mi html con ID 
    const b1 = parseFloat(document.getElementById("b1").value);    //para utilizarlos con javas y los almaceno en sus 
    const a21 = parseFloat(document.getElementById("a21").value);  // cosntantes que son variables fijas
    const a22 = parseFloat(document.getElementById("a22").value);
    const b2 = parseFloat(document.getElementById("b2").value);

    const det = a11 * a22 - a12 * a21; //Esta es la operacion para sacar los determinantes que vimos en clase multiplico y despues resto
    //y de ultimo la almaceno en una const llamada det de determinante
    if (det === 0) {
        document.getElementById("result2x2").innerHTML = "El determinante es 0, el sistema no tiene solución única.";
    } //Aca hago una condicional que si el determinante es 0 no hay una sola solucion para la ecuacion
    else {
        const x = (a22 * b1 - a12 * b2) / det;
        const y = (a11 * b2 - a21 * b1) / det;
        document.getElementById("result2x2").innerHTML = `x = ${x.toFixed(2)}, y = ${y.toFixed(2)}`;
    }  // si el determinante no es 0 seguira la operacion de crammer multiplicando restanto y de ultimo el
    //resultado lo dividira por el determinante que sacamos con anterioridad

    //De ultimo le digo que me muestre el resultado en mi objeto de html que tiene el ID de result2x2
    // que es un div en el html tambien le pedi que me muestre el resultado con un maximo de 2 decimales 
    // usando el metodo toFixed 
    // De ultimo mira el html, ahi mando a llamar a una funcion de onclick que es para que al
    // preionar el boton del html se muestren los resultados
}

// Lo de aca es practicamente lo mismo 
function matriz3x3() {
    const a31 = parseFloat(document.getElementById("a31").value);
    const a32 = parseFloat(document.getElementById("a32").value);
    const a33 = parseFloat(document.getElementById("a33").value);
    const b3 = parseFloat(document.getElementById("b3").value);     //mando a llamar datos de mi html con ID 
    const a41 = parseFloat(document.getElementById("a41").value);   //para utilizarlos con javas y los almaceno en sus 
    const a42 = parseFloat(document.getElementById("a42").value);   //cosntantes que son variables fijas
    const a43 = parseFloat(document.getElementById("a43").value);
    const b4 = parseFloat(document.getElementById("b4").value);
    const a51 = parseFloat(document.getElementById("a51").value);
    const a52 = parseFloat(document.getElementById("a52").value);
    const a53 = parseFloat(document.getElementById("a53").value);
    const b5 = parseFloat(document.getElementById("b5").value);

    const det = a31 * a42 * a53 + a32 * a43 * a51 + a33 * a41 * a52 - a31 * a43 * a52 - a32 * a41 * a53 - a33 * a42 * a51;
    //Esta es la operacion para sacar los determinantes que vimos en clase multiplico y despues resto
    if (det === 0) {
        document.getElementById("result3x3").innerHTML = "El determinante es 0, el sistema no tiene solución única.";
    } //Aca hago una condicional que si el determinante es 0 no hay una sola solucion para la ecuacion
    else {
        const x = (b3 * a42 * a53 + a32 * a43 * b5 + a33 * b4 * a52 - b3 * a43 * a52 - a32 * b4 * a53 - a33 * a42 * b5) / det;
        const y = (a31 * b4 * a53 + b3 * a43 * a51 + a33 * a41 * b5 - a31 * a43 * b5 - b3 * a41 * a53 - a33 * b4 * a51) / det;
        const z = (a31 * a42 * b5 + a32 * b4 * a51 + b3 * a41 * a52 - a31 * b4 * a52 - a32 * a41 * b5 - b3 * a42 * a51) / det;
        document.getElementById("result3x3").innerHTML = `x = ${x.toFixed(2)}, y = ${y.toFixed(2)}, z = ${z.toFixed(2)}`;
    } // si el determinante no es 0 seguira la operacion de crammer multiplicando restanto y de ultimo el
    //resultado lo dividira por el determinante que sacamos con anterioridad

    //De ultimo le digo que me muestre el resultado en mi objeto de html que tiene el ID de result3x3
    // que es un div en el html tambien le pedi que me muestre el resultado con un maximo de 2 decimales 
    // usando el metodo toFixed 
    // De ultimo mira el html, ahi mando a llamar a una funcion de onclick que es para que al
    // preionar el boton del html se muestren los resultados
}