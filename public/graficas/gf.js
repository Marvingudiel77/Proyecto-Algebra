let chart; //se usa para almacenar el espacio del grafico

function graficarLineas() {
    const puntoInput = document.getElementById("punto1").value;
    const puntoInput2 = document.getElementById("punto2").value;

    const puntos = puntoInput.match(/\(([^)]+)\)/g).map(point => {
        const values = point.substring(1, point.length - 1).split(",").map(Number);
        return values;
    });

    const puntos2 = puntoInput2.match(/\(([^)]+)\)/g).map(point => {
        const values = point.substring(1, point.length - 1).split(",").map(Number);
        return values;
    });

    if (chart) {
        chart.destroy(); //detecta si ya hay un grafico y lo limpia al ingresar otro
    }

    const ctx = document.getElementById("grafico").getContext('2d'); //obtiene el contexto 2D que es necesario para dibujar en el lienzo
    chart = new Chart(ctx, { //se crea para configurar el grafico y sus estilos
        type: 'line',
        data: {
            labels: puntos.map(point => point[0]),
            datasets: [{
                label: 'solucion X',
                data: puntos,
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 2,
                fill: false,
                tension: 0
            }, // se definen los 2 conjuntos de datos que se convertiran en las 2 lineas X y Y
            {
                label: 'solucion Y',
                data: puntos2,
                borderColor: 'rgb(255, 206, 86)',
                borderWidth: 2,
                fill: false,
                tension: 0
            }]
        },
        options: {
            scales: {
                x: [{
                    type: 'linear',
                    position: 'bottom'
                }]
            }
        }
    });
}