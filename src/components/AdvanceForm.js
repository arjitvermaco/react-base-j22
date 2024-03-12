import React, { useState } from "react";

export default function AdvanceForm() {
    const [formData,setFormData] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    //state to handle errors
    const [errors,setErrors] = useState({})

    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData({...formData,[name]:value});
        console.log(formData)
    }

  return (
    <div>
      <form className="max-w-md mx-auto">
        <div className="mb-5 w-full">
          <label
            for="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Full Name
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="formInput"
            placeholder="John Doe"
            onChange={handleChange}
          />
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
            className="formInput"
            placeholder="name@flowbite.com"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="mb-5 w-full">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
           Password
          </label>
          <input
            type="password"
            id="password"
            className="formInput"
            placeholder=""
            onChange={handleChange}
            name="password"
          />
        </div>
        <div className="mb-5">
          <label
            for="confirmPassword"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <input type="password" id="confirmPassword"  onChange={handleChange} name="confirmPassword" className="formInput" />
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
