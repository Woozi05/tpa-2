window.onload = () => {
	let button = document.querySelector("#btn");

	// Function for calculating BMI
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
	
	let weight = document.querySelector("#weight").value;
	let height = document.querySelector("#height").value;
	let result = document.querySelector("#result");

	let bmi = (weight / ((height * height)/10000)).toFixed(1);

    if (bmi < 18.5) {
        category = 'Under Weight';
    }else if (bmi >= 18.5 && bmi <= 24.9) {
		category = 'Normal Weight';
    }else if (bmi >= 25 && bmi <= 29.9) {
		category = 'Over Weight';
    }else {
        category = 'Obesity';
    }
    result.innerHTML = `Your BMI is <span>${bmi}</span> which means You are ${category} `
}
