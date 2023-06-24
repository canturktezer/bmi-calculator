function calculateBmiMetric() {
  const heightMetric = document.getElementById("height");
  const weightMetric = document.getElementById("weight");

  const weight = Number(weightMetric.value);
  const height = Number(heightMetric.value) / 100;

  const bmi = weight / Math.pow(height, 2);

  const resultMetric = document.getElementById("result");
  resultMetric.textContent = `Your BMI is ${bmi.toFixed(2)}.`;
}

const calculatButtoneMetric = document.getElementById("calculate");
calculatButtoneMetric.addEventListener("click", calculateBmiMetric);

function calculateBmiImperial() {
  const heightFeetImperial = document.getElementById("height-feet");
  const heightInchesImperial = document.getElementById("height-inches");
  const weightLbsImperial = document.getElementById("weight-lbs");

  const heightFeet = Number(heightFeetImperial.value);
  const heightInches = Number(heightInchesImperial.value);
  const weightLbs = Number(weightLbsImperial.value);

  const totalHeight = heightFeet * 12 + heightInches;
  const bmiImperial = (weightLbs / (totalHeight * totalHeight)) * 703;

  const resultLbs = document.getElementById("result-lbs");
  resultLbs.textContent = `Your BMI is ${bmiImperial.toFixed(2)}.`;
}

const calculateLbs = document.getElementById("calculate-lbs");
calculateLbs.addEventListener("click", calculateBmiImperial);
