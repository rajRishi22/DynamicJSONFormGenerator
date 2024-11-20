import React, { useState } from 'react';
import JSONEditor from './components/JSONEditor';
import FormGenerator from './components/FormGenerator';
import './styles/index.css';

const App: React.FC = () => {
  const [schema, setSchema] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSchemaChange = (newSchema: string) => {
    try {
      const parsed = JSON.parse(newSchema);
      setSchema(parsed);
      setError(null);
    } catch (err) {
      setError('Invalid JSON format');
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      <div className="lg:w-1/2 p-4">
        <JSONEditor onSchemaChange={handleSchemaChange} error={error} />
      </div>
      <div className="lg:w-1/2 p-4">
        <FormGenerator schema={schema} />
      </div>
    </div>
  );
};

export default App;
