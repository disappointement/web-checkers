const moveFocus = (event, index) => {
  const currentInput = event.target;

  if (isNaN(currentInput.value)) {
    currentInput.value = "";
    return;
  }

  const valueLength = currentInput.value.length;
  currentInput.setSelectionRange(valueLength, valueLength);

  const inputs = document.querySelectorAll(".otc-input");

  if (currentInput.value.length === 1) {
    // Move focus to the next input if it exists
    if (index + 1 < inputs.length) {
      inputs[index + 1].focus();
    } else {
      // Remove focus if it's the last input
      currentInput.blur();
    }
  } else if (event.inputType === "deleteContentBackward" && index > 0) {
    // If user pressed backspace, move focus to the previous input
    inputs[index - 1].focus();
  }
};

const forceCursor = (input) => {
  setTimeout(() => {
    const length = input.value.length;

    if (input.setSelectionRange) {
      console.log("setSelectionRange");
      input.setSelectionRange(length, length);
    } else if (input.createTextRange) {
      // IE fallback
      const range = input.createTextRange();
      range.collapse(false); // Collapse range to the end
      range.select();
    }
  }, 0); // Delay to ensure the input is ready
};
