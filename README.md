# 👞 ShoeStore - An eCommerce Platform (Backend)

## 📚 Table of Contents

- [Description](#-description)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Deployment](#️-deployment)

## 📖 Description

The ShoeStore eCommerce Platform Backend, powered by Strapi, serves as the robust foundation that drives the entire online shopping experience. This backend system is responsible for managing and organizing all the crucial data and operations like product management, user authentication and authorization, order processing and secure payment transactions that make ShoeStore a seamless and efficient platform for users, administrators, and developers alike.

## 🔆 Features

- **Product Management:** The backend enables administrators to effortlessly manage the product catalog. This includes adding new products, updating existing ones, and categorizing items for easy navigation.

- **User Authentication and Authorization:** The backend handles user authentication, allowing customers to create accounts, log in securely, and access personalized features like order history and user profiles.

- **Order Processing:** The backend ensures seamless order processing, including secure payment transactions. It accurately manages inventory levels, tracks orders, and securely handles payment information to provide customers with a reliable shopping experience.

- **API Integration:** It provides a comprehensive set of APIs that the frontend relies on to fetch product details, process orders, and handle user interactions.

## 💻 Technology Stack

- **Headless CMS:** Strapi
- **Database:** PostgreSQL
- **Image Management:** Cloudinary

## 🚀 Setup and Installation

Follow these steps to set up the ShoeStore backend on your local machine:

1. `**Clone the Repository:**`
   Copy the following code to clone this repository.

```
https://github.com/Mohosin999/ShoeStore-eCommerce-Project-Backend.git
```

2. `**Navigate to the Project Directory:**`
   Go to your project directory that your already created.

```
cd your-repo
```

3. `**Install Dependencies:**`
   Install all dependencies by typing this in your terminal.

```
yarn
```

4. `**Configure Environment Variables:**`
   Create a `.env` file in the root directory and set the following variables:

```
HOST=0.0.0.0
PORT=1337
APP_KEYS=<your_app_keys>
API_TOKEN_SALT=<your_api_token_salt>
ADMIN_JWT_SECRET=<your_admin_jwt_secret>
TRANSFER_TOKEN_SALT=<your_transfer_token_salt>
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=<your_jwt_secret>
CLOUDINARY_NAME=<your_cloudinary_name>
CLOUDINARY_KEY=<your_cloudinary_key>
CLOUDINARY_SECRET=<your_cloudinary_secret>
```

# `==============================================`

# Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>

## Cloudinary Setup

### `Set Up Cloudinary Account:`

- If you haven't already, sign up for a Cloudinary account.
- Retrieve your Cloudinary API credentials, including your cloud_name, api_key, and api_secret.

### Install and Configure the Cloudinary Plugin in Strapi:

- In your Strapi project directory, install the Cloudinary plugin using npm or yarn.

### Configure the plugin in config/plugins.js Add your Cloudinary credentials

### Add Environment Variables:

- In your project's .env file, add your Cloudinary credentials.
