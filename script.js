const mealButton = document.getElementById("meal-button");
const mealDiv = document.getElementById("meal-div");

let data;

mealButton.addEventListener("click", async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  data = await response.json();
  createMeal(data.meals[0]);
});

const createMeal = (meal) => {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (!meal[`strIngredient${i}`]) {
      break;
    }
    ingredients.push(
      `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
    );
  }

  mealDiv.innerHTML = `<div class="left">
  <img src="${meal.strMealThumb}" alt="Imagem da refeição" />

  <p><strong>Área:</strong> ${meal.strArea ?? "None"}</p>
  <p><strong>Categoria:</strong> ${meal.strCategory ?? "None"}</p>
  <p><strong>Tags:</strong> ${
    meal.strTags ? meal.strTags.split(",").join(", ") : "None"
  }</p>

  <div class="ingredients">
    <h3>Ingredients</h3>
    <ul>
    ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
    </ul>
  </div>
</div>

<div class="right">
  <h2 class="meal-title">${meal.strMeal}</h2>

  <div class="instructions">
    <p>
      ${meal.strInstructions}
    </p>
  </div>
</div>

<footer>
  <h4>Video</h4>
  <iframe height="300" width="600" src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">Video</iframe>
  <h4>Source: </h4><a href="">${meal.strSource ?? "None"}</a>
</footer>
`;
};
