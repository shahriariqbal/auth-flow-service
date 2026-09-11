# Simple Auth Flow Service

A minimal authentication flow example — Angular frontend with a Node.js/Express + MongoDB backend.

## 🛠 Tech Stack

Angular · Node.js · Express · MongoDB

## 📁 Project Structure

- `ngApp/` — Angular client
- `server/` — Express API

## 🚀 Setup

1. Install Node.js and the Angular CLI:

   ```bash
   npm install -g @angular/cli
   ```

2. Install dependencies:

   ```bash
   cd server && npm install
   cd ../ngApp && npm install
   ```

3. Start the API server, then start the Angular dev server:

   ```bash
   # terminal 1
   cd server && npm start

   # terminal 2
   cd ngApp && ng serve
   ```

> A running MongoDB instance is required — configure the connection in the server config.

---

Built by [Shahriar Iqbal](https://shahriariqbal.com)
