# 👞 ShoeStore - An eCommerce Platform (Backend)

## 📚 Table of Contents

- [Description](#-description)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)

## 📖 Description

The ShoeStore eCommerce Platform Backend, powered by Strapi, serves as the robust foundation that drives the entire online shopping experience. This backend system is responsible for managing and organizing all the crucial data and operations that make ShoeStore a seamless and efficient platform for users, administrators, and developers alike.

## 🔆 Key Features

- _Product Management:_ The backend enables administrators to effortlessly manage the product catalog. This includes adding new products, updating existing ones, and categorizing items for easy navigation.

- **User Authentication and Authorization:** The backend handles user authentication, allowing customers to create accounts, log in securely, and access personalized features like order history and user profiles.

- **Order Processing:** Order details are meticulously handled by the backend, ensuring smooth processing, accurate inventory management, and order tracking for customers.

- **API Integration:** It provides a comprehensive set of APIs that the frontend relies on to fetch product details, process orders, and handle user interactions.

## Technology Stack

The ShoeStore backend is built using the Strapi framework, a powerful open-source headless CMS and API generator. Strapi offers a user-friendly admin interface that simplifies content management and API creation, making it an ideal choice for building a dynamic and feature-rich eCommerce platform.

## Setup and Deployment

To set up the ShoeStore backend locally, follow the installation instructions provided in the repository's README.md file. Once configured, the backend can be deployed to various hosting platforms, ensuring your eCommerce platform is accessible to users around the world.

## Contribution

Contributions to the ShoeStore backend are welcomed! Whether it's fixing bugs, adding new features, or improving performance, you can contribute by submitting pull requests following the guidelines mentioned in the repository.

## License

The ShoeStore backend is licensed under the MIT License. For more details, refer to the [LICENSE](backend/LICENSE) file.

By providing a robust backend infrastructure, ShoeStore delivers a seamless shopping experience to customers while offering administrators the tools they need to manage and expand the platform efficiently.

# ======================================================================================================

# 🚀 Getting started with Strapi

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
