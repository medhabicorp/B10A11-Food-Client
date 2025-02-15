# Hero Meals

Hero Meals is a food-sharing platform that connects individuals who want to share excess food with those in need. The platform allows users to donate, request, and manage food efficiently.

# Purpose

The primary goal of Hero Meals is to reduce food waste and ensure that surplus food reaches people who need it the most. The platform provides an intuitive interface for users to browse available meals, add food donations, and track their requests in a secure and private environment.

# Links & Info

**Assignment Category:** assignment_category_07 (Food Sharing Website)

**GitHub Client Link:**[https://github.com/medhabicorp/B10A11-Food-Client]

**GitHub Server Link:** [https://github.com/medhabicorp/B10A11-Food-Server]

**Live Link:** []

🚀 Key Features
✅ User Authentication: Secure login and registration using Firebase authentication.
✅ Food Listings: Browse available foods added by users, complete with details.
✅ Food Donations: Users can add meals they want to donate.
✅ Request Meals: People in need can request food from available listings.
✅ Manage My Foods: Donors can update or delete their food listings.
✅ Private Routes: Secure sections accessible only to logged-in users.
✅ Responsive Design: Fully optimized for mobile devices with a smooth UI.
✅ Real-time Notifications: Instant feedback using React Hot Toast.
✅ Google Login: Quick and easy Google Authentication support.

📂 Folder Structure
bash
Copy
Edit
src/
│── assets/ # Image & animation assets
│── AuthProvider/ # Authentication context provider
│── components/ # UI components (Navbar, Footer, etc.)
│── CustomHooks/ # Custom React hooks
│── Firebase/ # Firebase initialization file
│── Layouts/ # Page layout components
│── Pages/ # Main pages of the application
│── Routes/ # App routes (Protected & Public)
🛠️ Tech Stack

# Frontend

React.js – Component-based UI development
React Router – SPA Navigation
Tailwind CSS & DaisyUI – Responsive & stylish design
Lottie-React – Animations for login/register

# Backend

Node.js & Express.js – API Development
MongoDB (Mongoose) – NoSQL database
Firebase Authentication – Secure login system
CORS Middleware – Handles cross-origin requests
🛠️ Installation & Setup
1️⃣ Clone the repository

# Private Routes

Certain pages like "Add Food", "Manage My Foods", and "Food Details" are protected and require users to be logged in.

# Protected Routes

/addFood
/manageMyFoods
/myFoodRequest
/food/:id
/updateFoods/:id

# NPM Packages Used

react-router-dom – Client-side navigation
firebase – Authentication & database
react-hook-form – Form validation
react-hot-toast – Real-time notifications
tailwindcss & daisyui – Styling framework
axios – API requests

# Contact & Contribution

Name: Md Rezaul Hoq
Email: muradsust3@gmail.com
Facebook: www.facebook.com/medhabi
