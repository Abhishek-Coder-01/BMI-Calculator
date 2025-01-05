
document.getElementById('bmiForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
  const weight = parseFloat(document.getElementById('weight').value);

  if (height > 0 && weight > 0) {
    const bmi = (weight / (height * height)).toFixed(1);
    const out = document.getElementById('out');
    const needle = document.getElementById('needle');
    const status = document.getElementById('status');

    out.innerHTML = `BMI: ${bmi}`;

    let rotation = -90; // Start from -90 degrees (leftmost)
    let category = '';

    if (bmi < 18.5) {
      rotation = -45;
      category = 'Underweight';
      setTimeout(() => {
        alert("Time to grab a bite! By maintaining a healthy weight, you lower your risk of developing serious health problems.");
      }, 2000);

    }

    else if (bmi >= 18.5 && bmi < 25) {
      rotation = 0;
      category = 'Normal';
      setTimeout(() => {
        alert("Great shape! By maintaining a healthy weight, you lower your risk of developing serious health problems.");
      }, 2000);
    }

    else if (bmi >= 25 && bmi < 30) {
      rotation = 45;
      category = 'Overweight';
      setTimeout(() => {
        alert("Time to run! By maintaining a healthy weight, you lower your risk of developing serious health problems.");
      }, 2000);
    }

    else {
      rotation = 90;
      category = 'Obese';
      setTimeout(() => {
        alert("Time to run! By maintaining a healthy weight, you lower your risk of developing serious health problems.");
      }, 2000);
    }

    needle.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
    status.textContent = `Status: ${category}`;
  } else {
    alert('Please enter valid height and weight.');
  }
});
