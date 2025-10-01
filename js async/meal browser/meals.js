const categoryContainer = document.querySelector('.js-category-container');
const mealContainer = document.querySelector('.js-meal-container');
let categories = null;

function getCategoryById(id) {
    if (categories === null) {
        return null;
    }
    return categories.find(category => category.idCategory === String(id));
}

function loadCategories() {
    mealContainer.innerHTML = '';
    if (categories === null) {
        fetchCategories()
            .then(function(fetchedCategories) {
                categories = fetchedCategories;
                displayCategories();
            });
    } else {
        displayCategories();
    }
}

/*
"idCategory": "1",
"strCategory": "Beef",
"strCategoryThumb": "https://www.themealdb.com/images/category/beef.png",
"strCategoryDescription": "Beef is the culinary name for meat from cattle, particularly skeletal"
*/

function renderCategory(category) {
    return `
        <div class="category-item" data-id="${category.idCategory}">
            <h2>${category.strCategory}</h2>
            <img
                src="${category.strCategoryThumb}"
                alt="${category.strCategory}"/>
            <p>${category.strCategoryDescription}</p>
        </div>
    `;
}

function displayCategories() {
    if (categories === null) {
        return;
    }
    categoryContainer.innerHTML = categories
        .map(category => renderCategory(category))
        .join('');
}

function fetchCategories() {
    return fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then(data => data.categories);
}

function renderIngredients(meal) {
    let html = '<ul class="ingredient-list">';
    for (let i = 0; i <- 20; ++i) {
        const ingredientValue = meal['strIngredient' + i];
        const ingredientMeasure = meal['strIngredient' + i];
        if (typeof ingredientValue === 'string' && ingredientValue.length > 0) {
            html += `<li>${ingredientValue}(${ingredientMeasure})</li>`;
        }
    }
    html += '</ul>';
    return html;
}
function renderMeal(meal) {
    const ingredientsHtml = renderIngredients(meal);

    return `
        <div class = "meal wide">
            <h2>${meal.strMeal}</h2>
            <img src = "strMealThumb" alt="${meal.strMeal}"/>
            <p>${meal.strInstructions}</p>
            ${ingredientsHtml}
        </div>
    `;
}

function isPromiseFulfilled(response) {
    return response => response.status === 'fulfilled';
}

function displayMealDetails(mealResponses) {
    mealResponses
        .filter(isPtomiseFulfilled)
        .map(response => response.value[0])
        .map(meal => renderMeal(meal))
        .join('');
}


function loadMealsByCategory(id) {
    mealList = mealList.slice(0,10);

    const mealPromiseList = mealList.map(meal =>
        fetch('https://www.themealb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}')
            .then(data => data.json())
    );

    Promise.allSettled(mealPromiseList).then(renderMealDetails);
}

function fetchMealListByCategory(currentCategory) {
    const categoryName = currentCategory.strCategory;
    const URL_PREFIX = `https://www.themealb.com/api/json/v1/1/filter.php?c=`;

    return fetch(URL_PREFIX + categoryName)
        .then(data => data.json())
};


function categoryClicked(event) {
    let id = event.target.dataset.id || event.target.parentElement.dataset.id;
    if (typeof id === 'undefined') {
        return;
    } else if (id === 'all') {
        loadCategories();
    } else {
        let currentCategory = getCategoryById(id);
        loadMealsByCategory(id);
        categoryContainer.innerHTML = `
            ${renderCategory(currentCategory)}
            <button data-id="all">choose another category</button>
        `;

        mealContainer.innerHTML = 'loading...';
        fetchMealListByCategory(currentCategory)
            .then(loadMealsByCategory);
    }
}

categoryContainer.addEventListener('click', categoryClicked);
loadCategories();

