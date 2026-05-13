# Practical 4: Connecting TikTok Frontend to Backend

## Objective
The objective of this practical is to integrate a Next.js frontend with an Express.js backend to build a fully functional TikTok-like web application. The system includes user authentication, video display, and social interaction features such as following users and liking videos.

## Concepts Applied

### 1. API Integration
Axios was used to connect the frontend with backend APIs. It simplifies HTTP requests and allows centralized configuration.

### 2. JWT Authentication
JSON Web Tokens (JWT) were implemented to handle secure user authentication. Tokens are generated on login and attached to API requests.

### 3. React Context API
Authentication state (user login/logout) was managed globally using React Context, ensuring consistency across components.

### 4. Environment Variables
Environment variables were used to store API URLs securely using `.env.local`.

### 5. Component-Based Architecture
Reusable components such as Modal, VideoCard, and VideoFeed were created for better code organization.

### 6. Service Layer Design
Separate service files (`videoService.js` and `userService.js`) were used to manage API calls, improving maintainability.

## Setup Instructions

### Step 1: Clone Repositories
git clone https://github.com/syangche/TikTok_Frontend.git
git clone https://github.com/syangche/TikTok_Server.git

### Implementation Details
# Step 1: API Client Configuration
    Created api-config.js
    Configured Axios instance
    Added request interceptor to attach JWT token
    Handled API errors globally

# Step 2: Authentication Context
    Created authContext.jsx
    Managed login/logout functionality
    Stored user data and token in local storage
    Provided global authentication state

# Step 3: Authentication UI
    Created reusable Modal component
    Developed login and registration forms
    Implemented validation and error handling
    Displayed success/error notifications

# Step 4: Layout Integration
    Updated main layout to reflect authentication state
    Displayed login/logout buttons dynamically
    Protected certain routes

# Step 5: Video Service
    Created videoService.js
    Implemented functions for:
    Fetching videos
    Liking/unliking videos
    Adding comments
# Step 6: User Service
    Created userService.js
    Implemented:
    Fetch user profiles
    Follow/unfollow users
    Get following list
# Step 7: Video Components
    Updated VideoCard.jsx
    Display video details
    Added interaction buttons
    Updated VideoFeed.jsx
    Fetch videos from API
    Handle loading and error states

# Step 8: Pages Implementation
    Following Page
    Displays videos from followed users
    Handles empty state
    Explore Users Page
    Lists users
    Allows follow/unfollow
    Profile Page
    Dynamic routing using userId
    Displays user videos and info
    Upload Page
    Allows authenticated users to upload videos
    Includes captions and thumbnails

# Testing

The application was tested with multiple scenarios:

Created multiple user accounts
Uploaded videos using different users
Tested follow/unfollow functionality
Verified personalized feed
Tested login/logout functionality
Checked protected routes access
Verified video interactions (like, comment)


# Practical 5: Infinite Scroll with TanStack Query

## Overview
This practical implements infinite scrolling functionality in a TikTok-like application using TanStack Query with cursor-based pagination.

## Features
- Infinite scroll feed for "For You" and "Following" pages
- Cursor-based pagination for efficient data fetching
- Automatic loading of new videos when scrolling to the bottom
- Loading spinner while fetching new content
- "No more videos" message when all content is loaded

## Technologies Used
- **Frontend:** Next.js, TanStack Query, Tailwind CSS
- **Backend:** Node.js, Express.js, Prisma ORM
- **Database:** PostgreSQL (via Supabase)
- **Storage:** Supabase Storage

## Installation
### Frontend Setup
1. Navigate to the frontend directory:
   cd frontend

2. Install dependencies:
   npm install

3. Install TanStack Query:

   npm install @tanstack/react-query @tanstack/react-query-devtools

4. Set up environment variables in `.env.local`

## Project Structure
├── server/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── seed.js
│   └── src/
│       ├── controllers/
│       │   └── videoController.js
│       ├── routes/
│       └── index.js
│
└── frontend/
└── src/
├── app/
│   └── layout.js
├── components/
│   └── ui/
│       ├── VideoFeed.jsx
│       └── VideoCard.jsx
├── hooks/
│   └── useIntersectionObserver.js
└── services/
└── videoService.js

## How Infinite Scroll Works
1. The page loads the first 10 videos
2. A hidden sentinel div sits at the bottom of the feed
3. When the user scrolls down and the sentinel becomes visible, the Intersection Observer fires
4. `fetchNextPage()` is called with the cursor of the last video
5. The backend returns the next set of videos
6. New videos are appended to the existing feed
7. This repeats until there are no more videos

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/videos?cursor=&limit= | Get paginated videos |
| GET | /api/videos/following?cursor=&limit= | Get following feed videos |

## Key Files Changed
- `src/controllers/videoController.js` — Added cursor-based pagination
- `src/app/layout.js` — Added QueryClientProvider
- `src/services/videoService.js` — Updated to send cursor parameter
- `src/hooks/useIntersectionObserver.js` — Created new hook
- `src/components/ui/VideoFeed.jsx` — Updated to use useInfiniteQuery

