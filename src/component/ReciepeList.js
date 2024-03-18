import React, { useEffect, useState } from "react";
import ReciepeCard from "./ReciepeCard";
import SearchBar from "./SearchBar";

export default function ReciepeList() {
  let apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
  let searchUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const [recieps, setReciepes] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleSearchChange = (newSearchKeyword) => {
    setSearchKeyword(newSearchKeyword);
  };

  const handleSearchSubmit = async () => {
    // Implement search logic here, e.g., fetching recipes based on `searchKeyword`
    setError(null);
    setLoading(true);
    console.log("Searching for:", searchKeyword);
    const response = await fetch(searchUrl + searchKeyword);
    const data = await response.json();
    data.meals ? setReciepes(data.meals) : setError("No Recipe Found!!");
    setLoading(false);
  };

  useEffect(() => {
    getRecipeList();
  }, []);

  useEffect(() => {
    if (searchKeyword === "") {
      getRecipeList();
    }
    //UseEffect Cleanup

    return()=>{
        setReciepes([]);
    }
  }, [searchKeyword]);

  async function getRecipeList() {
    setError(null);
    setLoading(true);
    const response = await fetch(apiUrl);
    const data = await response.json();
    data.meals.length > 0
      ? setReciepes(data.meals)
      : setError("No Recipe Found!!");
    setLoading(false);
  }

  

  return (
    <div className="max-w-md mx-auto">
      <SearchBar
        searchKeyword={searchKeyword}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />

      {loading
        ? "Loading...."
        : error
        ?     <p className="text-red-500">{error}</p>
        : recieps.map((recipe) => {
            return <ReciepeCard key={recipe.idMeal} recipe={recipe} />;
          })}
    </div>
  );
}
