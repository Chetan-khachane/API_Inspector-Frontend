# API Inspector – Frontend

## Overview

The frontend of **API Inspector** is built with **React and Tailwind CSS**.

It provides a developer interface for testing APIs, running load tests, and viewing request history.

The goal of the UI is to provide a lightweight API testing experience similar to tools like Postman.

---

## Tech Stack

- React
- Tailwind CSS
- shadcn/ui components
- Fetch API

---

## Project Structure

frontend/
│
├── src
│
├── pages
│   ├── ApiTester.jsx
│   ├── LoadTest.jsx
│   └── History.jsx
│
├── components
│   ├── RequestForm.jsx
│   ├── ResponseViewer.jsx
│   └── MetricsCard.jsx
│
└── api
    └── client.js

---

## Install Dependencies

npm install

---

## Run Development Server

npm run dev

Frontend will run at:

http://localhost:5173

---

## Backend Connection

The frontend communicates with the Flask backend running at:

http://localhost:5000

---

## Features

### API Testing

Allows developers to send API requests.

Inputs:

- URL
- HTTP method
- headers
- request body

Outputs:

- status code
- response body
- headers
- latency
- response size

---

### Load Testing

Simulates multiple concurrent API requests.

Inputs:

- URL
- concurrency
- total requests

Outputs:

- average latency
- minimum latency
- maximum latency
- success rate
- error rate

---

### Request History

Displays previously executed API requests.

Features:

- request log
- view request details
- delete history entries

---

## UX Design Goals

- Simple developer-focused interface
- Clear separation between request input and response output
- Fast workflow for testing APIs
- Lightweight alternative to larger API tools

---

## Future Improvements

- Analytics dashboard
- AI-based performance suggestions
- API collections
- visual charts for load test results
- dark mode

---

## AI Usage

AI tools were used to assist with:

- UI layout planning
- component structuring
- debugging
- generating form components
