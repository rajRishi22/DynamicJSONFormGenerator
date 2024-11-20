// import React, { useState } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import "./FormGenerator.css";

// interface FormGeneratorProps {
//   schema: z.ZodObject<any>;
// }

// const FormGenerator: React.FC<FormGeneratorProps> = ({ schema }) => {
//   const [loading, setLoading] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   const { register, handleSubmit, formState } = useForm({
//     resolver: zodResolver(schema),
//   });

//   const onSubmit: SubmitHandler<any> = (data) => {
//     setLoading(true);
//     setTimeout(() => {
//       console.log(data);
//       alert("Form submitted successfully!");
//       setLoading(false);
//     }, 2000); // Simulates a network request
//   };

//   if (!schema) {
//     return <p className="error-message">Please provide a valid JSON schema.</p>;
//   }

//   return (
//     <div className={`form-container ${darkMode ? "dark" : ""}`}>
//       {/* Dark Mode Toggle */}
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="toggle-dark-mode"
//       >
//         Toggle {darkMode ? "Light" : "Dark"} Mode
//       </button>

//       <form onSubmit={handleSubmit(onSubmit)} className="form">
//         <h1 className="form-title">{schema.formTitle || "Form"}</h1>
//         {schema.fields.map((field: any) => (
//           <div key={field.id} className="form-group">
//             <label htmlFor={field.id} className="form-label">
//               {field.label}
//             </label>
//             <input
//               {...register(field.id, { required: field.required })}
//               id={field.id}
//               placeholder={field.placeholder}
//               className="form-input"
//             />
//             {formState.errors[field.id] && (
//               <p className="error-message">
//                 {formState.errors[field.id]?.message || "This field is required"}
//               </p>
//             )}
//           </div>
//         ))}

//         {/* Submit Button */}
//         <button type="submit" disabled={loading} className="submit-button">
//           {loading ? (
//             <span className="loading-spinner">Submitting...</span>
//           ) : (
//             "Submit"
//           )}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FormGenerator;


import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormGeneratorProps {
  schema: any;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema }) => {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  if (!schema || !Array.isArray(schema.fields)) {
    return <p>Please provide a valid schema with fields.</p>;
  }

  return (
    <form
      className="form-container"
      onSubmit={handleSubmit(onSubmit)}
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        {schema.formTitle || "Form"}
      </h1>
      {schema.fields.map((field: any) => (
        <div key={field.id} style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
            {field.label}
          </label>
          <input
            {...register(field.id, { required: field.required })}
            type={field.type || "text"}
            placeholder={field.placeholder || ""}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          {formState.errors[field.id] && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {formState.errors[field.id].message || "This field is required"}
            </p>
          )}
        </div>
      ))}
      <button
        type="submit"
        style={{
          backgroundColor: "#007BFF",
          color: "#fff",
          padding: "10px 15px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default FormGenerator;
