// import React, { useState } from "react";
// import "./JSONEditor.css";

// interface JSONEditorProps {
//     onSchemaChange: (schema: string) => void;
//     error: string | null;
//     darkMode: boolean; // Pass darkMode state as a prop
// }

// const JSONEditor: React.FC<JSONEditorProps> = ({ onSchemaChange, error, darkMode }) => {
//     const [input, setInput] = useState<string>("{}");

//     const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//         setInput(e.target.value);
//         onSchemaChange(e.target.value);
//     };

//     return (
//         <div className={`editor-container ${darkMode ? "dark" : ""}`}>
//             <textarea
//                 className={`editor-textarea ${error ? "error-border" : ""} ${darkMode ? "dark-textarea" : ""}`}
//                 value={input}
//                 onChange={handleChange}
//                 placeholder="Enter JSON schema here..."
//             />
//             {error && <p className="error-message">{error}</p>}
//         </div>
//     );
// };

// export default JSONEditor;


import React, { useState } from "react";

interface JSONEditorProps {
  onSchemaChange: (schema: string) => void;
  error: string | null;
  darkMode: boolean;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ onSchemaChange, error, darkMode }) => {
  const [input, setInput] = useState<string>("{}");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    onSchemaChange(e.target.value);
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: darkMode ? "#1e293b" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <textarea
        style={{
          flex: 1,
          backgroundColor: darkMode ? "#0f172a" : "#f1f5f9",
          color: darkMode ? "#ffffff" : "#000000",
          border: `1px solid ${darkMode ? "#475569" : "#e2e8f0"}`,
          borderRadius: "5px",
          padding: "10px",
          fontFamily: "monospace",
          fontSize: "14px",
        }}
        value={input}
        onChange={handleChange}
        placeholder="Enter JSON schema here..."
      />
      {error && (
        <p
          style={{
            color: darkMode ? "#f87171" : "#b91c1c",
            marginTop: "10px",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default JSONEditor;
