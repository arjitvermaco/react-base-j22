import React from "react";

export default function ReciepeCard({ recipe }) {
    const ingredients = [];

    // Dynamically gather ingredients and measurements, ignore if null or empty
    for (let i = 1; i <= 20; i++) {
        if (
            recipe[`strIngredient${i}`] &&
            recipe[`strIngredient${i}`].trim() !== ""
        ) {
            ingredients.push({
                ingredient: recipe[`strIngredient${i}`],
                measure: recipe[`strMeasure${i}`]
                    ? recipe[`strMeasure${i}`]
                    : "To taste",
            });
        }
    }
    return (
        <div>
            <div className="max-w-md mx-auto px-4 py-8">
                <h1 className="text-3xl  font-bold mb-4">{recipe.strMeal}</h1>
                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="w-full rounded-lg shadow-md mb-4"
                />
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
                    <ul className="list-disc list-inside">
                        {ingredients.map((item, index) => (
                            <li key={index} className="ml-4">
                                {item.ingredient} - {item.measure}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
                    <p className="whitespace-pre-line">{recipe.strInstructions}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Details</h2>
                    <p>Category: {recipe.strCategory}</p>
                    <p>Area: {recipe.strArea}</p>

                    <p>Tags: {recipe.strTags}</p>

                    <p>
                        <a
                            href={recipe.strYoutube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Watch on YouTube
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
