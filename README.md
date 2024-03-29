# 👞 ShoeStore - An eCommerce Platform (Backend)

## 📚 Table of Contents

- [Description](#-description)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Setup and Installation](#-setup-and-installation)
- [Cloudinary Setup](#️-cloudinary-setup)

## 📖 Description

The ShoeStore eCommerce Platform Backend, powered by Strapi, serves as the robust foundation that drives the entire online shopping experience. This backend system is responsible for managing and organizing all the crucial data and operations like product management, user authentication and authorization, order processing and secure payment transactions that make ShoeStore a seamless and efficient platform for users, administrators, and developers alike.

## 🔆 Features

**`Product Management:`**
- The backend enables administrators to effortlessly manage the product catalog. This includes adding new products, updating existing ones, and categorizing items for easy navigation.

**`User Authentication and Authorization:`**
- The backend handles user authentication, allowing customers to create accounts, log in securely, and access personalized features like order history and user profiles.

**`Order Processing:`**
- The backend ensures seamless order processing, including secure payment transactions. It accurately manages inventory levels, tracks orders, and securely handles payment information to provide customers with a reliable shopping experience.

**`API Integration:`**
- It provides a comprehensive set of APIs that the frontend relies on to fetch product details, process orders, and handle user interactions.

## 💻 Technology Stack

- **Headless CMS:** Strapi
- **Database:** PostgreSQL
- **Image Management:** Cloudinary

## 🚀 Setup and Installation

Follow these steps to set up the ShoeStore backend on your local machine:

### 1. `Clone the Repository:`

```
https://github.com/Mohosin999/ShoeStore-eCommerce-Project-Backend.git
```

### 2. `Navigate to the Project Directory:`

Go to your project directory that your already created.

```
cd your-repo
```

### 3. `Install Dependencies:`

Install all dependencies by typing this in your terminal.

```
yarn
```

### 4. `Configure Environment Variables:`

Create a `.env` file in the root directory and set the following variables:

```
HOST=0.0.0.0
PORT=1337
APP_KEYS=<your app keys>
API_TOKEN_SALT=<your api token salt>
ADMIN_JWT_SECRET=<your admin jwt secret>
TRANSFER_TOKEN_SALT=<your transfer token salt>
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=<your db name>
DATABASE_USERNAME=<your db username>
DATABASE_PASSWORD=<your db password>
DATABASE_SCHEMA=public
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=<your jwt secret>
CLOUDINARY_NAME=<your cloudinary name>
CLOUDINARY_KEY=<your cloudinary key>
CLOUDINARY_SECRET=<your cloudinary secret>
```

### 5. `Configure Database Name and Password ( that you created inside pgAdmin after installing postgreSQL ) :`

Go to your strapi code's `config/database.js` file and add this:

```
database: env("DATABASE_NAME", "<your created database name>"),
user: env("DATABASE_USERNAME", "postgres"),
password: env("DATABASE_PASSWORD", "<your created password>"),
```

### 6. `Start the Server:`

```
yarn develop
```

### 7. `Access the Application:`

Open your browser and visit [http://localhost:1337](http://localhost:1337).

### 8. `Prerequisites:`

Make sure you have the following prerequisites installed:

- **Node.js:** Download and install Node.js from [nodejs.org](https://nodejs.org/en).
- **PostgreSQL:** Set up a PostgreSQL database and obtain the connection string.
- **Cloudinary Account:** Sign up for a Cloudinary account to manage images.

## 🌧️ Cloudinary Setup

### `Set Up Cloudinary Account:`

- If you haven't already, sign up for a Cloudinary account.
- Retrieve your Cloudinary API credentials, including your `cloud_name`, `api_key`, and `api_secret`.

### `Install and Configure the Cloudinary Plugin in Strapi:`

- To install Cloudinary, copy the below code and paste in your terminal.

```
yarn add @strapi/provider-upload-cloudinary
```

### `Configure the plugin in "config/plugins.js" Add your Cloudinary credentials`

If this `plugins.js` file doesn't exist, create it inside `config` directory.

```
module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});
```

### `Add This Indside Environment Variables:`

- In your project's `.env` file, add your Cloudinary credentials.

```
CLOUDINARY_NAME=<your cloudinary name>
CLOUDINARY_KEY=<your cloudinary key>
CLOUDINARY_SECRET=<your cloudinary secret>
```
