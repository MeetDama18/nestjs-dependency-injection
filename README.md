# NestJS Assignment 3 – Dependency Injection & Modules

A NestJS project implementing custom modules, shared services with Dependency Injection, and cross-module communication between Users, Products, and Orders.

## Live Deployment (Optional)
<!-- Add your Render or live deployment link here if deployed -->

---

## Short Explanation: Dependency Injection in NestJS

Dependency Injection (DI) is an architectural design pattern where a class requests dependencies from external sources rather than creating them directly. In NestJS:
- **Loose Coupling:** Controllers and services depend on abstractions/interfaces rather than concrete implementations, making components decoupled.
- **Code Reusability:** Services (such as `LoggerService`) can be decorated with `@Injectable()` and exported from a shared module to be reused across `UsersModule`, `ProductsModule`, and `OrdersModule` without duplicating logic or managing instantiation manually.
- **Testability & Maintainability:** The Inversion of Control (IoC) container manages singletons, lifecycles, and injections, allowing individual units to be tested using mock providers.

---

## API Endpoints
- `GET /products` — Retrieve all products
- `GET /products/:id` — Retrieve a single product by ID
- `POST /products` — Create a new product
- `POST /orders` — Create an order combining user and product data

---

## Deliverables & Screenshots

### 1. GET /products and POST /products
<img width="1912" height="1076" alt="Screenshot 2026-09-25 192100" src="https://github.com/user-attachments/assets/62db8016-3080-45de-9aeb-eea187a777d7" />
<img width="1917" height="1071" alt="Screenshot 2026-09-25 192048" src="https://github.com/user-attachments/assets/f06f06d6-bc62-4953-99a7-54d05f58db9d" />

### 2. LoggerService Terminal Console Output
<img width="1891" height="1057" alt="Screenshot 2026-09-28 001619" src="https://github.com/user-attachments/assets/7777363a-2b62-48ca-bed4-1b3224daab82" />

### 3. POST /orders (Combined User & Product Data)
<img width="1897" height="1060" alt="Screenshot 2026-09-28 001921" src="https://github.com/user-attachments/assets/b8b36e8a-5078-4d62-b045-5e0285f888fa" />
