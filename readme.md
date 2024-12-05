# React.js Coding Challenge

## Overview
This project is a React application for a coding challenge. The task was to create a simple web app that implements navigation, dynamic routing, and specific components for displaying and filtering content.

---

## Checklist of Completed Tasks

### Navigation Component
- [x] Created a `Navigation` component with three links: "HOME", "MODELER", and "FRAMEWORKS".
- [x] Integrated `react-router` for navigation.
- [x] Routes implemented:
  - `/` renders `HomePage`.
  - `/modeler` renders `ModelerPage`.
  - `/frameworks` renders `FrameworksPage`.

### HomePage Component
- [x] Renders `<h1>Home</h1>`.

### ModelerPage Component
- [x] Renders `<h1>Modeler</h1>`.
- [x] Initializes and renders a BPMN modeler instance using `bpmn-js`.

### FrameworksPage Component
- [x] Renders a search input field.
- [x] Displays a dynamic list of items based on the `items` array.
- [x] Filters the list using a full-text search on `name` and `description` fields.
- [x] Displays all items when the search input is empty.
- [x] Shows a "no results" state when no items match the search term.
- [x] Added highlighting the search term in matching results for an improved user experience.

### Styling
- [x] Used SCSS modules for component styling.
- [x] Implemented responsive designs using SCSS mixins.
- [x] Styled search result highlights with a distinct appearance.

### Testing
- [x] Set up Jest and `@testing-library/react` for unit testing.
- [x] Created unit tests for:
  - `ModelerPage` component.
  - `FrameworksPage` component.
  - `SearchInput` component.
  -  All the reusable components
- [x] Mocked required components and libraries for tests.

### Additional Improvements
- [x] Added utility functions for search term highlighting.
- [x] Configured ESLint and Prettier for code linting and formatting.
- [x] Included style linting using Stylelint.

---

## How to Run the Project

### Prerequisites
- Node.js (v20)
- npm or yarn
---

## Installation Guide

This project is hosted on CodeSandbox. Follow these steps to set up and run the project:

### **Steps to Access the Project**
1. Open the following CodeSandbox link in your browser:
   [React.js Coding Challenge](https://codesandbox.io/p/devbox/reactjs-test-stub-forked-hv3g5t)

### **Steps to Run the Project**
1. Click on the **"Open in New Tab"** button in CodeSandbox to open the live preview.
2. To make changes to the code, use the built-in editor in CodeSandbox.
3. To run tests:
   - Open the terminal in CodeSandbox.
   - Run the following command:
     ```bash
     yarn test
     ```

---`

## Scripts

Below are the scripts included in the `package.json` for local development:

| Script             | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `yarn dev`      | Starts the development server using Vite.                                  |
| `yarn build`    | Builds the production-ready app.                                           |
| `yarn preview`  | Previews the built app using Vite.                                         |
| `yarn lint`     | Runs ESLint to analyze and identify code issues in `src` files.            |
| `yarn lint:fix` | Fixes ESLint issues automatically in `.js`, `.jsx`, `.ts`, `.tsx` files.   |
| `yarn lint:css` | Runs Stylelint to analyze and identify CSS/SCSS issues.                   |
| `yarn format`   | Formats the code using Prettier.                                           |
| `yarn test`     | Runs all unit tests using Jest.                                            |
| `yarn test:watch` | Runs unit tests in watch mode for development.                            |

---

## Project Structure

- **src/index.js**: Entry point of the app.
- **src/components**: Contains reusable components like `Navigation`.
- **src/lib/**: Contains building block components such as `Button` `Card` `Icons` etc.
- **src/pages**: Contains page-level components (`HomePage`, `ModelerPage`, `FrameworksPage`).
- **src/context**: Contains the `SearchContext` for managing global search state.
- **styles/**: Contains `global` SCSS file `typography` and `mixins` for styling.

---

## Notes
- The project uses `vite` for fast builds and development.


---

