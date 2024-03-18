import React from 'react';

function SearchBar({ searchKeyword, onSearchChange, onSearchSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    onSearchSubmit(); // Call the passed submit function
  };

  // Clear the search input when the clear button is clicked
  const handleClearSearch = () => {
    onSearchChange(''); // Reset searchKeyword state in the parent component to an empty string
  };

  return (
    <div className="flex justify-center p-4">
      <form className="mb-3 xl:w-96 flex items-center" onSubmit={handleSubmit}>
       <div className='relative flex items-center'>
       <input
          type="text" // Use type="text" to control the appearance and behavior of the clear button
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Search for recipes..."
          value={searchKeyword}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchKeyword && (
          <button
            type="button" // Ensure this button doesn't submit the form
            onClick={handleClearSearch}
            className="text-gray-500 absolute right-4   focus:outline-none"
          >
            &#x2715; {/* This is a Unicode character for a multiplication sign (X), used here as a clear icon */}
          </button>
        )}
       </div>
        <button
          type="submit"
          className="px-4 py-1.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded-r shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
