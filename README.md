# Stock Manager

<img src="https://simpleicons.org/icons/javascript.svg" width="30px" height="30px"> &nbsp;
<img src="https://simpleicons.org/icons/express.svg" width="30px" height="30px"> &nbsp;
<img src="https://simpleicons.org/icons/prisma.svg" width="30px" height="30px">

This is a web application built using Node.js, Express and Prisma ORM to manage and track inventory in a company. The project aims to provide an efficient and user-friendly solution for managing stock levels, item information, and warehouse operations.

## Getting Started

To get started with Stock Manager, follow these steps:

1. Clone the repository from GitHub: `git clone git://github.com/gabrielhz/stockmanager.js`
2. Install the dependencies: `npm install`
3. Set up the database connection in `.env` file: `DATABASE_URL="mysql://user:passwd@localhost:3306/db"`
4. Run the database migrations: `npx prisma migrate dev`
5. Start the application: `npm run dev`

## Features

Stock Manager offers the following features:

- **Inventory Management**: Track stock levels for each item in the warehouse.
- **Item Information**: View and update item details, including name, type, and since date.
- **Warehouse Operations**: Manage warehouse operations, such as stock adjustments and item transfers between warehouses.
- **User Management**: Create and manage user accounts with access control.

## Contributing

We welcome contributions from the community! To contribute to Stock Manager, follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Follow the standard code formatting and style guidelines.
4. Run the tests and ensure they pass.
5. Submit a pull request with a clear description of the changes made.

## License

This project is licensed under the MIT License. Please review the license file for more details.

## Support

If you have any questions or need assistance with Stock Manager, feel free to reach out to the project maintainer at gabrielramoscardoso@hotmail.com.

---

This project was built using the following technologies:

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)

---

This project was inspired by the following resources:

- [Prisma ORM Documentation](https://www.prisma.io/docs/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express Documentation](https://expressjs.com/en/api.html)

---

© 2024 Gabriel Ramos Cardoso. All rights reserved.
