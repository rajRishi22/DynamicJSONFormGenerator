# Dynamic Form Generator

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technical Stack](#technical-stack)
- [Setup Instructions](#setup-instructions)
- [How It Works](#how-it-works)
- [Example JSON Schema](#example-json-schema)
- [Testing](#testing)
- [Deployment](#deployment)
- [Bonus Features](#bonus-features)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
The Dynamic Form Generator is a React-based application designed to dynamically create forms from a JSON schema. The app provides a split-screen interface where users can define form schemas in a JSON editor on the left, and see a real-time, styled preview of the form on the right. It supports field validations, error messages, and dynamic styling (including dark mode).

##Photos
![image](https://github.com/user-attachments/assets/ead1cec7-da4c-4311-a5ed-38dd3c0c02d3)
![image](https://github.com/user-attachments/assets/1b6e4610-ccf2-4a61-a0e7-d25970a18d9d)


## Features

### Main Interface
- **Split-screen Layout**:
  - **Left Panel**: A JSON editor with:
    - Syntax highlighting
    - Real-time validation
    - Error messages for invalid JSON
  - **Right Panel**: A dynamic form generator that:
    - Updates in real time as JSON is edited
    - Shows responsive form layout
    - Displays proper error states and validation

### Form Features
- **Dynamic Field Types**:
  - Supports text, email, radio buttons, dropdowns, text areas, etc.
  - Handles required fields and custom validation patterns
- **Real-time Validation**:
  - Displays validation errors for required and pattern-based fields
- **Dark Mode**:
  - Easily toggle between light and dark themes
- **Submission**:
  - Simulated submission with a loading state and success message
  - Submitted data is logged to the console
- **Mobile Responsiveness**:
  - On smaller screens, the editor and preview stack vertically.

### Testing
- Tested with Playwright (end-to-end) and Jest (unit tests).

## Technical Stack
- **Frontend Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form
- **Validation**: Zod with @hookform/resolvers
- **Testing Tools**:
  - Playwright for end-to-end tests
  - Jest for unit tests

## Setup Instructions

### Prerequisites
- Node.js (v16 or above)
- npm or yarn

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/dynamic-form-generator.git
    cd dynamic-form-generator
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```
    The app will run at [http://localhost:3000](http://localhost:5173).

4. Run tests:
    ```bash
    npm test
    ```

## How It Works

### JSON Schema Structure
The JSON schema defines the form's structure, including fields, validation rules, and styles.

#### Key Properties:
- `formTitle`: Title of the form
- `formDescription`: Optional description of the form
- `fields`: Array of form field objects
  - **Field Types**: text, email, select, radio, textarea
  - **Validation**: Required fields, patterns, etc.

### Workflow
1. Write a JSON schema in the left panel.
2. See the form preview updated in real-time on the right panel.
3. Fill out the form and submit it.
4. Validate the form's behavior (error messages, loading state, etc.).

## Example JSON Schema
Here’s a sample schema for testing:
```json
{
  "formTitle": "Project Requirements Survey",
  "formDescription": "Please fill out this survey about your project needs",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    },
    {
      "id": "companySize",
      "type": "select",
      "label": "Company Size",
      "required": true,
      "options": [
        { "value": "1-50", "label": "1-50 employees" },
        { "value": "51-200", "label": "51-200 employees" },
        { "value": "201-1000", "label": "201-1000 employees" },
        { "value": "1000+", "label": "1000+ employees" }
      ]
    }
  ]
}
