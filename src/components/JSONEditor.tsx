import React, { useState } from "react";
import "./JSONEditor.css";

interface JSONEditorProps {
    onSchemaChange: (schema: string) => void;
    error: string | null;
    darkMode: boolean; // Pass darkMode state as a prop
}

const JSONEditor: React.FC<JSONEditorProps> = ({ onSchemaChange, error, darkMode }) => {
    const [input, setInput] = useState<string>("{}");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value);
        onSchemaChange(e.target.value);
    };

    return (
        <div className={`editor-container ${darkMode ? "dark" : ""}`}>
            <textarea
                className={`editor-textarea ${error ? "error-border" : ""} ${darkMode ? "dark-textarea" : ""}`}
                value={input}
                onChange={handleChange}
                placeholder="Enter JSON schema here..."
            />
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default JSONEditor;
