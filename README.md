# Paginated-Apis

# Express Pagination API

This is a simple Express.js application that demonstrates how to implement pagination for a list of users. The application includes an endpoint to fetch paginated user data.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Example Request](#example-request)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This application is built using Express.js and provides a paginated API endpoint for fetching a list of users. The pagination functionality is implemented to handle query parameters for page and limit.

## Installation

To run this application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/express-pagination-api.git

2. Navigate to the project directory:
   ```bash
   cd express-pagination-api
3. Install the dependencies:
   ```bash
   npm install

   
## Usage
   ```bash
   npm run dev
## GET
{
  "message": "Hello World! We are live at port 3000"
}

## GET/users
# Query Parameters:

page (integer): The page number (starting from 1).
limit (integer): The number of users per page.
Response
```bash
{
  "results": [
    {
      "id": 1,
      "name": "John Doe"
    },
    {
      "id": 2,
      "name": "Jane Doe"
    },
    ...
  ],
  "next": {
    "page": 2,
    "limit": 5
  },
  "previous": {
    "page": 1,
    "limit": 5
  }
}


### Example Request

```bash
http://localhost:3000/users?page=2&limit=5


### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

1. Fork the repository.
2. Create a new branch: git checkout -b feature/your-feature-name.
3. Commit your changes: git commit -m 'Add some feature'.
4. Push to the branch: git push origin feature/your-feature-name.
5. Open a pull request.
