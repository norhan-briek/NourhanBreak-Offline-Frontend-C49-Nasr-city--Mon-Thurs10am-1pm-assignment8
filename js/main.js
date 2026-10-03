// Array فيه كل الوصفات
var recipes = [
    // ===== 1. Mediterranean Quinoa Bowl =====
    {
        name: "Mediterranean Quinoa Bowl",
        desc: "Healthy bowl with quinoa, vegetables, and tahini dressing",
        image: "img/recipe1.jpg",
        prepTime: "20 min",
        cookTime: "25 min",
        servings: "4 people",
        rating: "4.5",
        ingredients: [
            "1 cup quinoa",
            "Cherry tomatoes, halved",
            "Cucumber, diced",
            "Red onion, sliced",
            "Kalamata olives",
            "Feta cheese, crumbled",
            "Fresh parsley",
            "Tahini dressing"
        ],
        instructions: [
            "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
            "While quinoa cooks, prepare all vegetables and set aside.",
            "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
            "Fluff cooked quinoa with a fork and let cool slightly.",
            "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
            "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."
        ],
        nutrition: {
            calories: "480 kcal",
            protein: "18g",
            carbs: "58g",
            fat: "20g",
            fiber: "10g",
            sodium: "540mg"
        },
        tips: [
            "Rinse quinoa well to remove bitter coating",
            "Let quinoa cool before adding fresh ingredients",
            "Make extra tahini dressing - it keeps well in the fridge",
            "Add grilled chicken or chickpeas for extra protein"
        ]
    },
     // ===== 2. Thai Green Curry =====
    {
        name: "Thai Green Curry",
        desc: "Vibrant and aromatic curry with vegetables and coconut milk",
        image:   "img/recipe2.jpg" ,
        prepTime: "15 min",
        cookTime: "25 min",
        servings: "4 people",
        rating: "4.7",
        ingredients: [
            "2 tablespoons green curry paste",
            "400ml coconut milk",
            "300g chicken breast, sliced",
            "1 red bell pepper, sliced",
            "100g green beans",
            "1 eggplant, cubed",
            "2 tablespoons fish sauce",
            "1 tablespoon palm sugar",
            "Fresh Thai basil leaves"
        ],
        instructions: [
            "Heat a large pot over medium heat. Add curry paste and cook for 1 minute.",
            "Add coconut milk and bring to a simmer.",
            "Add chicken and cook until no longer pink.",
            "Add vegetables and cook until tender.",
            "Season with fish sauce and palm sugar.",
            "Stir in Thai basil leaves and serve with rice."
        ],
        nutrition: {
            calories: "520 kcal",
            protein: "25g",
            carbs: "30g",
            fat: "35g",
            fiber: "5g",
            sodium: "800mg"
        },
        tips: [
            "Use full-fat coconut milk for creamier curry",
            "Adjust spice level by adding more or less curry paste",
            "Add vegetables of your choice",
            "Serve with jasmine rice"
        ]
    },
    // ===== 3. Creamy Garlic Pasta =====
    {
        name: "Creamy Garlic Pasta",
        desc: "Rich and creamy pasta with garlic and parmesan cheese",
        image: "img/recipe3.jpg" ,
        prepTime: "10 min",
        cookTime: "20 min",
        servings: "2 people",
        rating: "4.8",
        ingredients: [
            "200g pasta",
            "3 cloves garlic, minced",
            "200ml heavy cream",
            "50g parmesan cheese, grated",
            "2 tablespoons butter",
            "Salt and pepper to taste",
            "Fresh parsley, chopped"
        ],
        instructions: [
            "Cook pasta according to package directions. Drain and set aside.",
            "In a large pan, melt butter and sauté garlic until fragrant.",
            "Add heavy cream and bring to a simmer.",
            "Add parmesan cheese and stir until melted.",
            "Add cooked pasta and toss to coat.",
            "Season with salt and pepper. Garnish with parsley."
        ],
        nutrition: {
            calories: "650 kcal",
            protein: "20g",
            carbs: "70g",
            fat: "30g",
            fiber: "3g",
            sodium: "600mg"
        },
        tips: [
            "Reserve some pasta water to thin the sauce if needed",
            "Use fresh parmesan for best flavor",
            "Add grilled chicken for extra protein",
            "Don't overcook the pasta"
        ]
    },

 // ===== 4. Chicken Shawarma Bowl =====
    {
        name: "Chicken Shawarma Bowl",
        desc: "Spiced chicken with rice, vegetables, and garlic sauce",
        image:  "img/recipe4.jpg" ,
        prepTime: "25 min",
        cookTime: "20 min",
        servings: "3 people",
        rating: "4.9",
        ingredients: [
            "500g chicken thighs, sliced",
            "2 tablespoons shawarma spice",
            "2 cups basmati rice",
            "1 cucumber, diced",
            "2 tomatoes, diced",
            "1 red onion, sliced",
            "Garlic sauce (toum)",
            "Pita bread"
        ],
        instructions: [
            "Marinate chicken with shawarma spice for at least 30 minutes.",
            "Cook rice according to package directions.",
            "Grill or pan-fry chicken until cooked through.",
            "Prepare vegetables and set aside.",
            "Assemble bowls with rice, chicken, and vegetables.",
            "Drizzle with garlic sauce and serve with pita."
        ],
        nutrition: {
            calories: "620 kcal",
            protein: "35g",
            carbs: "65g",
            fat: "22g",
            fiber: "6g",
            sodium: "720mg"
        },
        tips: [
            "Marinate chicken overnight for best flavor",
            "Use chicken thighs for juicier meat",
            "Warm the pita bread before serving",
            "Add pickled turnips for authentic taste"
        ]
    },

// ===== 5. Beef Stir Fry =====
    {
        name: "Beef Stir Fry",
        desc: "Quick and flavorful beef stir fry with vegetables",
        image: "img/recipe5.jpg" ,
        prepTime: "15 min",
        cookTime: "15 min",
        servings: "4 people",
        rating: "4.6",
        ingredients: [
            "500g beef sirloin, sliced thin",
            "2 bell peppers, sliced",
            "1 broccoli head, cut into florets",
            "1 carrot, julienned",
            "3 tablespoons soy sauce",
            "1 tablespoon oyster sauce",
            "1 tablespoon cornstarch",
            "2 cloves garlic, minced",
            "1 tablespoon ginger, grated"
        ],
        instructions: [
            "Toss beef with cornstarch and soy sauce. Let sit for 10 minutes.",
            "Heat wok over high heat. Add oil and cook beef until browned. Remove.",
            "Add garlic and ginger, cook for 30 seconds.",
            "Add vegetables and stir fry for 3-4 minutes.",
            "Return beef to wok. Add oyster sauce and mix well.",
            "Serve hot with rice or noodles."
        ],
        nutrition: {
            calories: "450 kcal",
            protein: "38g",
            carbs: "20g",
            fat: "25g",
            fiber: "5g",
            sodium: "900mg"
        },
        tips: [
            "Slice beef against the grain for tenderness",
            "Don't overcrowd the wok",
            "Add vegetables in order of cooking time",
            "Serve immediately for best texture"
        ]
    },

     // ===== 6. Salmon Teriyaki =====
    {
        name: "Salmon Teriyaki",
        desc: "Glazed salmon with homemade teriyaki sauce",
        image: "img/recipe6.jpg" ,
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "2 people",
        rating: "4.9",
        ingredients: [
            "2 salmon fillets",
            "1/4 cup soy sauce",
            "2 tablespoons mirin",
            "1 tablespoon honey",
            "1 teaspoon ginger, grated",
            "1 clove garlic, minced",
            "1 tablespoon sesame seeds",
            "Green onions, sliced"
        ],
        instructions: [
            "Mix soy sauce, mirin, honey, ginger, and garlic in a bowl.",
            "Heat a pan over medium heat. Add salmon skin-side down.",
            "Cook for 4-5 minutes, then flip.",
            "Pour teriyaki sauce over salmon.",
            "Cook until sauce thickens and salmon is cooked through.",
            "Garnish with sesame seeds and green onions. Serve with rice."
        ],
        nutrition: {
            calories: "380 kcal",
            protein: "35g",
            carbs: "15g",
            fat: "20g",
            fiber: "1g",
            sodium: "850mg"
        },
        tips: [
            "Use fresh salmon for best results",
            "Don't overcook salmon - it should be flaky",
            "Make extra sauce for drizzling",
            "Serve with steamed broccoli"
        ]
    },

    
    // ===== 7. Vegetarian Chili =====
    {
        name: "Vegetarian Chili",
        desc: "Hearty chili with beans, vegetables, and spices",
        image: "img/recipe7.jpg" ,
        prepTime: "15 min",
        cookTime: "40 min",
        servings: "6 people",
        rating: "4.7",
        ingredients: [
            "1 can kidney beans",
            "1 can black beans",
            "1 can diced tomatoes",
            "1 onion, diced",
            "2 bell peppers, diced",
            "3 cloves garlic, minced",
            "2 tablespoons chili powder",
            "1 tablespoon cumin",
            "1 cup vegetable broth"
        ],
        instructions: [
            "Heat oil in a large pot. Sauté onion and peppers until soft.",
            "Add garlic and cook for 1 minute.",
            "Add chili powder and cumin. Stir for 30 seconds.",
            "Add beans, tomatoes, and broth. Bring to a boil.",
            "Reduce heat and simmer for 30 minutes.",
            "Serve with rice, sour cream, or cheese."
        ],
        nutrition: {
            calories: "320 kcal",
            protein: "15g",
            carbs: "50g",
            fat: "5g",
            fiber: "15g",
            sodium: "700mg"
        },
        tips: [
            "Use dried beans for better texture",
            "Add cocoa powder for depth of flavor",
            "Top with avocado and cilantro",
            "Freezes well for up to 3 months"
        ]
    },

     // ===== 8. Chicken Alfredo =====
    {
        name: "Chicken Alfredo",
        desc: "Creamy pasta with grilled chicken and parmesan",
        image:  "img/recipe8.jpg" ,
        prepTime: "15 min",
        cookTime: "25 min",
        servings: "4 people",
        rating: "4.8",
        ingredients: [
            "300g fettuccine pasta",
            "2 chicken breasts, grilled",
            "200ml heavy cream",
            "100g parmesan cheese, grated",
            "3 tablespoons butter",
            "2 cloves garlic, minced",
            "Salt and pepper to taste",
            "Fresh parsley, chopped"
        ],
        instructions: [
            "Cook pasta according to package directions. Drain.",
            "In a pan, melt butter and sauté garlic.",
            "Add heavy cream and bring to a simmer.",
            "Add parmesan and stir until melted.",
            "Add pasta and toss to coat.",
            "Top with sliced grilled chicken and parsley."
        ],
        nutrition: {
            calories: "720 kcal",
            protein: "40g",
            carbs: "60g",
            fat: "35g",
            fiber: "3g",
            sodium: "780mg"
        },
        tips: [
            "Grill chicken with Italian seasoning",
            "Add a pinch of nutmeg to the sauce",
            "Reserve pasta water to adjust consistency",
            "Use fresh parmesan for best flavor"
        ]
    },

    // ===== 9. Shrimp Fried Rice =====
    {
        name: "Shrimp Fried Rice",
        desc: "Quick and tasty fried rice with shrimp and vegetables",
        image: "img/recipe9.jpg" ,
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "3 people",
        rating: "4.6",
        ingredients: [
            "3 cups cooked rice (day-old)",
            "300g shrimp, peeled",
            "2 eggs, beaten",
            "1 cup peas and carrots",
            "3 green onions, sliced",
            "3 tablespoons soy sauce",
            "1 tablespoon sesame oil",
            "2 cloves garlic, minced"
        ],
        instructions: [
            "Heat wok over high heat. Scramble eggs and set aside.",
            "Add oil and cook shrimp until pink. Remove.",
            "Add garlic and vegetables. Stir fry for 2 minutes.",
            "Add rice and soy sauce. Stir fry for 3-4 minutes.",
            "Return shrimp and eggs. Mix well.",
            "Drizzle with sesame oil and garnish with green onions."
        ],
        nutrition: {
            calories: "450 kcal",
            protein: "28g",
            carbs: "55g",
            fat: "12g",
            fiber: "4g",
            sodium: "950mg"
        },
        tips: [
            "Use day-old rice for best texture",
            "Don't overcook shrimp",
            "Add chili oil for spice",
            "Cook on high heat for authentic flavor"
        ]
    },

     // ===== 10. Mushroom Risotto =====
    {
        name: "Mushroom Risotto",
        desc: "Creamy Italian rice dish with mushrooms and parmesan",
        image:  "img/recipe10.jpg",
        prepTime: "15 min",
        cookTime: "35 min",
        servings: "4 people",
        rating: "4.7",
        ingredients: [
            "1.5 cups arborio rice",
            "400g mushrooms, sliced",
            "1 onion, diced",
            "4 cups vegetable broth",
            "1/2 cup white wine",
            "50g parmesan cheese, grated",
            "3 tablespoons butter",
            "2 cloves garlic, minced"
        ],
        instructions: [
            "Heat broth in a saucepan and keep warm.",
            "Sauté mushrooms in butter until golden. Set aside.",
            "Sauté onion and garlic until soft.",
            "Add rice and toast for 2 minutes.",
            "Add wine and stir until absorbed.",
            "Add broth one ladle at a time, stirring until absorbed.",
            "Stir in mushrooms and parmesan. Serve hot."
        ],
        nutrition: {
            calories: "520 kcal",
            protein: "15g",
            carbs: "70g",
            fat: "18g",
            fiber: "4g",
            sodium: "680mg"
        },
        tips: [
            "Stir constantly for creamy texture",
            "Keep broth warm to maintain cooking temperature",
            "Use a mix of mushroom varieties",
            "Add parmesan at the end for best flavor"
        ]
    }


];


function displayRecipe(recipe) {

   
    document.getElementById("recipeImage").src = recipe.image;

    
    document.getElementById("recipeRating").innerHTML = recipe.rating;

    
    document.getElementById("prepTime").innerHTML = recipe.prepTime;
    document.getElementById("cookTime").innerHTML = recipe.cookTime;
    document.getElementById("servings").innerHTML = recipe.servings;

   
    document.getElementById("recipeTitle").innerHTML = recipe.name;
    document.getElementById("recipeDesc").innerHTML = recipe.desc;

    
    var ingredientsBox = document.getElementById("ingredientsBox");
    ingredientsBox.innerHTML = "";
    for (var i = 0; i < recipe.ingredients.length; i++) {
        ingredientsBox.innerHTML +=
            '<div class="ingredient-item">' +
                '<span class="ingredient-num">' + (i + 1) + '</span>' +
                '<span>' + recipe.ingredients[i] + '</span>' +
            '</div>';
    }

    
    var instructionsList = document.getElementById("instructionsList");
    instructionsList.innerHTML = "";
    for (var i = 0; i < recipe.instructions.length; i++) {
        instructionsList.innerHTML +=
            '<div class="instruction-step">' +
                '<div class="step-number">' + (i + 1) + '</div>' +
                '<div class="step-text">' + recipe.instructions[i] + '</div>' +
            '</div>';
    }

    
    document.getElementById("calories").innerHTML = recipe.nutrition.calories;
    document.getElementById("protein").innerHTML = recipe.nutrition.protein;
    document.getElementById("carbs").innerHTML = recipe.nutrition.carbs;
    document.getElementById("fat").innerHTML = recipe.nutrition.fat;
    document.getElementById("fiber").innerHTML = recipe.nutrition.fiber;
    document.getElementById("sodium").innerHTML = recipe.nutrition.sodium;

    
    var tipsList = document.getElementById("tipsList");
    tipsList.innerHTML = "";
    for (var i = 0; i < recipe.tips.length; i++) {
        tipsList.innerHTML +=
            '<div class="tip-item">' +
                '<i class="fa-solid fa-circle-check tip-icon"></i>' +
                '<span class="tip-text">' + recipe.tips[i] + '</span>' +
            '</div>';
    }
}





function tryAnotherRecipe() {
    var randomIndex = Math.floor(Math.random() * recipes.length);
    var randomRecipe = recipes[randomIndex];
    displayRecipe(randomRecipe);
}











