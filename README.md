# Rainforest: Sponsored Related Products

> Replication of a popular e-commerce site's basic product page. This repo is for a single component - the sponsored related posts carousel.

This project scales up a new back-end to the legacy front-end codebase.

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> This component uses PostgreSQL. Please ensure that PostgreSQL is running is running, run the commands below, then execute `npm run seed` to seed your database.

- `npm run build` Runs webpack in production mode
- `npm start` Starts server listening on port 3003

Visit http://localhost:3003/?id=[id] to view the related products for product id [id]. (Note: seed file generates product info for product id's 1-100. Visiting any id outside that range or exluding an id in the url parameter will load the message "No product selected.")

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 10.15.3

## Development

- `npm run build-dev` Runs webpack in dev mode
- `npm run server-dev` Starts nodemon listening on port 3003
- `npm run test` Runs jest tests

### Installing Dependencies

From within the root directory:

```sh
npm install
```

## Technologies Used
- PostgreSQL - persistence
- Express - web server
- Postgres.js - database driver
- axios - AJAX requests
- Nginx - proxy server
- AWS EC2 - deployment and scaling

### CRUD API

|    Method    |           Endpoint          |                   Action                |
| ------------ | --------------------------- | --------------------------------------- |
| **POST**     |  /api/related_products/:id         |  CREATE a product for a given id     |
| **GET**      |  /api/related_products/:id         |  READ the related products for a given id |
| **GET**      |  /api/related_products/product/:id |  READ the product data by id  |
| **PUT**      |  /api/related_products/:id  |  UPDATE product by product id     |
| **DELETE**   |  /api/related_products/:id  |  DELETE product by review id     |

**Example Data Inputs for the POST and PUT endpoints**

/:id is the product ID

In order: product name, price, Prime availability (0 is false, 1 is yes), the image URL, number of reviews, and average rating.
```json
[
  "productName",
  3.5,
  0,
  "http://stuff.com/productImage.png",
  3,
  0.75
]
```

## Other repos from the same project

  - https://github.com/TheRainforest/product-images
  - https://github.com/TheRainforest/details
  - https://github.com/TheRainforest/product-images
  - https://github.com/TheRainforest/reviews
