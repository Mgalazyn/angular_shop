# DeiTeam

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Angular Shop Frontend

To repozytorium zawiera frontend aplikacji sklepu internetowego napisanej w Angularze. Umożliwia przeglądanie produktów, dodawanie ich do koszyka, zarządzanie koszykiem oraz realizację płatności przez PayPal.

---

## Funkcjonalności

- **Przeglądanie produktów** – lista produktów pobierana z backendu, wyświetlanie szczegółów, ocenianie.
- **Dodawanie do koszyka** – każdy produkt można dodać do koszyka, ilość tego samego produktu sumuje się.
- **Koszyk** – podgląd zawartości koszyka, usuwanie produktów, podsumowanie kwoty, licznik produktów.
- **Płatność PayPal** – integracja z PayPal, przekierowanie do płatności i obsługa statusu po powrocie.
- **Responsywny interfejs** – czytelny wygląd na komputerach i urządzeniach mobilnych.

---

## Struktura katalogów

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── cart/
│   │   │   ├── product/
│   │   │   ├── payments/
│   │   │   ├── product/
│   │   ├── home/
│   │   │   ├── home.component.ts  -> glowna strona zbierajaca caly routing, komponenty itd
│   │   ├── interfaces/
│   │   │   ├── payments.ts
│   │   ├── assets/
│   │   ├── styles
│   │   ├── services/
│   │   │   ├── cart.service.ts
│   │   │   ├── payment.service.ts
│   │   │   ├── api.service.ts
│   │   │   ├── product.service.ts
│   │   │   └── ...
│   │   └── ...
│   └── ...
└── ...
```

---

## Szybki start

1. **Zainstaluj zależności:**
   ```bash
   npm install
   ```

2. **Uruchom aplikację:**
   ```bash
   ng serve
   ```
   Domyślnie frontend będzie dostępny pod adresem [http://localhost:4200](http://localhost:4200).

3. **Połącz z backendem:**
   - Upewnij się, że backend (Node.js/Express) działa na porcie 3000.
   - Adresy API są skonfigurowane na `http://localhost:3000`.

---

## Najważniejsze pliki

- **components/cart/** – komponent koszyka, wyświetlanie i zarządzanie produktami w koszyku.
- **components/product/** – komponent pojedynczego produktu.
- **components/payments/** – obsługa płatności PayPal.
- **services/cart.service.ts** – logika koszyka (dodawanie, usuwanie, ilości).
- **services/payment.service.ts** – komunikacja z backendem w celu realizacji płatności.

---

## Konfiguracja płatności PayPal

- Po kliknięciu "Zapłać przez PayPal" użytkownik zostaje przekierowany do PayPal.
- Po zatwierdzeniu płatności następuje powrót do aplikacji i wyświetlenie statusu transakcji.

---