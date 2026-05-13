
#  **Reflection.md 
# Reflection - Practical 4

## 📘 Documentation

In this practical, I implemented the integration of a frontend and backend system using modern web technologies. The frontend was developed using Next.js, while the backend was built using Express.js. The connection between them was established using Axios for API communication.

One of the key concepts applied was JWT-based authentication. This involved generating tokens on the backend and storing them securely on the frontend. These tokens were then attached to API requests using Axios interceptors to ensure secure communication.

React Context API was used to manage authentication state globally. This allowed different components to access user data and authentication status without prop drilling.

I also implemented a modular structure by separating API calls into service files such as `videoService.js` and `userService.js`. This improved code readability and maintainability.

Dynamic routing in Next.js was used to create user profile pages, and various UI components were developed to handle user interactions such as liking videos, commenting, and following users.

## Reflection

This practical significantly improved my understanding of full-stack web development. I learned how frontend and backend systems communicate using APIs and how authentication plays a critical role in securing applications.

One of the major challenges I faced was managing authentication state. Initially, the application did not update properly after login or logout. I resolved this by correctly implementing React Context and ensuring state updates triggered re-rendering of components.

Another challenge was handling API errors and debugging issues related to incorrect API endpoints and missing tokens. I overcame this by using console logs, checking network requests in the browser developer tools, and verifying environment variable configurations.

I also faced difficulty in organizing the project structure, especially when dealing with multiple components and services. Creating separate service files helped me structure the project better and made the code more readable.

Testing the application was also challenging, particularly when verifying features like following users and personalized feeds. I created multiple user accounts to simulate real-world scenarios and ensure that the system worked correctly.

Overall, this practical enhanced my skills in API integration, authentication, and debugging. It also gave me practical experience in building scalable and interactive web applications. I now have a better understanding of how modern web applications are developed and secured.

# Reflection - Practical 5: Infinite Scroll with TanStack Query

## What I Learned

### Technical Skills
In this practical, I learned how to implement infinite scrolling in a 
real-world application. I gained a good understanding of cursor-based 
pagination and how it differs from offset-based pagination. I also learned 
how to use TanStack Query's `useInfiniteQuery` hook to manage multiple pages 
of data efficiently.

### Intersection Observer API
I learned how to use the Intersection Observer API to detect when an element 
enters the viewport. This was a new concept for me and I found it very useful 
compared to traditional scroll event listeners. It is more performant and 
easier to implement.

### Debugging Skills
During this practical, I encountered several bugs and learned how to debug 
them effectively using the browser's Developer Tools, particularly the Network 
tab and Console tab. This helped me identify issues like wrong response 
structure, duplicate functions, and incorrect cursor handling.

## Challenges Faced

### 1. Wrong Response Structure
The biggest challenge was that the backend returned the cursor inside a 
`pagination` object, but the frontend was looking for it at the top level. 
This caused infinite scroll to never trigger. I fixed it by changing 
`lastPage?.nextCursor` to `lastPage?.pagination?.nextCursor` in the 
`getNextPageParam` function.

### 2. Duplicate getAllVideos Function
I accidentally added a duplicate `getAllVideos` function inside the 
`getVideoComments` function in the backend. This caused confusion and 
took time to identify and remove.

### 3. useIntersectionObserver Infinite Loop
The `useIntersectionObserver` hook was causing infinite re-renders because 
the `options` object was being recreated on every render and was included 
in the `useEffect` dependency array. I fixed this by moving the options 
object inside the `useEffect` and removing it from the dependencies.

### 4. Fake Video URLs in Seed Data
The seed data was using fake `example.com` URLs for videos, which caused 
all videos to show "Video unavailable". I fixed this by updating the seed 
file to use real sample video URLs.

### 5. Foreign Key Constraint Error
When re-seeding the database, the video creation was failing because it was 
using hardcoded user IDs (1-10) instead of the actual IDs returned by 
Prisma after creating users. I fixed this by using `users[i].id` instead 
of hardcoded numbers.

## What Went Well
- The overall structure of the infinite scroll implementation was clear
- TanStack Query made it easy to manage loading and error states
- The Intersection Observer API worked reliably once the bug was fixed
- The backend cursor-based pagination logic was straightforward to implement

## What I Would Do Differently
- Test the API response structure before writing frontend code
- Add console logs earlier in the debugging process
- Read the TanStack Query documentation more carefully before starting
- Use Prisma Studio to verify seed data before running the frontend

## Conclusion
Overall, this practical was a valuable learning experience. I now have a 
good understanding of how infinite scroll works in real-world applications 
and how to implement it using modern tools like TanStack Query and the 
Intersection Observer API. The debugging process also taught me important 
skills in using browser developer tools to identify and fix issues.