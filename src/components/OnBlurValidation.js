import React, { useState } from "react";

export default function OnBlurValidation() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    console.log(formData);
  };

  const validateField = (name, value) => {
    let fieldError = {};

    switch (name) {
      case "username":
        if (!value) fieldError.username = "Username is required!";
        break;
      case "email":
        if (!value) fieldError.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value))
          fieldError.email = "Email is invalid";
        break;
      case "password":
        if (!value) fieldError.password = "Password is required";
        else if (value.length < 6)
          fieldError.password = "Password must be of 6 characters";
        break;
      case "confirmPassword":
        if (value !== formData.password)
          fieldError.confirmPassword = "Passwords Dont match!";
        break;
      default:
        break;
    }

    setFormErrors({ ...fieldError });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Process your form

    console.log(formData);
  };

  return (
    <div>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
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
            value={formData.username}
            className="formInput"
            placeholder="John Doe"
            onChange={handleChange}
            onBlur={() => {
              validateField("username", formData.username);
            }}
          />
          {formErrors.username && (
            <p className="text-red-500 text-sm">{formErrors.username}</p>
          )}
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
            value={formData.email}
            placeholder="name@flowbite.com"
            name="email"
            onChange={handleChange}
            onBlur={() => {
              validateField("email", formData.email);
            }}
          />
          {formErrors.email && (
            <p className="text-red-500 text-sm">{formErrors.email}</p>
          )}
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
            value={formData.password}
            placeholder=""
            onChange={handleChange}
            name="password"
            onBlur={() => {
              validateField("password", formData.password);
            }}
          />
          {formErrors.password && (
            <p className="text-red-500 text-sm">{formErrors.password}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            for="confirmPassword"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            className="formInput"
            onBlur={() => {
              validateField("confirmPassword", formData.confirmPassword);
            }}
          />
          {formErrors.confirmPassword && (
            <p className="text-red-500 text-sm">{formErrors.confirmPassword}</p>
          )}
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
