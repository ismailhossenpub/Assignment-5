document.getElementById("searchBtn").addEventListener("click", function () {
  const InputValue = document.getElementById("searchInput");

  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${InputValue.value}`
  )
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals))
    .catch((error) => displayError("Something is wrong!"));
});

const displayMeals = (meals) => {
  const mealDiv = document.getElementById("mealId");
  mealDiv.innerHTML = "";
  meals.forEach((meal) => {
    const searchMeals = document.createElement("div");
    searchMeals.className = "col-3 card";
    searchMeals.addEventListener("click", function () {
      displayDetails(meal);
    });
    const mealInfo = `
                      <img class="rounded" src="${meal.strMealThumb}">
                      <div class="card-body">
                        <h4>${meal.strMeal}</h4>
                      </div>
        `;
    searchMeals.innerHTML = mealInfo;
    mealDiv.appendChild(searchMeals);
  });
};

const displayDetails = (meals) => {
  const mealsDetails = document.getElementById("mealDetailsDiv");

  const searchMealsDetails = `
    
                <div class="col cardDetails">
                
                <img width="300px" src="${meals.strMealThumb}">
                <div class="card-body">
                  <h2>${meals.strMeal}</h2>
                  <h4>Ingredients</h4>
                      <ul>
                        <li>${meals.strIngredient1}</li>
                        <li>${meals.strIngredient2}</li>
                        <li>${meals.strIngredient3}</li>
                        <li>${meals.strIngredient4}</li>
                        <li>${meals.strIngredient5}</li>
                        <li>${meals.strIngredient6}</li>
                        <li>${meals.strIngredient7}</li>
                        <li>${meals.strIngredient8}</li>
                        <li>${meals.strIngredient9}</li>
                        <li>${meals.strIngredient10}</li>
                      </ul>
                    </div>
                    </div>
                
    `;
  mealsDetails.innerHTML = searchMealsDetails;
};
const displayError = (error) => {
  const errorTag = document.getElementById("errorId");
  errorTag.innerText = error;
};
