import React, { useState } from "react";

export default function FormWithValidation() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState({});

  const validateForm =()=>{
    let tempErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^[6-9][0-9]{9}/;
    tempErrors.userName = userName.split(' ').length > 1 ? "": "Enter Full Name"
    tempErrors.phoneNo = phoneRegex.test(phoneNo) ? "":"Invalid Phone Number"
    tempErrors.userEmail = emailRegex.test(userEmail) ? "":"Invalid Email"
    tempErrors.password = password.length > 5 ? "":"Password Must be 5 characters"

    setError(tempErrors)
    return Object.values(tempErrors).every(x => x === "")
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if(validateForm()){
        console.log("Form Submitted SuccessFully")
    }else{
        console.log("Validation Failed", error)
    }

//    console.log("User has entered", userEmail, password);
  }

  return (
    <div>
      {/* <div className="bg-white shadow-md rounded-md text-black">
        <h4>User Email : {userEmail}</h4>
        <h4>User password : {password}</h4>
      </div> */}

      <form className="max-w-md mx-auto" onSubmit={handleFormSubmit}>
        <div className="mb-5 w-full">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Full Name
          </label>
          <input
            type="text"
            id="name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className="formInput"
            placeholder="John Doe"
          />
          {error.userName && <p className="text-red-500">{error.userName}</p>}
        </div>

        <div className="mb-5 w-full">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="text"
            id="email"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            className="formInput"
            placeholder="name@flowbite.com"
          />
          {error.userEmail && <p className="text-red-500">{error.userEmail}</p>}
        </div>

        <div className="mb-5 w-full">
          <label
            for="phoneNo"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNo"
            value={phoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
            className="formInput"
            placeholder=""
          />
          {error.phoneNo && <p className="text-red-500">{error.phoneNo}</p>}

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
          {error.password && <p className="text-red-500">{error.password}</p>}
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
