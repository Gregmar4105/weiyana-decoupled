# 🔀 Routing and Endpoints

This note maps all client-side page URLs (React Router) and server-side API endpoints (Laravel routing and Fortify authentication).

---

## 🎨 Frontend Client-Side Routes

Configured in [index.tsx](file:///c:/Users/PC/Herd/weiyana-decoupled/weiyana-react-frontend/src/routes/index.tsx) using React Router.

### 🔓 Guest Routes
*Only accessible when **not** authenticated. If a logged-in user visits these, they are redirected to `/dashboard` by the `GuestRoute` wrapper.*

| Path | Component | Purpose |
| :--- | :--- | :--- |
| `/login` | `LoginPage` | User Sign-In screen (features validation, logo representation, dark/light theme toggle). |
| `/register` | `RegisterPage` | User Sign-Up screen. |

### 🔒 Protected Routes
*Only accessible when authenticated. If an unauthenticated user visits these, they are redirected to `/login` by the `ProtectedRoute` wrapper. All protected pages are rendered inside the `SidebarLayout` frame.*

| Path | Component | Purpose |
| :--- | :--- | :--- |
| `/` | `Navigate` | Redirects directly to `/dashboard`. |
| `/dashboard` | `DashboardPage` | The primary workstation view containing user summary, activity timelines, and widgets. |

### ⚠️ Fallback Pages
*   **404 Not Found**: Any undefined URL matches `*` and renders `Error404`.
*   **500 Internal Error**: Assigned as the `errorElement` on the Guest and Protected routers to catch unhandled errors and display `Error500`.

---

## 💾 Backend API Endpoints

### 🔑 Authentication Routes (Fortify & Sanctum)
These endpoints handle session and cookie operations. They do not have custom Controller bindings in the workspace because they are managed directly by Laravel Fortify and Sanctum under the hood.

| Method | Endpoint | Payload | Response | Description |
| :--- | :--- | :--- | :--- | :--- |
| `GET` | `/sanctum/csrf-cookie` | None | `204 No Content` | Sets the `XSRF-TOKEN` cookie required for writing requests (POST/PUT/DELETE). Must be called before Login/Register. |
| `POST` | `/login` | `{ email, password }` | `204 No Content` / `422 Unprocessable` | Standard session creation. Sets the `laravel_session` cookie. |
| `POST` | `/register` | `{ name, email, password, password_confirmation }` | `201 Created` / `422 Unprocessable` | Creates a new user record and sets the `laravel_session` cookie. |
| `POST` | `/logout` | None | `204 No Content` | Invalidate and clear the user's session cookie. |

### 🌐 User API Routes
Registered in [api.php](file:///c:/Users/PC/Herd/weiyana-decoupled/routes/api.php).

*   `GET /api/user`
    *   **Middleware**: `auth:sanctum`
    *   **Description**: Retrieves the details of the authenticated user.
    *   **Response**: `200 OK` with JSON user object, or `401 Unauthorized` if not logged in.

---

⬅️ Back to [Home](00_Home.md)
