"use client";

import { FunctionComponent } from "react";

interface ActionErrorsProps {
  name: string;
  errors?: {
    [key: string]: string[];
  };
}


const ActionErrors: FunctionComponent<ActionErrorsProps> = ({
  name,
  errors,
}) => {
  return (
    <div id={`${name}Error`} aria-live="polite" aria-atomic="true">
      {errors?.[name] &&
        errors[name].map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
    </div>
  );
};

export default ActionErrors;
