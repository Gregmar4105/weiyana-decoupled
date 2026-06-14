# 📁 Directory Structure

This reference outlines the major directories and files in the repository. Use this to quickly find where components, controllers, styles, or configuration reside without recursively listing directories.

---

## 🏗️ Repository Layout Root

```text
weiyana-decoupled/ (Root)
├── .cursor/                  # Cursor editor configuration
│   └── mcp.json              # Model Context Protocol definition (shadcn)
├── .obsidian/                # Obsidian Vault configuration (vault settings, ignorable directories)
├── .vscode/                  # VS Code settings and MCP mappings
├── app/                      # Backend Laravel PHP Application Core
├── bootstrap/                # Laravel bootstrap and cache
├── config/                   # Laravel Backend Configuration
├── database/                 # Laravel Migrations, Factories, & Seeders
├── public/                   # Publicly accessible assets (images, robots.txt, etc.)
├── resources/                # Backend views (blade) and default web assets
├── routes/                   # Backend route files (web, api, console)
├── storage/                  # Laravel application logs, cache, & uploads
├── tests/                    # Backend automated tests
├── weiyana-react-frontend/   # React Frontend Application (nested root)
├── README.md                 # Project introduction
└── composer.json             # PHP Composer packages configuration
```

---

## 💾 Backend (Laravel App) Details

*   **`app/` (Application Core)**
    *   `Http/`
        *   `Controllers/`: Laravel API endpoint handlers (inheriting from `Controller.php`).
    *   `Models/`: Eloquent database models representing tables. Contains `User.php`.
    *   `Actions/`: Action classes for specific workflows. Contains `Fortify/` for authentication management (login, register, passkeys, etc.).
    *   `Providers/`: Service providers setting up framework bindings.
*   **`config/` (Configuration)**
    *   `app.php`: Global application name, environment, key, timezone, etc.
    *   `fortify.php`: Active features for Laravel Fortify (authentication, login, registration, password resets, passkeys, 2FA).
    *   `sanctum.php`: Sanctum stateful domain and cookie settings.
    *   `cors.php`: Cross-Origin Resource Sharing configuration.
*   **`database/` (Database & Migrations)**
    *   `migrations/`: Database schema definitions (SQLite/MySQL migrations). Look here to inspect table fields.
*   **`routes/` (Routing)**
    *   `api.php`: API endpoints prefixed with `/api`.
    *   `web.php`: Standard web routes (only resolves `/` to render the Laravel welcome page).
    *   `console.php`: Artisan command definition routes.

---

## 🎨 Frontend (React App) Details

Located under `weiyana-react-frontend/`.

```text
weiyana-react-frontend/
├── public/                   # Static assets (logos, icons)
├── src/                      # React source code root
│   ├── assets/               # Local images, SVG files, styles
│   ├── components/           # React elements
│   │   ├── ui/               # Reusable shadcn atomic widgets (buttons, dialogs, inputs)
│   │   └── SidebarLayout.tsx # Authentication wrapping viewport frame with sidebar
│   ├── context/              # Global application states
│   │   ├── AuthContext.tsx   # Sign-in, sign-up, session, and user details state
│   │   └── ThemeContext.tsx  # Light/Dark mode state and toggle hook
│   ├── hooks/                # Custom React hooks (e.g. use-mobile.ts)
│   ├── lib/                  # Library bindings
│   │   ├── axios.ts          # Configured Axios HTTP client for Sanctum
│   │   └── utils.ts          # Tailwind CSS merge utilities (cn function)
│   ├── login/                # Authenticational components
│   │   ├── LoginPage.tsx     # Sign-in screen with form validation and logo
│   │   └── RegisterPage.tsx  # Sign-up screen
│   ├── routes/               # Navigation router declarations
│   │   ├── index.tsx         # Main BrowserRouter declaration & route mappings
│   │   ├── DashboardPage.tsx # Authenticated main workspace screen
│   │   ├── ProtectedRoute.tsx# Wrapper enforcing logged-in status
│   │   ├── GuestRoute.tsx    # Wrapper enforcing logged-out status (redirects to /dashboard)
│   │   ├── Error404.tsx      # Standard 404 Page Not Found screen
│   │   └── Error500.tsx      # Generic crash / server error screen
│   ├── App.css               # Application custom style overrides
│   ├── App.tsx               # Root App component providing Context Providers and Router
│   ├── index.css             # Tailwind v4 directives and CSS theme variables
│   └── main.tsx              # React entry mount point
├── components.json           # Shadcn UI CLI configuration
├── vite.config.ts            # Vite compile and local proxy settings
├── package.json              # NPM script and dependency definitions
└── tsconfig.json             # TypeScript compiler settings
```

---

⬅️ Back to [Home](00_Home.md)
