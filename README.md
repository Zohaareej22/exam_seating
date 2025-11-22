Exam Seating Management System
Project Overview

The Exam Seating Management System (ESMS) is a web-based application designed to manage exam seating arrangements, student data, departments, and room allocations. The system allows administrators to manage seating plans, students, departments, and rooms efficiently while generating and exporting seating plans in various formats such as CSV and PDF.

Technologies Used

Frontend: HTML, CSS, JavaScript

Backend: Node.js with Express.js

Database: MySQL (with Prisma ORM)

PDF Generation: pdfkit for generating PDF reports

API: RESTful APIs to handle CRUD operations

Features

Dashboard:

Displays total student count and department count.

Shows recent activities such as new seating plans created and student data imports.

Seating Plan Management:

Generate seating plans for exams based on room availability and student preferences.

Auto allocate seats to students ensuring no conflicts in seating arrangements (e.g., no students from the same department seated next to each other).

Student and Department Management:

CRUD operations for managing students and departments (Add, Edit, Delete).

Add and manage student details (roll number, name, department, and seating preferences).

Room Management:

Manage room capacities and room configurations for exams.

Export Functionality:

Export seating plans and student data as CSV or PDF for easy sharing and printing.

User Management:

Admins can manage the platform, create and update student records, department details, and seating plans.

Installation Instructions
Prerequisites

Node.js installed on your system.

MySQL server running.

Access to a terminal or command prompt.

Steps to Install

Clone the repository:

git clone https://github.com/yourusername/exam-seating-management.git


Navigate to the project directory:

cd exam-seating-management


Install Dependencies:

For the backend, install required npm packages:

npm install


Setup MySQL Database:

Create a MySQL database:

CREATE DATABASE exam_seating;


Set up tables in MySQL. You can find the SQL script for table creation in the database/schema.sql file.

Configure Environment Variables:

Create a .env file in the root directory and add your MySQL connection details:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=exam_seating


Run the Application:

Start the Node.js server:

npm start


The server should now be running at http://localhost:3000.

API Endpoints

Here are the main API endpoints for your application:

Students API

GET /api/students: Fetch all students.

POST /api/students: Add a new student.

PUT /api/students/:id: Update student details.

DELETE /api/students/:id: Delete a student.

Departments API

GET /api/departments: Fetch all departments.

POST /api/departments: Add a new department.

PUT /api/departments/:id: Update department details.

DELETE /api/departments/:id: Delete a department.

Rooms API

GET /api/rooms: Fetch all rooms.

POST /api/rooms: Add a new room.

PUT /api/rooms/:id: Update room details.

DELETE /api/rooms/:id: Delete a room.

Seating Plan API

GET /api/seating-plan: Generate a seating plan.

POST /api/seating-plan: Create a new seating plan.

GET /api/export/:type: Export data in the requested format (CSV or PDF).

Frontend Structure

The frontend is built using HTML, CSS, and JavaScript:

HTML: Structuring the pages (dashboard, departments, students, rooms, seating plans).

CSS: Styling the pages for a clean and modern look.

JavaScript: Fetching and displaying data from the backend, handling form submissions, and interactions with the user.

The application is structured to use a sidebar for navigation, with sections like Dashboard, Departments, Students, Rooms, and Seating Plans. Each page has a table for displaying relevant data, and modals for adding and editing records.

Usage

Admin Panel: Admin users can manage departments, students, rooms, and seating plans through the intuitive web interface.

Seating Plan Generation: Admins can generate seating arrangements based on student data and room configurations. The system ensures no seating conflicts (adjacency violations).

Export Options: The system allows users to export seating plans and other data into CSV and PDF formats for external use or printing.

Future Improvements

User Authentication: Implement login and authentication for admins and other users.

Seating Plan Customization: Allow more customization options for seating plans (e.g., seat preferences, grouping of students).

Mobile Responsiveness: Improve the layout for mobile devices.

Advanced Reporting: Add detailed reports for students, departments, and seating plans.
