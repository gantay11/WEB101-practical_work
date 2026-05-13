
##  Documentation

In this project, I used different concepts to build a file upload system:

### Multipart Form Data
- Used FormData to send files from frontend to backend  
- Important for uploading files  

### File Validation
- Checked file type (like image, pdf)  
- Checked file size before uploading  
- Prevented wrong files  

### API Integration
- Created API route in Next.js  
- Used Axios to send file to server  

### Upload Progress
- Displayed upload percentage  
- Used Axios `onUploadProgress`  

### Drag and Drop
- Used react-dropzone  
- Made UI easy to use  

## Reflection

### What I Learned
- How file upload works in web applications  
- How to send files using FormData  
- How to validate files before upload  
- How to create API routes in Next.js  
- How to track upload progress  
- How to improve UI using drag-and-drop  

### Challenges Faced

#### 1. File Not Uploading
- Problem: File was not reaching backend  

## Solution:
- Fixed FormData usage  
- Checked API route code  

#### 2. Validation Not Working
- Problem: Wrong files were accepted  

## Solution:
- Added conditions for file type and size  

#### 3. Progress Bar Not Showing
- Problem: Upload progress not visible  

## Solution:
- Used Axios `onUploadProgress` correctly  

#### 4. Drag and Drop Issue
- Problem: File not detected when dropped  

Solution:
- Configured react-dropzone properly  

### Overall Reflection
This project helped me understand file uploading in a simple way. I learned how frontend and backend work together. I also improved my JavaScript and problem-solving skills. It was a useful and practical learning experience.