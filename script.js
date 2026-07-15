console.log("Calorie Tracker script loaded.");

let result = document.getElementById("result");

function login() {
    const emailField = document.getElementById("email-login");
    const passwordField = document.getElementById("password-login");
    
    if (emailField && passwordField) {
        const username = emailField.value;
        const password = passwordField.value;
        console.log("Logging in...");
        window.location.href = "calorie-tracker.html";
    }
}

function logout() {
    console.log("Logging out...");
    window.location.href = "index.html";
}

// Function to update the values

function calculate() {
    if (!result) {
        console.error("Result not found.");
        return;
    }
    
    const age = Number(document.getElementById("age").value) || 0;
    const gender = document.getElementById("gender").value || 'other';
    const weight = Number(document.getElementById("weight").value) || 0;
    const height = Number(document.getElementById("height").value) || 0;
    const activity = Number(document.getElementById("activity").value) || 1.2;

    if (!age || !weight || !height) {
        result.innerHTML = '<p class="error">Please enter age, weight and height.</p>';
        return;
    }

    //Math-Calculation

    let bmr = 10 * weight + 6.25 * height - 5 * age;
    if (gender === 'male') bmr += 5;
    else if (gender === 'female') bmr -= 161;

    const calories = Math.round(bmr * activity);

    const proteinG = Math.round(weight * 0.8);
    const proteinCal = proteinG * 4;

    // Fat: 30% of calories
    const fatCal = Math.round(calories * 0.30);
    const fatG = Math.round(fatCal / 9);

    // Carbohydrates: 50% of calories
    const carbsCal = Math.round(calories * 0.50);
    const carbsG = Math.round(carbsCal / 4);

    // Sugar under 10% of calories
    const sugarG = Math.round((calories * 0.10) / 4);

    // Salt 5g for adults, 3g for children under 14
    const saltG = age < 14 ? 3 : 5;


    //show results
    result.innerHTML = `
      <h2>Recommended daily intake</h2>
      <table class="results-table">
        <tr><th>Nutrient</th><th>Amount</th></tr>
        <tr><td>Calories</td><td>${calories} kcal</td></tr>
        <tr><td>Fat</td><td>${fatG} g (${Math.round((fatCal/calories)*100)}%)</td></tr>
        <tr><td>Kohlenhydrate</td><td>${carbsG} g (${Math.round((carbsCal/calories)*100)}%)</td></tr>
        <tr><td>Sugar</td><td>${sugarG} g (≤10%)</td></tr>
        <tr><td>Protein</td><td>${proteinG} g (${Math.round((proteinCal/calories)*100)}%)</td></tr>
        <tr><td>Salz</td><td>${saltG} g</td></tr>
      </table>
      `;
}