## overview
This project is a simple TikTok-style web interface built using Next.js and Tailwind CSS. The application demonstrates creating a modern web layout with navigation, video feed components, and user authentication forms.

Step 1: Navigate to Project Directory

Open the terminal and navigate to your GitHub project folder.
        #bash
     cd your-project-folder

Step 2: Create a New Next.js Project

Run the following command:
    #bash
    npx create-next-app@latest

Configure the project with these options:

TypeScript → No
ESLint → Yes
Tailwind CSS → Yes
src directory → Yes
App Router → Yes
Import alias → No

Step 4: Set Up Project Structure
Create the following folders:

mkdir -p src/components/layout
mkdir -p src/components/ui
mkdir -p src/lib
mkdir -p src/app/profile
mkdir -p src/app/upload
This structure helps organize the project into components, layouts, and pages.

Part 2 – Creating the Web Layout

Objective
Create sidebar navigation
Build the main content layout
Display a video feed
Create reusable video components

Step 1: Install Dependencies using (npm install react-icons)
Step 2: Update Layout Structure using (src/components/layout/MainLayout.jsx)
Step 3: Create Video Card Component (src/components/ui/VideoCard.jsx)
Step 4: Create Video Feed (src/components/ui/VideoFeed.jsx)
This component displays multiple videos similar to TikTok’s For You feed.

Step 5: Update Home Page
src/app/page.js
Display the video feed on the homepage.
Step 6–8: Create Additional Pages:
Page	       File Location
Following     src/app/following/page.jsx
Explore	      src/app/explore/page.jsx
Live	      src/app/live/page.jsx

Step 9: Upload Page
src/app/upload/page.jsx
This page allows users to upload videos.
Step 10: Profile Page
src/app/profile/page.jsx
      The profile page displays:
      User information
      User videos
      Profile layout

Part 3 – Login and Registration Forms
Objectives
Create login page
Create signup page
Implement form validation
Connect forms with navigation

Step 1: Install React Hook Form
npm install react-hook-form

Step 2: Create Login Page
src/app/login/page.jsx
The login form includes:
   Email field
   Password field
   Validation rules
   Example validation:
   Required fields
   Email format
   Minimum password length

Step 3: Create Signup Page:
src/app/signup/page.jsx

Step 4: Update Navigatio

src/components/layout/MainLayout.jsx

Add links for:
Login
Signup
Testing the Application
Run the development server:
npm run dev

## Learning Outcomes

Through this project, I learned:
How to create a Next.js project
How to structure a React application
Creating reusable React components
Designing UI using Tailwind CSS
Implementing form validation using React Hook Form