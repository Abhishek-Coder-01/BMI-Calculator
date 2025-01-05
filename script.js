
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

    // Underweight condition
    if (bmi < 18.5) {
      rotation = -45; // Rotate needle to -45 degrees
      category = 'Underweight';
      setTimeout(() => {
        alert("Time to grab a bite! By maintaining a healthy weight, you lower your risk of developing serious health problems.");
      }, 2000);
    } 
    // Normal weight condition
    else if (bmi >= 18.5 && bmi < 25) {
      rotation = 10; // Rotate needle to 10 degrees
      category = 'Normal';
      setTimeout(() => {
        alert("Great shape! By maintaining a healthy weight, you lower your risk of developing serious health problems.");
      }, 2000);
    } 
    // Overweight condition
    else if (bmi >= 25 && bmi < 30) {
      rotation = 45; // Rotate needle to 45 degrees
      category = 'Overweight';
      setTimeout(() => {
        alert("Time to run! By maintaining a healthy weight, you lower your risk of developing serious health problems.");
      }, 2000);
    } 
    // Obese condition
    else {
      rotation = 90; // Rotate needle to 90 degrees
      category = 'Obese';
      setTimeout(() => {
        alert("Time to run! By maintaining a healthy weight, you lower your risk of developing serious health problems.");
      }, 2000);
    }

    // Apply the rotation to the needle
    needle.style.transform = `translateX(-50%) rotate(${rotation}deg)`;

    // Display the category (status)
    status.textContent = `Status: ${category}`;

  } else {
    alert('Please enter valid height and weight.');
  }
});
