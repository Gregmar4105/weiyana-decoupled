# 🛠️ Development Workflows

A quick-reference guide for commands, local development configurations, and setup procedures.

---

## 🚀 Local Servers Setup

During local development, both backend and frontend servers need to be active.

### 1. Backend Server (Laravel)
*   **Via Laravel Herd (Recommended on macOS/Windows)**:
    Laravel Herd automatically hosts the backend at `http://weiyana-decoupled.test`. No manual CLI serve command is necessary!
*   **Via Artisan Serve CLI**:
    If Herd is not active or preferred, run the PHP local development server at the root directory:
    ```bash
    php artisan serve
    ```
    *This hosts the backend API on `http://127.0.0.1:8000` (ensure to update Vite's target proxy URL in `vite.config.ts` if not using the `.test` domain).*

### 2. Frontend Server (Vite + React)
Navigate to the frontend folder and start the dev server:
```bash
cd weiyana-react-frontend
npm install
npm run dev
```
*Hosts the client application on `http://localhost:5173`.*

---

## 🗄️ Database Commands (Laravel Artisan)

Run these commands at the root directory:

*   **Run Migrations**:
    Apply new table definitions to the SQLite database.
    ```bash
    php artisan migrate
    ```
*   **Fresh Rebuild (with Seeding)**:
    Wipes all tables and databases, re-runs all migrations, and runs seeders.
    ```bash
    php artisan migrate:fresh --seed
    ```
*   **Rollback Migrations**:
    Roll back the last batch of database migrations.
    ```bash
    php artisan migrate:rollback
    ```

---

## 📦 Dependency Commands

### 💾 PHP Composer (Backend)
Run these commands in the root directory:
*   **Install Dependencies**: `composer install`
*   **Add Package**: `composer require <package-name>`
*   **Add Dev Package**: `composer require <package-name> --dev`

### 🎨 NPM (Frontend)
Run these commands inside the `weiyana-react-frontend/` directory:
*   **Install Dependencies**: `npm install`
*   **Add Dependency**: `npm install <package-name>`
*   **Add Dev Dependency**: `npm install <package-name> -D`
*   **Check Linter**: `npm run lint`
*   **Production Build**: `npm run build`

---

⬅️ Back to [Home](00_Home.md)
