import React, { useState } from "react";
import "./JSONEditor.css";

interface JSONEditorProps {
  onSchemaChange: (schema: string) => void;
  error: string | null;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ onSchemaChange, error }) => {
  const [input, setInput] = useState<string>("{}");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    onSchemaChange(e.target.value);
  };

  return (
    <div className="editor-container">
      <textarea
        className={`editor-textarea ${error ? "error-border" : ""}`}
        value={input}
        onChange={handleChange}
        placeholder="Enter JSON schema here..."
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default JSONEditor;
