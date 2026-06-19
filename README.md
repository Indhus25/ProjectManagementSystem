# Project Management System

## Overview

Project Management System is a full-stack web application developed to manage projects and tasks efficiently. The system allows users to register, log in, create projects, assign tasks, track progress, and monitor project statistics through a dashboard.

## Features

### Authentication

* User Registration
* User Login using JWT Authentication
* Protected Routes

### Project Management

* Create Project
* View Projects
* Update Project
* Delete Project

### Task Management

* Create Task
* View Tasks
* Update Task Status
* Delete Task

### Dashboard

* Total Projects
* Total Tasks
* Completed Tasks
* Pending Tasks
* Projects In Progress

## Tech Stack

### Frontend

* React.js
* Axios

### Backend

* Node.js
* Express.js

### Database

* MySQL
* Sequelize ORM

### Authentication

* JSON Web Token (JWT)

## Project Structure

ProjectManagementSystem

backend/

* controllers
* models
* routes
* middleware
* config

frontend/

* src
* public

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

### Projects

GET /api/projects

POST /api/projects

GET /api/projects/:id

PUT /api/projects/:id

DELETE /api/projects/:id

### Tasks

GET /api/tasks

POST /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id

### Dashboard

GET /api/dashboard

## Database Schema

### Users

* id
* name
* email
* password

### Projects

* id
* project_name
* description
* status
* start_date
* end_date
* user_id

### Tasks

* id
* task_name
* description
* priority
* status
* due_date
* project_id
* user_id

## Installation

### Backend

npm install

npm start

### Frontend

npm install

npm start

## Author

Indhu
Artificial Intelligence and Data Science
Rajalakshmi Institute of Technology
