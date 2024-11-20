import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import "./FormGenerator.css";

interface FormGeneratorProps {
  schema: any;
  darkMode: boolean;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema }) => {
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const { register, handleSubmit, formState } = useForm({
    resolver: schema ? zodResolver(z.object({})) : undefined,
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    setLoading(true);
    setTimeout(() => {
      console.log(data);
      alert("Form submitted successfully!");
      setLoading(false);
    }, 2000); // Simulates a network request
  };

  if (!schema) {
    return <p className="error-message">Please provide a valid JSON schema.</p>;
  }

  return (
    <div className={`form-container ${darkMode ? "dark" : ""}`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="toggle-dark-mode"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h1 className="form-title">{schema.formTitle || "Form"}</h1>
        {schema.fields.map((field: any) => (
          <div key={field.id} className="form-group">
            <label htmlFor={field.id} className="form-label">
              {field.label}
            </label>
            <input
              {...register(field.id, { required: field.required })}
              id={field.id}
              placeholder={field.placeholder}
              className="form-input"
            />
            {formState.errors[field.id] && (
              <p className="error-message">
                {String(formState.errors[field.id]?.message) || "This field is required"}
              </p>
            )}
          </div>
        ))}

        {/* Submit Button */}
        <button type="submit" disabled={loading} className="submit-button">
          {loading ? (
            <span className="loading-spinner">Submitting...</span>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default FormGenerator;
