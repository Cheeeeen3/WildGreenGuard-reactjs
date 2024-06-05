import React from "react";

interface inputFieldProps {
  label: string,
  id: string,
  name: string,
  type: string,
  error?: string,
  userRef: React.RefObject<HTMLInputElement>,
}

const InputField: React.FC<inputFieldProps> = ({
  label,
  id,
  name,
  type,
  error,
  userRef,
}) => {
  return (
    <div className="flex justify-center my-4">
      <div className="w-11/12 mx-auto sm:w-full">
        <label
          htmlFor={label}
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          {label === "email" ? "Email address" : "Password"}
        </label>
        <div className="mt-2">
          <input
            id={id}
            name={name}
            type={type}
            ref={userRef}
            // required
            aria-invalid="false"
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {{ error } && (
            <p className="text-sm text-red-500 font-semibold mt-2">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputField;
