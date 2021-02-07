document.getElementById("searchBtn").addEventListener("click", function () {
  const InputValue = document.getElementById("searchInput");

  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${InputValue.value}`
  )
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
});

const displayMeals = (meals) => {
  const mealsDiv = document.getElementById("mealName");

  mealsDiv.innerHTML = "";
  meals.forEach((meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.className = "mealClass";

    const mealInfo = `
        <div class="col">
                    <div class="card">
                    <img  src="${meal.strMealThumb}">
                    <div class="card-body">
                    <h4>${meal.strMeal}</h4>
                    <button onclick = "displayDetails('${meal.idMeal}')">Details</button>
                    </div>
                    </div>
            </div>
        `;
    mealDiv.innerHTML = mealInfo;
    mealsDiv.appendChild(mealDiv);
  });
};

const displayDetails = (details) => {
  console.log(details);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${details}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showDetails(data.value));
};
const showDetails = (meals) => {
  console.log(meals);
  const mealsDiv = document.getElementById("mealsDetails");
  mealsDiv.innerHTML = `
     <div class="col">
                    <div class="card">
                    <img  src="${meals.strMealThumb}">
                    <div class="card-body">
                    <h4>Ingredients</h4>
                    <h4>${meals.strMeal}</h4>
                    <li class ="list-group-item border-0 mb-3"><i class="fas fa-check-square"></i>${meals.strIngredient1}</li>
                    <li class ="list-group-item border-0 mb-3"><i class="fas fa-check-square"></i>${meals.strIngredient2}</li>
                    <li class ="list-group-item border-0 mb-3"><i class="fas fa-check-square"></i>${meals.strIngredient3}</li>
                    <li class ="list-group-item border-0 mb-3"><i class="fas fa-check-square"></i>${meals.strIngredient4}</li>
                    <li class ="list-group-item border-0 mb-3"><i class="fas fa-check-square"></i>${meals.strIngredient5}</li>
                    </div>
                    </div>
            </div>
     `;
};
