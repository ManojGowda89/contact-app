# Contact App

## Overview
The **Contact App** is a full-stack application designed to manage contact information. It features a user-friendly frontend built with React and a robust backend powered by Node.js and Express. The app utilizes MongoDB for database management, with `mb64-connect` simplifying database connectivity and schema validation.

---

## How to Clone and Set Up the Project

1. **Clone the Repository:**
   Open a terminal and run:
   ```bash
   git clone https://github.com/ManojGowda89/contact-app.git
   cd contact-app
   ```

2. **Set Up Frontend:**
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install required packages:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```
   - Access the frontend at `http://localhost:5173`.

3. **Set Up Backend:**
   - Open a new terminal and navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install required packages:
     ```bash
     npm install
     ```
   - Configure the database connection in `index.js`:
     Replace the MongoDB URI in the following line with your connection string:
     ```javascript
     connectDB("your-mongodb-connection-string");
     ```
   - Start the backend server:
     ```bash
     npm run dev
     ```
   - The backend server will run on `http://localhost:3000`.

---

## Frontend Details

### Features
- Display all contacts in a user-friendly interface.
- Add new contacts via a form.
- Update existing contact details.
- Admin page for authentication management.

### Technologies Used
- **React** with **Vite** for rapid development.
- **React Router DOM** for routing.
- **Axios** for API requests.

### Project Structure
The frontend is organized as follows:
- **Main Pages:**
  - **`User.jsx`**: Displays all contacts with options to add and update.
  - **`Create.jsx`**: Form for creating new contacts.
  - **`Update.jsx`**: Form for updating existing contact details.
  - **`Admin.jsx`**: Manages user authentication.

---

## Backend Details

### Features
- Retrieve all contacts or a specific contact by ID.
- Create new contacts.
- Update existing contacts by ID.
- Delete contacts by ID.

### Technologies Used
- **Node.js** and **Express** for server-side handling.
- **MongoDB** for database management.
- **mb64-connect** as a wrapper for MongoDB connections.
- **Cors** for cross-origin resource sharing.

### API Endpoints

| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| `GET`  | `/`                | Retrieve all contacts.          |
| `GET`  | `/getdata/:id`     | Retrieve a contact by ID.       |
| `POST` | `/createuser`      | Create a new contact.           |
| `PUT`  | `/updatedata/:id`  | Update an existing contact.     |
| `DELETE` | `/deletedata/:id` | Delete a contact by ID.         |

### Database Schema
The `contact` collection in MongoDB adheres to the following schema:
```javascript
{
  firstname: String,
  lastname: String,
  email: String,
  phonenumber: String,
  company: String,
  jobtitle: String
}
```

---

## Summary of Steps to Run the App

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ManojGowda89/contact-app.git
   cd contact-app
   ```

2. **Run Frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Run Backend:**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

4. **Access the Application:**
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:3000`

---
