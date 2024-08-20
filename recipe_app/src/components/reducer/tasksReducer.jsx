/**
 * A reducer is a function that determines changes to an application’s state.
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export function taskReducer(state, action) {
    switch (action.type) {
        case 'search_item':
            return [...state, action.task];
        case 'generate_recipe':
            return state.filter((task) => task.id !== action.id);
        default:
            throw Error('Action not found : '  + action.type);
    }
}

/**
 * Initial items to be displayed or dummy data
 */
export const initialItems = {
    "recipes": [
        {
            "vegetarian": true,
            "vegan": true,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 7,
            "gaps": "no",
            "preparationMinutes": null,
            "cookingMinutes": null,
            "aggregateLikes": 2,
            "healthScore": 39,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 51.1,
            "extendedIngredients": [
                {
                    "id": 2004,
                    "aisle": "Spices and Seasonings",
                    "image": "bay-leaves.jpg",
                    "consistency": "SOLID",
                    "name": "bay leaf",
                    "nameClean": "bay leaves",
                    "original": "1 bay leaf",
                    "originalName": "bay leaf",
                    "amount": 1,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 11215,
                    "aisle": "Produce",
                    "image": "garlic.png",
                    "consistency": "SOLID",
                    "name": "garlic",
                    "nameClean": "garlic",
                    "original": "1 clove garlic, finely chopped",
                    "originalName": "garlic, finely chopped",
                    "amount": 1,
                    "unit": "clove",
                    "meta": [
                        "finely chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "clove",
                            "unitLong": "clove"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "clove",
                            "unitLong": "clove"
                        }
                    }
                },
                {
                    "id": 10316069,
                    "aisle": "Pasta and Rice",
                    "image": "lentils-brown.jpg",
                    "consistency": "SOLID",
                    "name": "lentils",
                    "nameClean": "lentils",
                    "original": "1/2 cup lentils",
                    "originalName": "lentils",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 96,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 4053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "olive oil",
                    "nameClean": "olive oil",
                    "original": "3 tbsp olive oil",
                    "originalName": "olive oil",
                    "amount": 3,
                    "unit": "tbsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 3,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 3,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 11282,
                    "aisle": "Produce",
                    "image": "brown-onion.png",
                    "consistency": "SOLID",
                    "name": "onion",
                    "nameClean": "onion",
                    "original": "1 onion, chopped",
                    "originalName": "onion, chopped",
                    "amount": 1,
                    "unit": "",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 1102047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt-and-pepper.jpg",
                    "consistency": "SOLID",
                    "name": "salt & pepper",
                    "nameClean": "salt and pepper",
                    "original": "Salt & pepper",
                    "originalName": "Salt & pepper",
                    "amount": 3,
                    "unit": "servings",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 3,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 3,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 11529,
                    "aisle": "Produce",
                    "image": "tomato.png",
                    "consistency": "SOLID",
                    "name": "tomato",
                    "nameClean": "tomato",
                    "original": "1 tomato",
                    "originalName": "tomato",
                    "amount": 1,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 2053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "vinegar-(white).jpg",
                    "consistency": "LIQUID",
                    "name": "vinegar",
                    "nameClean": "distilled white vinegar",
                    "original": "1 1/2 tbsp vinegar (or more, to taste)",
                    "originalName": "vinegar (or more, to taste)",
                    "amount": 1.5,
                    "unit": "tbsp",
                    "meta": [
                        "to taste",
                        "(, )"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 1.5,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 14412,
                    "aisle": "Beverages",
                    "image": "water.png",
                    "consistency": "LIQUID",
                    "name": "water",
                    "nameClean": "water",
                    "original": "4 cups water",
                    "originalName": "water",
                    "amount": 4,
                    "unit": "cups",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 4,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 946.352,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                }
            ],
            "id": 660109,
            "title": "Simple lentil soup",
            "readyInMinutes": 180,
            "servings": 3,
            "sourceUrl": "http://www.foodista.com/recipe/L8YNT78S/simple-lentil-soup",
            "image": "https://img.spoonacular.com/recipes/660109-556x370.jpg",
            "imageType": "jpg",
            "summary": "The recipe Simple lentil soup can be made <b>in roughly 3 hours</b>. This recipe serves 3. One portion of this dish contains about <b>9g of protein</b>, <b>14g of fat</b>, and a total of <b>262 calories</b>. For <b>51 cents per serving</b>, this recipe <b>covers 13%</b> of your daily requirements of vitamins and minerals. A mixture of salt & pepper, garlic, tomato, and a handful of other ingredients are all it takes to make this recipe so yummy. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. It is perfect for <b>Autumn</b>. 2 people have tried and liked this recipe. Not a lot of people really liked this hor d'oeuvre. It is brought to you by Foodista. With a spoonacular <b>score of 83%</b>, this dish is great. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/simple-lentil-soup-1435245\">Simple lentil soup</a>, <a href=\"https://spoonacular.com/recipes/simple-lentil-soup-and-also-the-best-858022\">Simple Lentil Soup (and also the best!)</a>, and <a href=\"https://spoonacular.com/recipes/simple-lentil-soup-1260053\">Simple lentil soup</a>.",
            "cuisines": [],
            "dishTypes": [
                "antipasti",
                "soup",
                "starter",
                "snack",
                "appetizer",
                "antipasto",
                "hor d'oeuvre"
            ],
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ],
            "occasions": [
                "fall",
                "winter"
            ],
            "instructions": "<ol><li>Rinse the lentils and let them soak for a couple of hours in lukewarm water before cooking.</li><li>Put all the ingredients together in a saucepan and cook for 45 min to 1 hour over medium heat, until the lentils are cooked.</li><li>If you use a pressure cooker, the soup will be ready in 20 minutes.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Rinse the lentils and let them soak for a couple of hours in lukewarm water before cooking.Put all the ingredients together in a saucepan and cook for 45 min to 1 hour over medium heat, until the lentils are cooked.If you use a pressure cooker, the soup will be ready in 20 minutes.",
                            "ingredients": [
                                {
                                    "id": 10316069,
                                    "name": "lentils",
                                    "localizedName": "lentils",
                                    "image": "lentils-brown.jpg"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                },
                                {
                                    "id": 0,
                                    "name": "soup",
                                    "localizedName": "soup",
                                    "image": ""
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404658,
                                    "name": "pressure cooker",
                                    "localizedName": "pressure cooker",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/pressure-cooker.jpg"
                                },
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg"
                                }
                            ],
                            "length": {
                                "number": 125,
                                "unit": "minutes"
                            }
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularScore": 85.33951568603516,
            "spoonacularSourceUrl": "https://spoonacular.com/simple-lentil-soup-660109"
        }
    ]
}