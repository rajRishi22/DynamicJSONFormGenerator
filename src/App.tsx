import React, { useState } from "react";
import JSONEditor from "./components/JSONEditor";
import FormGenerator from "./components/FormGenerator";

const App: React.FC = () => {
  const [schema, setSchema] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleSchemaChange = (newSchema: string) => {
    try {
      const parsed = JSON.parse(newSchema);
      setSchema(parsed);
      setError(null);
    } catch (err) {
      setError("Invalid JSON format");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: darkMode ? "#1e293b" : "#f8fafc",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      {/* Dark mode toggle */}
      <div
        style={{
          padding: "10px",
          textAlign: "center",
          backgroundColor: darkMode ? "#334155" : "#e2e8f0",
        }}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "10px 20px",
            backgroundColor: darkMode ? "#475569" : "#94a3b8",
            color: darkMode ? "#ffffff" : "#000000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Page {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      {/* Split screen or stacked layout */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          flexWrap: "wrap", // Allows stacking
        }}
      >
        {/* Left panel: JSON Editor */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            borderRight: window.innerWidth > 768 ? `1px solid ${darkMode ? "#475569" : "#e2e8f0"}` : "none",
            borderBottom: window.innerWidth <= 768 ? `1px solid ${darkMode ? "#475569" : "#e2e8f0"}` : "none",
            width: window.innerWidth <= 768 ? "100%" : "50%", // Full width for small screens
          }}
        >
          <JSONEditor onSchemaChange={handleSchemaChange} error={error} darkMode={darkMode} />
        </div>

        {/* Right panel: Form Generator */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            width: window.innerWidth <= 768 ? "100%" : "50%", // Full width for small screens
          }}
        >
          <FormGenerator schema={schema} darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default App;
