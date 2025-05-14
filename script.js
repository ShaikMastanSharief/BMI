    const weightInput = document.getElementById("weightInput");
    const heightInput = document.getElementById("heightInput");
    const calculateButton = document.getElementById("calculateButton");
    const resetButton = document.getElementById("resetButton");
    const bmiResult = document.getElementById("bmiResult");
    const bmiCategory = document.getElementById("bmiCategory");
    const livePreview = document.getElementById("livePreview");

    function calculateBMI() {
      const weight = parseFloat(weightInput.value);
      const heightCm = parseFloat(heightInput.value);

      if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        bmiResult.textContent = "Please enter valid numbers!";
        bmiResult.style.color = "red";
        bmiCategory.textContent = "";
        return;
      }

      const heightM = heightCm / 100;
      const bmi = weight / (heightM * heightM);
      const bmiRounded = bmi.toFixed(1);

      bmiResult.textContent = `Your BMI is ${bmiRounded}`;

      let category = "";
      let colorClass = "";

      if (bmi < 18.5) {
        category = "Underweight";
        colorClass = "color-underweight";
      } else if (bmi < 24.9) {
        category = "Normal weight";
        colorClass = "color-normal";
      } else if (bmi < 29.9) {
        category = "Overweight";
        colorClass = "color-overweight";
      } else {
        category = "Obese";
        colorClass = "color-obese";
      }

      bmiCategory.textContent = `Category: ${category}`;
      bmiCategory.className = `category ${colorClass}`;
    }

    calculateButton.addEventListener("click", calculateBMI);
    resetButton.addEventListener("click", () => {
      weightInput.value = "";
      heightInput.value = "";
      bmiResult.textContent = "";
      bmiCategory.textContent = "";
    });

    // Live Preview Feature
    weightInput.addEventListener("input", () => {
      if (livePreview.checked) calculateBMI();
    });

    heightInput.addEventListener("input", () => {
      if (livePreview.checked) calculateBMI();
    });