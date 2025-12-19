# CRUD Management System

A full-stack **CRUD management system** built with **NestJS** and **Next.js**, designed with a clear separation between **authentication data** and **business data**.  
The system follows a production-style architecture with authentication, authorization, logging, file uploads, and containerized local development.

---

## Overview

This project demonstrates how to build a secure, modular CRUD system with:

- Backend APIs built using **NestJS**
- A **Next.js dashboard** frontend
- **PostgreSQL (Northwind schema)** for business data
- **MongoDB** for users and session management
- **AWS S3** for file uploads
- **Docker Compose** for local reproducibility

The focus is on **backend architecture**, **database design**, and **real-world application structure**.

---

## Tech Stack

### Backend
- **NestJS**
- **PostgreSQL** (Northwind schema)
- **MongoDB** (users & sessions)
- **TypeORM**
- Authentication & Authorization
- Structured logging (middleware, interceptors)

### Frontend
- **Next.js** (dashboard application)
- **React Query** (server-state management)
- **Axios** (API communication)
- **Zod** (schema-based validation)
- **shadcn/ui** (UI components)

### Infrastructure
- **Docker**
- **Docker Compose**
- **AWS S3** (file uploads)

---

## Architecture Overview

- The backend exposes **RESTful APIs** built with NestJS.
- Authentication and authorization are enforced using guards, middleware, and interceptors.
- Business data is stored in PostgreSQL using a relational schema.
- User identity and session data are stored separately in MongoDB.
- The frontend is a protected Next.js dashboard that consumes secured backend APIs.
- Docker Compose is used to run the entire system locally.

---

## Data Storage Design

This project uses **two databases**, each with a clear responsibility.

### MongoDB
- Stores application users
- Persists authentication and session data
- Used for identity-related and flexible user data

### PostgreSQL
- Stores domain and business data
- Used for CRUD operations based on the **Northwind schema**
- Enforces relational integrity and structured queries

This separation allows authentication concerns to evolve independently from core business data.

---



## Authentication & Authorization

- Authentication is handled on the backend using credential-based login
- Authorization rules are enforced using NestJS guards
- Protected API routes require valid authentication context
- Sessions are persisted using MongoDB

---

## File Uploads

- File uploads are handled by the backend
- Uploaded files are stored in **AWS S3**
- Metadata is managed through backend services
---
## Environment Configuration

Both the backend and frontend use **local `.env` files** for configuration.

Each project contains its own `.env` file that must be edited before running
the application.

- The backend `.env` configures databases, authentication, sessions, and external services.
- The frontend `.env` configures the backend API base URL and client-side settings.

Environment files are created locally and are not committed to version control.

---
## Running the Project Locally

This project uses **Docker Compose** to run the required database services.
The backend and frontend applications are run locally on different ports.

---

### Start Database Services

```bash
docker-compose up --build
```
### Installing Dependencies

Install all dependencies for **all workspaces** with a single command:

```bash
yarn install
```
### Run the Frontend 
```bash
cd next
yarn run dev
```
### Run the backend
```bash
cd nest
yarn run start:dev
```
