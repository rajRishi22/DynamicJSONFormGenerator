import React, { useState } from 'react';

interface JSONEditorProps {
  onSchemaChange: (schema: string) => void;
  error: string | null;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ onSchemaChange, error }) => {
  const [input, setInput] = useState<string>('{}');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    onSchemaChange(e.target.value);
  };

  return (
    <div>
      <textarea
        className="w-full h-80 p-4 border rounded-lg bg-gray-50"
        value={input}
        onChange={handleChange}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default JSONEditor;
