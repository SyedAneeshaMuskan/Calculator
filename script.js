// Insert numbers or operators into the display
function insert(value) {
    document.getElementById("display").value += value;
}

// Clear the entire display
function clearDisplay() {
    document.getElementById("display").value = '';
}

// Delete the last character from the display
function deleteChar() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

// Evaluate the expression in the display
function calculate() {
    let expression = document.getElementById("display").value;
    if (expression) {
        try {
            // Use eval to calculate the result
            document.getElementById("display").value = eval(expression);
        } catch (error) {
            // Handle invalid expression
            document.getElementById("display").value = "Error";
        }
    }
}
