const display = document.getElementById('display');

// Append value to display
function appendValue(value) {
  display.value += value;
}

// Clear all input
function clearDisplay() {
  display.value = '';
}

// Delete last character
function deleteChar() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
