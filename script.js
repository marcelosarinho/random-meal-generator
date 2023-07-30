const mealButton = document.getElementById("meal-button");
const mealDiv = document.getElementById("meal-div");

mealButton.addEventListener("click", async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const data = await response.json();
  console.log(data);
});

console.log(mealDiv.innerHTML)