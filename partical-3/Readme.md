# File Upload Implementation (Next.js)

##  Project Overview
This project is a simple file upload application built using Next.js and React. It allows users to upload files from their computer. The system checks file type and size, shows upload progress, and supports drag-and-drop functionality.


##  Objective
The main goal of this project is to:
- Upload files using a web application  
- Handle multipart form data  
- Validate file type and size  
- Show upload progress  
- Implement drag and drop feature  


##  Instructions (Setup & Run)

### Step 1: Create Project
Open terminal and run:
npx create-next-app file-upload
cd file-upload

Step 3: Create Files
Create the following files:
pages/index.js → for frontend (UI)
pages/api/upload.js → for backend (API)
Step 4: Run the Application
npm run dev

## Open browser and go to:
http://localhost:3000

 Features and Solutions
 1. File Upload Form
A form is created using React Hook Form
User can select a file and upload it

 2. File Validation
The system checks:
File type (e.g., only images allowed)
File size (limit applied)
If invalid file is selected, error is shown

3. Upload Progress
Shows how much file is uploaded
Uses Axios to track progress

 4. Drag and Drop Feature
User can drag file into upload area
Implemented using react-dropzone

## Technologies Used
Next.js → Framework
React → Frontend
Axios → API requests
React Hook Form → Form handling
Formidable → File processing
React Dropzone → Drag & drop