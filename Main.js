document.getElementById("convertButton").addEventListener("click", function() {
    const numberInput = document.getElementById("numberInput").value.trim();
    const baseSelect = document.getElementById("baseSelect").value;
    const consoleOutput = document.getElementById("consoleOutput");
    
    if (!numberInput) {
        consoleOutput.innerText = "Por favor, ingrese un número válido.";
        return;
    }
    
    try {
        const number = parseInt(numberInput, baseSelect);
        if (isNaN(number)) throw new Error("Número inválido para la base seleccionada.");
        
        const results = {
            "Binario": number.toString(2),
            "Octal": number.toString(8),
            "Decimal": number.toString(10),
            "Hexadecimal": number.toString(16).toUpperCase()
        };
        
        consoleOutput.innerHTML = `<p><strong>Resultados:</strong></p>`;
        for (const [key, value] of Object.entries(results)) {
            consoleOutput.innerHTML += `<p>${key}: ${value}</p>`;
        }
    } catch (error) {
        consoleOutput.innerText = "Error: " + error.message;
    }
});
