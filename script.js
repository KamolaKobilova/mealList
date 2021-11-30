const searchBtn  =document.getElementById('searchBtn');
const mealList = document.getElementById('meals');
const mealContent = document.getElementById('mealContent');
const recipeCloseBtn = document.getElementById('closeBtn');

searchBtn.addEventListener('click', getMealList);
// mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', ()=>{
    mealContent.parentElement.classList.remove('showRecipe')
});

searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});


// get meal list that matches with the ingredients
function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "./assets/min.png" alt = "food">
                        </div>
                        // <div class = "meal-name">
                        //     <h3>${meal.strMeal}</h3>
                           
                        // </div>
                    </div>
                `;
            });
            mealList.classList.remove('notFound');
        } else{
            html = "Sorry, we didn't find any meal!";
            mealList.classList.add('notFound');
        }

        mealList.innerHTML = html;
    });
}
// function getMealRecipe(e){
//     e.preventDefault();
//     if(e.target.classList.contains('recipe-btn')){
//         let mealItem = e.target.parentElement.parentElement;
//         fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
//         .then(response => response.json())
//         .then(data => mealRecipeModal(data.meals));
//     }
// }

// FILTER///////////

    

