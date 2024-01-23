function calculateBMI() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const ageInput = document.getElementById('age');
    const resultDiv = document.getElementById('result');

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    const age = parseInt(ageInput.value);

    if (isNaN(height) || isNaN(weight) || isNaN(age) || height <= 0 || weight <= 0 || age <= 0) {
        resultDiv.innerHTML = 'Please enter valid height, weight, and age.';
        return;
    }

    const bmi = calculateBMIValue(height, weight);
    const bmiCategory = getBMICategory(bmi);

    resultDiv.innerHTML = `Your BMI is: ${bmi.toFixed(2)} - ${bmiCategory}`;

    // Display alert with BMI category
    alert(`Your BMI is ${bmi.toFixed(2)} - ${bmiCategory}`);
}


function calculateBMIValue(height, weight) {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
