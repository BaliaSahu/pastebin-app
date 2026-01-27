# Pastebin Application

This is a Pastebin-like web application built using **Spring Boot**, **React.js**, and **MongoDB**.  
The application allows users to create text pastes and share them using a unique URL.  
Each paste can optionally have a **maximum number of views** and a **time-to-live (TTL)** after which it expires automatically.

This project is designed to work correctly in **serverless and cloud environments** using a persistent database.

---

## Features

- Create a paste with text content
- Optional constraints:
  - Maximum number of views (`maxViews`)
  - Time-to-live in seconds (`ttlSeconds`)
- Fetch paste content via API
- View paste content via browser (`/p/:id`)
- Automatic expiry based on TTL or max views
- Proper error handling with HTTP status codes
- Persistent storage using MongoDB

---

## Persistence Layer

- **MongoDB** is used as the persistence layer.
- Data is stored in MongoDB so that it survives across requests and server restarts.
- Each paste stores:
  - Content
  - View count
  - Maximum views
  - Creation timestamp
  - TTL (time-to-live)

MongoDB ensures the application works correctly on cloud/serverless platforms where in-memory storage is not reliable.

---

## Project Structure

pastebin-app/
├── Backend/

│ ├── src/

│ │ ├── main/

│ │ │ ├── java/com/task/

│ │ │ │ ├── controller/ # REST controllers

│ │ │ │ ├── entity/ # MongoDB entities

│ │ │ │ ├── exceptions/ # Custom exception handling

│ │ │ │ ├── repository/ # MongoDB repositories

│ │ │ │ ├── request/ # Request DTOs

│ │ │ │ ├── response/ # Response DTOs

│ │ │ │ ├── service/ # Service interfaces

│ │ │ │ ├── serviceImpl/ # Service implementations

│ │ │ │ └── AssignmentApplication.java

│ │ │ └── resources/

│ │ │ └── application.properties

│ │ ├── test/

│ │ └── target/

│ │ ├── pom.xml

│ │ ├── mvnw

│ │ └── mvnw.cmd

│

├── Frontend/

│ ├── src/

│ │ ├── assets/ # Images and static assets

│ │ ├── components/ # Reusable UI components

│ │ ├── pages/ # Page-level components

│ │ ├── utils/ # API helpers

│ │ ├── App.jsx

│ │ ├── main.jsx

│ │ ├── App.css

│ │ └── index.css

│ ├── public/

│ ├── index.html

│ ├── package.json

│ ├── package-lock.json

│ ├── vite.config.js

│ └── eslint.config.js

│

└── README.md
