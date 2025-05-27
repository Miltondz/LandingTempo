# FocusCube | Landing Page de Temporizador Pomodoro con Soporte Chileno

FocusCube is a landing page for a Pomodoro timer web application specifically tailored for users in Chile, offering local support, a 2-year warranty, and localized manuals. It's designed to enhance productivity for office work and study.

## Features

FocusCube includes the following sections and features:

*   **Navbar:** Easy navigation across the application.
*   **Hero Section:** Engaging introduction to the product.
*   **Features Display:** Highlights key functionalities of the Pomodoro timer.
*   **Benefits Section:** Explains the advantages of using FocusCube.
*   **Pricing Information:** Details on different plans or versions.
*   **User Testimonials:** Feedback from satisfied customers.
*   **FAQ:** Answers to frequently asked questions.
*   **Contact Form:** A way for users to get in touch.
*   **WhatsApp Button:** Quick contact via WhatsApp for support or inquiries.

## Tech Stack

FocusCube is built with the following technologies:

*   **Vite:** A fast build tool and development server.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.

## Customization

This section explains how to modify different parts of the landing page.

### Changing Images

Images used in the landing page are primarily located in the `src/assets/` directory. To change an image, replace the existing file with your new image, ensuring the filename remains the same.

Some images might also be referenced directly within component files located in `src/components/`. If you replace an image in `src/assets/` and don't see the change reflected, you may need to update the image import or path in the relevant component file (e.g., `src/components/Hero.tsx`, `src/components/Features.tsx`).

### Updating Social Media Links

Social media links, icons, and contact details are typically managed within specific components. Look for these in:

*   `src/components/Footer.tsx`: For links and information usually found in the page footer.
*   `src/components/Contact.tsx`: For contact forms or direct contact details.
*   `src/components/WhatsAppButton.tsx`: For the WhatsApp contact button.

Edit these files to update the URLs, text, or icons for your social media profiles.

### Editing Sales Plans (Pricing)

The details of the sales plans, including features, pricing, and descriptions, are displayed by the `Pricing` component. To modify this information:

*   Edit the `src/components/Pricing.tsx` file.
*   You will likely find the plan details structured as an array of objects or similar data structure within this file. Modify this data to reflect your desired plans.

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Runs the app in development mode.
Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in your browser. The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Lints the codebase using ESLint to identify and fix stylistic and code quality issues.

### `npm run preview`

Serves the production build from the `dist` folder locally. This is a good way to check if the production build works correctly before deploying.

## SEO and Localization

Special attention has been given to Search Engine Optimization (SEO) and localization for the Chilean market. This includes:

*   **Meta Tags:** Comprehensive meta tags for title, description, and keywords in `index.html` and dynamically updated via `App.tsx`.
*   **Open Graph & Twitter Cards:** Ensures optimal link previews when sharing on social media.
*   **Schema.org Structured Data:** Provides search engines with detailed product information.
*   **Chilean Focus:** Content, support, warranty, and manuals are tailored for users in Chile.

## Project Structure Overview

A brief look at the key directories in this project:

*   **`public/`**: Contains static assets that are copied directly to the `dist` folder during the build process (e.g., `vite.svg`).
*   **`src/`**: Contains all the source code for the application.
    *   **`src/assets/`**: Static assets like images or fonts that are imported into components.
    *   **`src/components/`**: Reusable React components that make up the user interface (e.g., Navbar, Hero, Features).
    *   **`src/main.tsx`**: The main entry point of the application that renders the root `App` component.
    *   **`src/App.tsx`**: The main application component that defines the overall layout and structure.
    *   **`src/index.css`**: Global styles and Tailwind CSS base styles.
*   **`dist/`**: Contains the production-ready build of the application. This directory is generated by the `npm run build` command.

Key configuration files:

*   **`vite.config.ts`**: Configuration for Vite, including plugins and build settings.
*   **`tailwind.config.js`**: Configuration for Tailwind CSS, allowing customization of the design system.
*   **`tsconfig.json`**: TypeScript compiler options for the project.
*   **`package.json`**: Lists project dependencies, scripts, and metadata.
