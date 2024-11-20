import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

interface FormGeneratorProps {
  schema: any;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema }) => {
  const { register, handleSubmit, formState } = useForm({
    resolver: schema ? zodResolver(z.object({})) : undefined,
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
    alert('Form submitted successfully!');
  };

  if (!schema) return <p className="text-red-500 text-center">Please provide a valid JSON schema.</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-all duration-300">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-11/12 md:w-2/3 lg:w-1/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        style={{ height: '60vh' }}
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
          {schema.formTitle || 'Form'}
        </h1>
        {schema.fields.map((field: any) => (
          <div key={field.id} className="mb-4">
            <label
              htmlFor={field.id}
              className="block font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              {field.label}
            </label>
            <input
              {...register(field.id, { required: field.required })}
              placeholder={field.placeholder}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 outline-none transition-all"
              id={field.id}
            />
            {formState.errors[field.id] && (
              <p className="text-xs text-red-500 mt-1">
                {formState.errors[field.id]?.message || 'This field is required'}
              </p>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full mt-4 py-2 text-lg font-semibold text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-transform focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormGenerator;
