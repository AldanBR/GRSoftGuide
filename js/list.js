var cafeDaManhaSelect = document.getElementById("cafeDaManhaSelect");
var almocoSelect = document.getElementById("almocoSelect");
var jantarSelect = document.getElementById("jantarSelect");
var confirmButton = document.getElementById("confirmButton");
var selectedRecipes = document.getElementById("selectedRecipes");

var selectedCafeDaManhaRecipes = [];
var selectedAlmocoRecipes = [];
var selectedJantarRecipes = [];

confirmButton.addEventListener("click", function () {
  selectedCafeDaManhaRecipes = Array.from(cafeDaManhaSelect.selectedOptions, (option) => option.value);
  selectedAlmocoRecipes = Array.from(almocoSelect.selectedOptions, (option) => option.value);
  selectedJantarRecipes = Array.from(jantarSelect.selectedOptions, (option) => option.value);

  // Função para exibir as receitas selecionadas
  function displaySelectedRecipes(recipes, container) {
    container.innerHTML = "";
    recipes.forEach(function (recipeIndex, index) {
      var recipeData = null;
      var recipeType = null;
      var recipeTypeText = "";

      if (container === cafeDaManhaRecipe) {
        recipeData = cafeDaManhaRecipes[recipeIndex];
        recipeType = "Café da Manhã";
      } else if (container === almocoRecipe) {
        recipeData = almocoRecipes[recipeIndex];
        recipeType = "Almoço";
      } else if (container === jantarRecipe) {
        recipeData = jantarRecipes[recipeIndex];
        recipeType = "Jantar";
      }

      if (recipeData) {
        var recipeDiv = document.createElement("div");
        recipeDiv.textContent = recipeType + ": " + recipeData.nome;
        container.appendChild(recipeDiv);
      }
    });
  }

  displaySelectedRecipes(selectedCafeDaManhaRecipes, cafeDaManhaRecipe);
  displaySelectedRecipes(selectedAlmocoRecipes, almocoRecipe);
  displaySelectedRecipes(selectedJantarRecipes, jantarRecipe);

  selectedRecipes.style.display = "block";
});
