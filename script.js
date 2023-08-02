const mealButton = document.getElementById("meal-button");
const mealDiv = document.getElementById("meal-div");

let data;

mealButton.addEventListener("click", async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  data = await response.json();
  console.log(data.meals[0]);
  createMeal(data.meals[0]);
});

const createMeal = (meal) => {
  const ingredients = [];

  for (let i = 0; i < 20; i++) {
    if (!meal[`strIngredient${i}`]) break;
    ingredients.push(
      `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
    );
  }

  mealDiv.innerHTML = `<div class="left">
  <img src="${meal.strThumb}" alt="Imagem da refeição" />

  <p><strong>Área:</strong> ${meal.strArea}</p>
  <p><strong>Categoria:</strong> ${meal.strCategory ?? 'None'}</p>
  <p><strong>Tags:</strong> ${}</p>

  <div class="ingredients">
    <h3>Ingredients</h3>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</div>

<div class="right">
  <h2 class="meal-title">Título</h2>

  <div class="instructions">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
      provident atque sapiente, nam dolores suscipit voluptatem unde et.
      Odio earum deleniti, facere a, delectus hic rem deserunt beatae
      magni quaerat quidem veritatis! Iusto sunt dicta minima fugit quas
      aperiam aliquid consectetur hic inventore saepe distinctio ipsum
      voluptas minus recusandae consequuntur eveniet adipisci odio,
      delectus iste. Consequuntur enim atque illo nemo qui quasi suscipit,
      repellat nihil id doloribus natus voluptatum cupiditate? Labore
      aliquam ratione laudantium? Ex corporis officia quam? Quisquam,
      eius!
    </p>
  </div>
</div>

<div class="meal-video">
  <a href=""></a>
</div>

<div class="meal-source">
  <h4>Source: </h4><a href="">Oi</a>
</div>`;
};

// mealDiv.innerHTML =
