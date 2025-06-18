# Node.js Server for Angular Storefront - Crash Course

This server provides the backend functionality for the Angular frontend, allowing users to perform CRUD (Create, Read, Update, Delete) operations on products. The server utilizes Express and interacts with a JSON file to manage product data.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features

- **Express Server:** The server is built with Express, providing a robust and scalable backend.
- **CRUD Operations:** Supports Create, Read, Update, and Delete operations on product data.
- **JSON Data Storage:** Products are stored and manipulated within a JSON file instead of a traditional database.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thecodedeck/angular-cc-1-server.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Run the server:
   ```bash
   npm start
   ```
2. The server will be running on http://localhost:3000/.

3. The Angular frontend will interact with these API endpoints to perform CRUD operations on products.

## License

This project is licensed under the MIT License.

🧾 Clothes Shop API (Node.js + PayPal)
Prosty backend do sklepu z ubraniami, stworzony w Node.js z użyciem Express i integracją płatności PayPal. Dane produktów są przechowywane lokalnie w pliku db.json.

📦 Funkcjonalności
REST API dla operacji CRUD na ubraniach

Obsługa paginacji

Integracja z PayPal:

Tworzenie zamówienia

Finalizacja płatności

Middleware CORS i obsługa JSON

🚀 Uruchomienie lokalne
1. Klonowanie repozytorium
bash
Kopiuj
Edytuj
git clone https://github.com/twoj-login/clothes-shop-backend.git
cd clothes-shop-backend
2. Instalacja zależności
bash
Kopiuj
Edytuj
npm install
3. Ustaw zmienne środowiskowe
Utwórz plik .env w katalogu głównym i dodaj:

env
Kopiuj
Edytuj
PAYPAL_CLIENT_ID=twój_client_id
PAYPAL_SECRET=twój_secret
Domyślnie używana jest sandboxowa wersja środowiska PayPal.

4. Uruchom serwer
bash
Kopiuj
Edytuj
node index.js
Serwer wystartuje na http://localhost:3000

📡 Endpointy API
🔁 PayPal Payments
POST /api/payment
Tworzy nowe zamówienie PayPal.

Body:

json
Kopiuj
Edytuj
{
  "total": 50
}
Response:

json
Kopiuj
Edytuj
{
  "approvalUrl": "https://www.paypal.com/checkoutnow?token=...",
  "orderID": "ID..."
}
POST /api/payment/capture
Finalizuje płatność.

Body:

json
Kopiuj
Edytuj
{
  "orderID": "ID..."
}
Response:

json
Kopiuj
Edytuj
{
  "status": "COMPLETED",
  "details": { ... }
}
👕 Clothes API
GET /clothes?page=0&perPage=10
Zwraca paginowaną listę ubrań.

POST /clothes
Dodaje nowy produkt.

Body:

json
Kopiuj
Edytuj
{
  "image": "https://example.com/shirt.png",
  "name": "T-shirt",
  "price": "25",
  "rating": 4
}
PUT /clothes/:id
Aktualizuje produkt o danym ID.

DELETE /clothes/:id
Usuwa produkt o danym ID.