const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let currentInput = "";

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const val = btn.textContent;

        if (val === "C") {
          currentInput = "";
          display.value = "";
        } else if (val === "=") {
          try {
            display.value = eval(currentInput);
            currentInput = display.value;
          } catch (e) {
            display.value = "Error";
          }
        } else {
          currentInput += val;
          display.value = currentInput;
        }
      });
    });

    // Optional: Keyboard support
    document.addEventListener("keydown", (e) => {
      if ((e.key >= 0 && e.key <= 9) || ["+", "-", "*", "/", "."].includes(e.key)) {
        currentInput += e.key;
        display.value = currentInput;
      } else if (e.key === "Enter") {
        try {
          display.value = eval(currentInput);
          currentInput = display.value;
        } catch (err) {
          display.value = "Error";
        }
      } else if (e.key === "Backspace") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
      } else if (e.key === "Escape") {
        currentInput = "";
        display.value = "";
      }
    });