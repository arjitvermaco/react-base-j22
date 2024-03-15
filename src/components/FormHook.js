import React from "react";
import { useForm } from "react-hook-form";

export const FormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Email is not valid",
            },
          })}
          className="formInput"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must have 8 characters",
            },
          })}
          className="formInput"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};
