import React, { useState } from "react";

export default function BasicInputs() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

function handleFormSubmit(event){
    event.preventDefault();

    console.log("User has entered", userEmail, password)
}

  return (
    <div>
      <div className="bg-white shadow-md rounded-md text-black">
        <h4>User Email : {userEmail}</h4>
        <h4>User password : {password}</h4>
      </div>

      <form className="max-w-md mx-auto" onSubmit={handleFormSubmit}>
        <div className="mb-5 w-full">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            className="formInput"
            placeholder="name@flowbite.com"
          />
        </div>
        <div className="mb-5">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="formInput"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(password);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
           Profile Image
          </label>
          <input
            type="file"
            id="password"
            className="formInput"
           
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
