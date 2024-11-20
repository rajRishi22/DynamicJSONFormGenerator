// import React, { useState } from 'react';
// import JSONEditor from './components/JSONEditor';
// import FormGenerator from './components/FormGenerator';
// import './styles/index.css';

// const App: React.FC = () => {
//   const [schema, setSchema] = useState<any>(null);
//   const [error, setError] = useState<string | null>(null);

//   const handleSchemaChange = (newSchema: string) => {
//     try {
//       const parsed = JSON.parse(newSchema);
//       setSchema(parsed);
//       setError(null);
//     } catch (err) {
//       setError('Invalid JSON format');
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row bg-orange-100">
//       <div className="lg:w-1/2 p-4">
//         <JSONEditor onSchemaChange={handleSchemaChange} error={error} />
//       </div>
//       <div className="lg:w-1/2 p-4">
//         <FormGenerator schema={schema} />
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import JSONEditor from './components/JSONEditor';
import FormGenerator from './components/FormGenerator';
import './styles/index.css';

const App: React.FC = () => {
  const [schema, setSchema] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

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
    <div className={`min-h-screen flex flex-col lg:flex-row ${darkMode ? 'dark' : 'bg-orange-100'}`}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          borderRadius: '0.5rem',
        }}
      >
        JSON Form {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      <div className="lg:w-1/2 p-4">
        {/* Pass darkMode state as a prop to JSONEditor */}
        <JSONEditor onSchemaChange={handleSchemaChange} error={error} darkMode={darkMode} />
      </div>
      <div className="lg:w-1/2 p-4">
        {/* Pass darkMode state as a prop to FormGenerator */}
        <FormGenerator schema={schema} darkMode={darkMode} />
      </div>

      {/* Dark Mode Toggle Button */}
      
    </div>
  );
};

export default App;

