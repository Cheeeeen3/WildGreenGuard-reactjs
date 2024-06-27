import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";

interface inputFieldProps {
  label: string;
  id: string;
  name: string;
  type: string;
  error?: string;
  // ref: React.LegacyRef<HTMLInputElement>;
  [key: string]: any;
}

const InputField: React.FC<inputFieldProps> = forwardRef(
  (
    { label, id, name, type, error, ...props },
    ref: React.LegacyRef<HTMLInputElement>,
  ) => {
    const { t } = useTranslation();
    return (
      <div className="my-4 flex justify-center sm:ml-10">
        <div className="mx-auto w-11/12 sm:w-full">
          <label htmlFor={label} className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text dark:text-gray-300">
                {label === "email" ? t("emailad") : t("password")}
              </span>
            </div>
            <input
              id={id}
              name={name}
              type={type}
              ref={ref}
              aria-invalid={!!error}
              className={`input input-bordered w-full sm:w-auto ${error ? "input-error" : ""}`}
              {...props}
            />
            <div className="label">
              <span className="label-text-alt text-sm font-semibold text-red-500">
                {{ error } && (
                  <p className="mt-2 text-sm font-semibold text-red-500">
                    {t(error)}
                  </p>
                )}
              </span>
            </div>
          </label>
        </div>
      </div>
    );
  },
);

export default InputField;
